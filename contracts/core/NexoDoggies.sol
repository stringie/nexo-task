pragma solidity ^0.5.0;

import "../ERC/ERC721.sol";

contract NexoDoggies is ERC721 {
    struct Doge {
        string name;
        string catchphrase;
        uint8 rarity;
        uint256 birthdate;
    }

    Doge[] doggies;

    function createDoge(string memory _name, string memory _catchphrase) public returns (uint8) {
        require(bytes(_name).length > 0, "Doge name must not be null");
        require(bytes(_catchphrase).length > 0, "Doge name must not be null");

        uint256 _birthdate = block.number;

        Doge memory _doge = Doge({
            name: _name,
            catchphrase: _catchphrase,
            rarity: uint8(_birthdate.mod(10)),
            birthdate: _birthdate
        });

        uint256 _newDogeId = doggies.push(_doge);

        _mint(msg.sender, _newDogeId);

        return _doge.rarity;
    }

    function speak(uint8 id) public view returns (string memory, string memory) {
        return (doggies[id].name, doggies[id].catchphrase);
    }
}