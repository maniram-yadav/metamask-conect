require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
   networks: {
    localhost: {
      // url: "http://127.0.0.1:7545"
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      mining: {
        auto: false,
        interval: 1000
      }
    },
  
  }
};
