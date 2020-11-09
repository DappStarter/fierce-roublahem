require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rice saddle proof hockey area bone swarm'; 
let testAccounts = [
"0x8916e69ec1828be0c749a38ed7da0920731d00a5454a724aae1775ba18356cd1",
"0xefcb46aa86eb4d7e0274172f5e8b084ab2f5dae05a7afe00b995304a7fcaedd1",
"0x5012f2c1746f1cd890a0d874e8ebb7b8b1735e3f647cab6cd6e8c5885fdfb5fb",
"0x299c81bc95f7e506ded157dd1de074cdbcab0667589eabbb08ec2b3d98cede0e",
"0xbbab28ed94018fdb6d0d65c32389045e6dc9c1eb58bbb1c550cecb2c311ca12a",
"0x3621146e251bdd7f9d560e20337fdc9d47af72f548d3ec71d53856bb04eaaf34",
"0x25afd69664d25068f3862fd5b22c54dfe1729e967754bc13a98ae77dc1663ff3",
"0xb06888829059022f84203a4275a8dfdc46485ba4bf9abadb61012627ed3dfa2e",
"0xf781d6a304d10a4fb854963ec8c40b5a35454030b0297d2ae04cb7ba3d5856d1",
"0x2c4db84e4f363205b98d69677766eb44a432ba07b07b93fcb8cdfcb11b797416"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
