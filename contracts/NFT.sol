// SPDX-License-Identifier: CentraleSupelec
pragma solidity >=0.4.22 <0.9.0;


contract NFT {

    address public owner;
    string public name;
    string public description;
    uint public price = 0;
    bool public isForSale = false;

    function setInfo(string calldata _name, string calldata _description) public {
        name = _name;
        description = _description;
        owner = tx.origin;
    }

    function transfer(address _to) public {
        require(owner == tx.origin, "You are not the owner.");
        owner = _to;
    }

    function setPrice(uint _price) public {
        price = _price;
    }

    function putUpForSale() public {
        isForSale = true;
    }

    // Getters

    function getName() public view returns (string memory) {
        return name;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getPrice() public view returns (uint) {
        return price;
    }

    function isItForSale() public view returns (bool) {
        return isForSale;
    }
}

contract NFTlist {

    NFT[] public nfts;
    uint[] public test = [2];

    function testList() public view returns (uint) {
        return test[0];
    }

    // Main functions

    function mint(string calldata _name, string calldata _description) public {
        nfts.push(new NFT());
        nfts[nfts.length - 1].setInfo(_name, _description);
    }

    function transfer(uint id, address _to) public {
        nfts[id].transfer(_to);
    }

    // Getters

    function getNFTName(uint id) public view returns (string memory) {
        return nfts[id].getName();
    }

    function getOwner(uint id) public view returns (address) {
        return nfts[id].getOwner();
    }
}