// SPDX-License-Identifier: CentraleSupelec
pragma solidity >=0.4.22 <0.9.0;


contract NFT {

    address public owner;
    string public name;
    string public description;

    function setInfo(string calldata _name, string calldata _description) public {
        name = _name;
        description = _description;
        owner = msg.sender;
    }

    function transfer(address _to) public {
        require(owner == msg.sender, "You are not the owner.");
        owner = _to;
    }

    // Getters

    function getName() public view returns (string memory) {
        return name;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}

contract NFTlist {

    NFT[] public nfts;
    uint[] public test = [2];

    function testList() public view returns (uint) {
        return test[0];
    }

    function mint(string calldata _name, string calldata _description) public {
        nfts.push(new NFT());
        nfts[nfts.length - 1].setInfo(_name, _description);
    }

    function getNFTName(uint id) public view returns (string memory) {
        return nfts[id].getName();
    }
}