const assert = require('assert');
const { globalAgent } = require('http');
const NFT = artifacts.require('NFT');

contract('NFT', async (account) => {

  it('Should be able to generate a first NFT',async () => {
    const nft = await NFT.deployed();
    await nft.mint("test","This is a test nft");
    assert(await nft.getName() == "test")
  });

  it('Should be able to transfer the NFT', async () => {
    const nft = await NFT.deployed();
    assert(await nft.getOwner() == "0x3eF6d061E91F3CD7aC5ccb2AD689c63B596Dc7D1")
    await nft.transfer("0x56Cd066E2A0215E40e89Da4e444358C6fB55AbA3")
    assert(await nft.getOwner() == "0x56Cd066E2A0215E40e89Da4e444358C6fB55AbA3")
  });
});