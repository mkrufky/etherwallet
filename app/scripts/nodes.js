'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
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
    'eth_mew': {
        'name': 'TFX',
        'blockExplorerTX': 'https://etherscan.io/tx/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.ETH,
        'eip155': true,
        'chainId': 1,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'Trinity Offical',
        'lib': new nodes.customNode('https://api.myetherapi.com/eth', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;