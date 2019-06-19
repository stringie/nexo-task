import Web3 from "web3";

class Web3Service {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
        this.doggies = new this.web3.eth.Contract({}, "");
    }

    createDoge = async function (name, catchprase) {
        await this.doggies.methods.createDoge(name, catchprase);
    }
}
