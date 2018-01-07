'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    Trinity: "TFX",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'tfx_offical': {
        'name': 'Trinity',
        'blockExplorerTX': 'https://explorer.trinityfx.org/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.trinityfx.org/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'Trinity',
        'lib': new nodes.customNode('http://rpc.trinityfx.org', '')
    }
    // , //TODO: Test Network
    // 'rop_mew': {
    //     'name': 'Ropsten',
    //     'type': nodes.nodeTypes.Ropsten,
    //     'blockExplorerTX': 'https://ropsten.etherscan.io/tx/[[txHash]]',
    //     'blockExplorerAddr': 'https://ropsten.etherscan.io/address/[[address]]',
    //     'eip155': true,
    //     'chainId': 3,
    //     'tokenList': require('./tokens/ropstenTokens.json'),
    //     'abiList': require('./abiDefinitions/ropstenAbi.json'),
    //     'service': 'MyEtherWallet',
    //     'lib': new nodes.customNode('https://api.myetherapi.com/rop', '')
    // }
};

nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
