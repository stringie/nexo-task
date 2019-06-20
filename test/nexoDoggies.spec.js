const NexoDoggies = artifacts.require("../contracts/core/NexoDoggies.sol");

contract("NexoDoggies", function([owner]) {
    beforeEach(async function() {
        this.doggies = await NexoDoggies.new({ from: owner });
    });

    it("Should create a Doge with the createDoge function", async function() {
        await this.doggies.createDoge("doge", "wow", { from: owner });

        const spoken = await this.doggies.speak(0);

        assert.equal(spoken["0"], "doge");
        assert.equal(spoken["1"], "wow");
    });
});
