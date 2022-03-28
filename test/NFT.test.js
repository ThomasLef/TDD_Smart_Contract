const assert = require('assert');
const NFT = artifacts.require('NFT');

contract('NFT', async (account) => {

  before(async function () {
    const nft = await NFT.deployed();
  })

  it('Should be able to generate a first NFT',() => {
    nft.mint("test","This is a test nft");
    
  });
});