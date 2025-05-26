const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BigIncGenesis", (m) => {
  const _usdtAddress = m.getParameter(
    "_usdtAddress",
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
  );
  const _usdcAddress = m.getParameter(
    "_usdcAddress",
    "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
  );


  const BigIncGenesis = m.contract("BigIncGenesis", [_usdtAddress, _usdcAddress]);


  return { BigIncGenesis };
});
