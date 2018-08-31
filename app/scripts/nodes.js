"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
  EGEM: "EGEM",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.ETH];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
	name: "CUS",
	blockExplorerTX: "",
	blockExplorerAddr: "",
	type: nodes.nodeTypes.Custom,
	eip155: false,
	chainId: "",
	tokenList: [],
	abiList: [],
	service: "Custom",
	lib: null
};
nodes.nodeList = {
	egem: {
		name: "EGEM",
		blockExplorerTX: "https://explorer.egem.io/tx/[[txHash]]",
		blockExplorerAddr: "https://explorer.egem.io/addr/[[address]]",
		type: nodes.nodeTypes.EGEM,
		eip155: true,
		chainId: 1987,
		tokenList: require("./tokens/egemTokens.json"),
		abiList: require("./abiDefinitions/egemAbi.json"),
		estimateGas: true,
		service: "egem.io",
		lib: new nodes.customNode("https://jsonrpc.egem.io/custom", "")
	}
};

nodes.ethPrice = require("./nodeHelpers/ethPrice");
module.exports = nodes;
