const assert = require('assert');
const NFT = artifacts.require('NFT');

contract('NFT', async (account) => {

  it('Should be able to generate a first NFT',async () => {
    const nft = await NFT.deployed();
    await nft.mint("test","This is a test nft");
    assert(await nft.getName() == "test")
  });
});