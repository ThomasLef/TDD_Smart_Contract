const assert = require('assert');
const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', async (accounts) => {
    var simpleStorage;
  
    it('Should be able to set an initial value', async () => {
      simpleStorage = await SimpleStorage.deployed();
      var x = 5;
      await simpleStorage.set(x);
      let y = await simpleStorage.get();
      assert(y == 5);
    });
  });
  