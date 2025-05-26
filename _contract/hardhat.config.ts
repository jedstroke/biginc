import { HardhatUserConfig } from "hardhat/config";
// require("@nomicfoundation/hardhat-ignition-viem");
// require("@nomicfoundation/hardhat-viem");
// require("hardhat");
// require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");


const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const API_KEY = process.env.API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  paths: {
    sources: "./contracts",
  },
  // networks: {
  //   hardhat: {
  //     chainId: 1337, // This is the default chainId for the Hardhat local network
  //   },
  // },
  networks: {
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygon: API_KEY
    }
  }
};

export default config;
