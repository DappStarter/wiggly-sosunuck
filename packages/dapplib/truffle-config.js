require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rifle saddle huge hover prison suspect genius'; 
let testAccounts = [
"0x34a3b4e531e7b292428fc394b32e984402be813d78a9db2614e9c386647a29e0",
"0x400c63f607581503482de2cf839ec4ae2d3e33ab8f668bdc12db8d979927ebda",
"0x8de296c24a274cff0e99b76e7daddeb9123b5040f6841b7c312b0229f622ce47",
"0x91c854e43284f5a71a3bd15e3317c171991e33866a9f632035203634ff130bd6",
"0x7dd608884bee62c8cdc141ce6020e0087625529f3b0b10c2b484d5d10314ba85",
"0x3e0043570b31f51e6c25a44db5d82d58006e982eaa409f78f7ac27317c951f23",
"0xe781bb580c4fd45fbdd7bc95084688776eb5d0f5b33e9d2a15ee68a35470ac19",
"0x9a7b4b3e1f52a957103eb937a4b6a5b904a3f7e48c2882db98ba4ee0cd6b969b",
"0xa5119857f7597a937b3662abeaf4c54c95aca3f0514cfaa39028d558ad10fec9",
"0x4c69ecc00ca143394dc115d09ff499fad75131745f627e68002bcd87f445878f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

