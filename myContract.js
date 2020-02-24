var Web3 = require("web3");
var path = require("path");


var MyContractJSON = require(path.join(__dirname, "build/contracts/ehr.json"));
var contractAddress = MyContractJSON.networks["4002"].address;
const coinbase = "0x3Ce2157C922425dde34dC7d1E0CB241F15d5Ba4f";
var abi = MyContractJSON.abi;
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var MyContract = new web3.eth.Contract(abi, contractAddress);

module.exports = {
    MyContract,
    web3,
    abi,
    MyContractJSON,
    contractAddress,
    coinbase
};

