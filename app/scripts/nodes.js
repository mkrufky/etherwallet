"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.metamaskNode = require("./nodeHelpers/metamask");
nodes.nodeTypes = {
    AKROMA: "AKROMA",
    Custom: "CUSTOM"
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
    'akroma_offical': {
        'name': 'AKROMA',
        'blockExplorerTX': 'https://akroma.io/explorer/transaction/[[txHash]]',
        'blockExplorerAddr': 'https://akroma.io/explorer/address/[[address]]',
        'type': nodes.nodeTypes.AKROMA,
        'eip155': true,
        'chainId': 200625,
        'tokenList': require('./tokens/akromaTokens.json'),
        'abiList': require('./abiDefinitions/akromaAbi.json'),
        'estimateGas': true,
        'service': 'Akroma Offical',
        'lib': new nodes.customNode('https://rpc.akroma.io', '')
    },
    'akroma_remote': {
        'name': 'AKROMA',
        'blockExplorerTX': 'https://akroma.io/explorer/transaction/[[txHash]]',
        'blockExplorerAddr': 'https://akroma.io/explorer/address/[[address]]',
        'type': nodes.nodeTypes.AKROMA,
        'eip155': true,
        'chainId': 200625,
        'tokenList': require('./tokens/akromaTokens.json'),
        'abiList': require('./abiDefinitions/akromaAbi.json'),
        'estimateGas': true,
        'service': 'Akroma Remote',
        'lib': new nodes.customNode('https://remote.akroma.io', '')
    }
};

nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
