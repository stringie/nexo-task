const NexoDoggies = artifacts.require("../contracts/core/NexoDoggies.sol");

contract("NexoDoggies", function([owner]) {
    beforeEach(async function() {
        this.doggies = await NexoDoggies.new({ from: owner });
    });
});
