# TASK:

Build a simple DApp like CryptoKitties. Don’t care much about the details. Implement what you think is essential. As a minimum:

-   Smart contract with the data and the business logic
-   Web App for interaction with the smart contract.
-   Deploy the smart contract on Kovan network.
-   Deploy the web app on IPFS.
-   Provide information about the development environment and tests for the smart contract.

# README

This is the repository for both the smart contracts and the web app.
The smart contracts were developed using the **Truffle** development suite combined with the **Ganache-cli** Ethereum RPC simulator.
The contract tests are held in the test directory and they may be run via the commands: `truffle dev` and then `test` once inside the truffle console.

### Kovan testnet
The contact is deployed on the kovan testnet and is visible here on [etherscan](https://kovan.etherscan.io/address/0x116e679b2c694e3ce7523edd50583869d2af6cf0).

### IPFS
**Important: You must have MetaMask; You must have selected Kovan Testnet; You must have some KETH to interact with the contracts.**

The web app has been deployed on the IPFS [here](https://gateway.pinata.cloud/ipfs/QmPdiFNxD4psMnARxFS2Wu2roH6D531wY6YbNbq4Lo7uDF/src/).
