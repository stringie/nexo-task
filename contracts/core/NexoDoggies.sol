pragma solidity ^0.5.0;

import "../ERC/ERC721.sol";
import "../common/Ownable.sol";

contract NexoDoggies is ERC721, Ownable {
    struct Doge {
        string name;
        string catchphrase;
        uint8 rarity;
        uint256 birthdate;
    }

    Doge[] doggies;

    function createDoge(string memory _name, string memory _catchphrase, address _owner) public {
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

        _mint(_owner, _newDogeId);
    }

    function getDoge(uint8 id) public view returns (string memory) {
        return doggies[id].name;
    }
}