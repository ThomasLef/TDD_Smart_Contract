const NFT = artifacts.require("NFT");
const NFTlist = artifacts.require('NFTlist');

module.exports = function (deployer) {
  deployer.deploy(NFT);
  deployer.deploy(NFTlist);
};
