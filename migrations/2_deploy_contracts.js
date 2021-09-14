const RynoRouter = artifacts.require("RynoRouter");

module.exports = function (deployer, network) {
  deployer.deploy(RynoRouter, '0x18713A4ff739C3868B0AC788882087D5Ee29794B', '0xD2CFBCDbDF02c42951ad269dcfFa27c02151Cebd');
};
