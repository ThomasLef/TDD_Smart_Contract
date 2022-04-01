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
    await nftlist.mint("test1", "This is a first NFT", {from: account[0]});
    await nftlist.mint("test2", "This is a second NFT");
    assert(await nftlist.getNFTName(0) == "test1");
    assert(await nftlist.getNFTName(1) == "test2");
  });

  it('Should be able to transfer when there are several NFTs', async () => {
    const nftlist = await NFTlist.deployed();
    assert(await nftlist.getOwner(0) == account[0])
    await nftlist.transfer(0, account[1])
    assert(await nftlist.getOwner(0) == account[1])
  });

});

contract('NFTsales', async () => {

  it('Should be able to set a price of an NFT', async () => {
    const nft = await NFT.deployed();
    await nft.setInfo("test1", "This is a test NFT");
    await nft.setPrice(30);
    assert(await nft.getPrice() == 30);
  });

  it('Should be able to put up for sale an NFT', async () => {
    const nft = await NFT.deployed();
    await nft.putUpForSale();
    assert(await nft.isItForSale() == true);
  });
});