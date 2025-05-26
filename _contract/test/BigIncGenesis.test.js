const { expect } = require("chai");
const hre = require("hardhat");

describe("BigIncGenesis", function () {
  it("Should return expected available shares", async function () {
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);
    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);
    expect(await BigIncGenesis.getAvailableShares()).to.equal(82e6);
  });

  it("Should allocate 18% of total shares to the owner upon deployment", async function () {
    const [owner] = await hre.ethers.getSigners();
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);
    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);

    const expectedOwnerShares = 18e6;

    expect(await BigIncGenesis.getShares(owner.address)).to.equal(
      expectedOwnerShares
    );
  });

  it("Should correctly sell presale shares and end presale when sold out", async function () {
    const [owner] = await hre.ethers.getSigners();
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);
    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);

    // Assume presale allocation is 21% of the total supply per presale valuation
    const totalSupply = 457143e6;
    const amount = (21 * totalSupply) / 100;

    await USDT.connect(owner).approve(BigIncGenesis.target, amount);

    await BigIncGenesis.connect(owner).mintShare(USDT.target);

    expect(await BigIncGenesis.isPresaleActive()).to.equal(false);
  });

  it("Should correctly transfer shares between shareholders", async function () {
    const [owner, user1] = await hre.ethers.getSigners();
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);
    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);

    // Presale valuation
    const totalSupply = 457143e6;
    const amount = (21 * totalSupply) / 100;

    await USDT.connect(owner).approve(BigIncGenesis.target, amount);

    await BigIncGenesis.connect(owner).mintShare(USDT.target);

    // Transfer shares from buyer1 to buyer2
    await BigIncGenesis.connect(owner).transferShare(user1.address, 21e6);

    // Check the share balance of both buyers
    expect(await BigIncGenesis.getShares(owner.address)).to.equal(18e6);
    expect(await BigIncGenesis.getShares(user1.address)).to.equal(21e6);
  });

  it("Should revert if an invalid token address is used for minting", async function () {
    const [owner] = await hre.ethers.getSigners();
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);
    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);
    const invalidTokenAddress = "0x0000000000000000000000000000000000000000"; // Invalid token address
    const amount = 96000e6;

    await USDT.connect(owner).approve(BigIncGenesis.target, amount);

    await expect(
      BigIncGenesis.connect(owner).mintShare(invalidTokenAddress)
    ).to.be.revertedWith("Invalid token address");
  });

  it("Should allow only the owner to withdraw funds", async function () {
    const [owner, nonOwner] = await hre.ethers.getSigners();
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);

    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);

    const amount = 96000e6;

    await USDT.connect(owner).approve(BigIncGenesis.target, amount);

    await BigIncGenesis.connect(owner).mintShare(USDT.target);

    // Attempt withdrawal by non-owner should fail
    await expect(
      BigIncGenesis.connect(nonOwner).withdraw(USDT.target, amount)
    ).to.be.reverted;

    // Owner should be able to withdraw
    await BigIncGenesis.connect(owner).withdraw(USDT.target, amount);
  });

  it("Should allow the owner to seize shares from shareholders", async function () {
    const [owner, shareholder] = await hre.ethers.getSigners();

    const USDT = await hre.ethers.deployContract(
      "FakeERC20",
      ["Fake USDT", "USDT", 1000000e6],
      shareholder
    );

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);
    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);

    const amount = 96000e6;
    await USDT.connect(shareholder).approve(BigIncGenesis.target, amount);

    await BigIncGenesis.connect(shareholder).mintShare(USDT.target);

    // Owner seizes shares from shareholder
    await BigIncGenesis.connect(owner).seizeShares(shareholder.address);

    // Check that the shareholder's balance is 0
    expect(await BigIncGenesis.getShares(shareholder.address)).to.equal(0);

    expect(await BigIncGenesis.getShares(owner.address)).to.be.gt(18e6);
  });
  it("Should confirm contract holds balance and allow owner to withdraw", async function () {
    const [owner, nonOwner] = await hre.ethers.getSigners();
    const USDT = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDT",
      "USDT",
      1000000e6,
    ]);

    const USDC = await hre.ethers.deployContract("FakeERC20", [
      "Fake USDC",
      "USDC",
      1000000e6,
    ]);

    const BigIncGenesis = await hre.ethers.deployContract("BigIncGenesis", [
      USDT.target,
      USDC.target,
    ]);

    const amount = 96000e6;

    // Approve and mint shares
    await USDT.connect(owner).approve(BigIncGenesis.target, amount);
    await BigIncGenesis.connect(owner).mintShare(USDT.target);

    // Confirm contract holds USDT balance
    const contractBalance = await USDT.balanceOf(BigIncGenesis.target);
    expect(contractBalance).to.equal(amount);

    // Try withdrawal by non-owner (should fail)
    await expect(
      BigIncGenesis.connect(nonOwner).withdraw(USDT.target, amount)
    ).to.be.reverted;

    // Owner withdraws the balance
    await BigIncGenesis.connect(owner).withdraw(USDT.target, amount);

    // Confirm contract balance is now 0
    const newContractBalance = await USDT.balanceOf(BigIncGenesis.target);
    expect(newContractBalance).to.equal(0);
  });
});
