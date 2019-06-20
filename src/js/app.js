App = {
    web3Provider: null,
    contracts: {},
    account: "0x0",
    address: "0x116e679B2c694e3ce7523EdD50583869D2AF6Cf0",

    display: function(result) {
        document.getElementById("output").innerText = result;
        $("#modal").modal();
    },

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

    createDoge: function(name, phrase) {
        App.contracts.Doggies.at(App.address).then(function(instance) {
            return instance
                .createDoge(name, phrase, {
                    from: App.account
                })
                .then(function(result) {
                    App.display(result.tx);
                });
        });
    },

    speak: function(id) {
        App.contracts.Doggies.at(App.address).then(function(instance) {
            return instance
                .speak(Number(id), {
                    from: App.account
                })
                .then(function(result) {
                    App.display(result);
                });
        });
    },

    ownerOf: function(id) {
        App.contracts.Doggies.at(App.address).then(function(instance) {
            return instance
                .ownerOf(id, {
                    from: App.account
                })
                .then(function(result) {
                    App.display(result);
                });
        });
    },

    balanceOf: function(owner) {
        App.contracts.Doggies.at(App.address).then(function(instance) {
            return instance
                .balanceOf(owner, {
                    from: App.account
                })
                .then(function(result) {
                    App.display(result.c[0]);
                });
        });
    },

    approve: function(to, id) {
        App.contracts.Doggies.at(App.address).then(function(instance) {
            return instance
                .approve(to, id, {
                    from: App.account
                })
                .then(function(result) {
                    App.display(result);
                });
        });
    },

    safeTransferFrom: function(from, to, id) {
        App.contracts.Doggies.at(App.address).then(function(instance) {
            return instance
                .transferFrom(from, to, id, {
                    from: App.account
                })
                .then(function(result) {
                    App.display(result);
                });
        });
    }
};

$(function() {
    $(window).load(function() {
        App.init();
    });
});
