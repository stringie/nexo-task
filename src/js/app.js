App = {
    web3Provider: null,
    contracts: {},
    account: "0x0",

    init: function() {
        return App.initWeb3();
    },

    initWeb3: function() {
        // TODO: refactor conditional
        if (typeof web3 !== "undefined") {
            // If a web3 instance is already provided by Meta Mask.
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            // Specify default instance if no web3 instance provided
            App.web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
            web3 = new Web3(App.web3Provider);
        }
        return App.initContract();
    },

    initContract: function() {
        $.getJSON("NexoDoggies.json", function(doggies) {
            // Instantiate a new truffle contract from the artifact
            App.contracts.Doggies = TruffleContract(doggies);
            // Connect provider to interact with contract
            App.contracts.Doggies.setProvider(App.web3Provider);
        });

        // Load account data
        web3.eth.getCoinbase(function(err, account) {
            if (err === null) {
                App.account = account;
            }
        });
    },

    createDoge: function() {
        App.contracts.Doggies.deployed().then(function(instance) {
            return instance
                .createDoge("doge0", "wow", App.account, {
                    from: App.account
                })
                .then(function(result) {
                    console.log(result);
                });
        });
    },

    getDoge: function() {
        App.contracts.Doggies.deployed().then(function(instance) {
            return instance.getDoge(0, { from: App.account }).then(function(result) {
                console.log(result);
            });
        });
    }
};

$(function() {
    $(window).load(function() {
        App.init();
    });
});
