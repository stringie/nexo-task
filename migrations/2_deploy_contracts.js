const Doggies = artifacts.require("../contracts/core/NexoDoggies.sol");

module.exports = function(deployer) {
    deployer.then(async function() {
        await deployer.deploy(Doggies, "testName");
    });
};
