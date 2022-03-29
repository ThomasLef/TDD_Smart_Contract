// SPDX-License-Identifier: CentraleSupelec
pragma solidity >=0.4.22 <0.9.0;


contract NFT {

    address public owner;
    string public name;
    string public description;

    function mint(string calldata _name, string calldata _description) public {
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

    function test() public pure returns (uint) {
        return 0;
    }

    function mint(string calldata _name, string calldata _description) public {
        NFT nft;
        nft.mint(_name, _description);
        nfts.push(nft);
    }

    function getNFT(uint id) public view returns (NFT) {
        return nfts[id];
    }
}