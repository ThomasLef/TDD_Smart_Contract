const assert = require('assert');
const NFT = artifacts.require('NFT');
const NFTlist = artifacts.require('NFTlist');

contract('NFT', async (account) => {

  it('Should be able to generate a first NFT', async () => {
    const nft = await NFT.deployed();
    await nft.setInfo("test","This is a test nft");
    assert(await nft.getName() == "test")
  });

  it('Should be able to transfer the NFT', async () => {
    const nft = await NFT.deployed();
    await nft.setInfo("test","This is a test nft");
    assert(await nft.getOwner() == account[0])
    await nft.transfer(account[1])
    assert(await nft.getOwner() == account[1])
  });

  it('Should not be able to transfer when you are not the owner', async () => {
    const nft = await NFT.deployed();
    await nft.setInfo("test","This is a test nft");
    assert(await nft.getOwner() == account[0])
    assert.rejects(async () =>  await nft.transfer(account[1], {from: account[1]}), "You are not the owner.")
  })

});

contract('NFTlist', async (account) => {

  it('Should be able to deploy several contracts', async () => {
    const nftlist = await NFTlist.deployed();
    assert(await nftlist.testList() == 2);
  });

  it('Should be able to mint two separated NFTs', async () => {
    const nftlist = await NFTlist.deployed();
    await nftlist.mint("test1", "This is a first NFT");
    await nftlist.mint("test2", "This is a second NFT");
    assert(await nftlist.getNFTName(0) == "test1");
    assert(await nftlist.getNFTName(1) == "test2");
  });
});