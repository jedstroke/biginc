const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  // Deploy BigIncGenesis contract
  const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  ]);

  console.log("BigIncGenesis deployed to:", BigIncGenesis.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
