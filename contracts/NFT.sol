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

    function getName() public view returns (string memory) {
        return name;
    }
}