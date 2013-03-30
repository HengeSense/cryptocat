var _ = require('lodash'),
    path = require('path'),
    test = require('../../testbase')();

var Salsa20 = require('../../../src/chrome/js/salsa20');


test['Salsa20'] = {

  'key=8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0': {
    beforeEach: function() {
      this.key = [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    },

    'nonce=0,0,0,0,0,0,0,0': {
      beforeEach: function() {
        this.salsa20 = new Salsa20(this.key, [0,0,0,0,0,0,0,0]);
      },
      'check first 512 bytes': function() {
        test.assert.same(
            this.salsa20.getHexString(512),
            '5b393241fd4138028805e664fdd1589f45379ccb57f884234329013e5f0ac632' +
            '0ed2c012bff2b4cbec4f102abad7380828c3a4872995ff062626039958757f91' +
            'ffadf73799ffc0662d41b9e2a646c9fce9486ba8e7ab433623452151fdd06a23' +
            '04c64a5ebcf7e7f1a03df95855f3cf1e8f3a95f33b330325ba0e87eba988e9d1' +
            '7eeff4eb21ba6a13c3774dc0a4d2fcacafbc9dc4b5b6d72d4b8d44d86b4f5fe7' +
            'dcb4cd4f7b9b2bdcbf2e53c50ff5ebc9f62ab923e2204221bc019afdb32f7493' +
            'bab99f2e7bb4708c20480884e77ad038b260c56ec89317847f3548bf12c50f73' +
            '06e44f7453fa4565658f02d9b839c6c3e1c255c813d8fb2bf621ac0e32da99a3' +
            '62fe684d8a57078601bf1809a2ed96df5da5b8d248b87118cd5b20a2945cafb6' +
            'f578933bdfd4ae25955088a30d57810f031b6582bf75cb7dba3dde96d07be006' +
            '6a6a56031fb1a40ac095a6978a7f68a2f34d854bef168cc5c8669290976b6ff4' +
            'cebd421b6dea6242926715c8161c330756ebf0217d84ec942a04664d56a1c8ba' +
            '0408c91f2242dc1dff5052bce9f73f7f29d9887bbe6370f1899af0285d22f28b' +
            '78e42cd079d391993a2e1c11d4b9e307ca7377828d1a48a569b47553e98f9ec4' +
            '6ecc14402da20972df13a86a7707b782c50673a220583d8bcbc5408780f95697' +
            '7edb177c27da09644efa06e008b7fc659e06a532223e88675820ba78e6647877'
        );
      }
    },

    'nonce=255,255,255,255,255,255,255,255': {
      beforeEach: function() {
        this.salsa20 = new Salsa20(this.key, [255,255,255,255,255,255,255,255]);
      },

      'check first 512 bytes': function() {
        test.assert.same(
            this.salsa20.getHexString(512),
            '61b832391a3584a26de4a61f9100132c8c182b83b26c8305b55b64b9dfb420b2fc' +
                '348d934b092d5cbe0b967283bdef5945309d768227e29d018555571aa20e3a6634' +
                '92275eec13315aca0353314a314d67ba117f7e6ebb9ac9d0fa4e0e87f34c73b7e9' +
                'e089d92ff9a6b775d40e5e00c10935f5fc52c0def08fba6d87ed7b4de694a751fc' +
                'b6c4472b8da0ef2b2e605d467cd9a397e6b337827ab2e6f3eb9c5f98e60f256592' +
                'c39bd029ed2c86de3f4f70baffc66aca63f043dafd348dd75aac37636e4f04ebaf' +
                '727d66ca2a0005ee2ff8519ccb95a3979d20539e1ef9d736251acdc9da54e4132c' +
                '9c112f16d4d42ad68a48b3ad35d67db5f49a023376f9c0d5340ac317e7b24749e3' +
                'db1c8fcbb045566eb2ba1658dad2dd737914103df8232f59dca466038663940332' +
                '6449b6cc5ede58fe5bf5500d5c170f2057402467b7d35f88870beb083811320abf' +
                'dcc581b11468474be50fd5f66cbcbe5f08016e582710537ca2c63157896c19c409' +
                '8591ac7109478e9b00b35cdcd575b64488af2151bd7f1c87acc186ad7b6d79698f' +
                '8a8133646ab8044fef54dc3c2dd9b6d8bc2f93f9dc22bf4cf63607b94a7fd1d0bf' +
                'e450e0a1ed90618ac6f716f740946e0ebb1957749b374f47520a0bdd11d74f55c3' +
                '2f27ce85bae4238eb121fd8a2c08f00d8723a850bca31d195271202e98cdd13e18' +
                '1abaf478ab754b27d975247fbd1dbca489'
        );
      }
    }
  },

  'key=1,255,32,78,90,3,200,5,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,133,211,1': {
    beforeEach: function() {
      this.key = [1,255,32,78,90,3,200,5,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,133,211,1];
    },

    'nonce=0,0,0,0,0,0,0,0': {
      beforeEach: function() {
        this.salsa20 = new Salsa20(this.key, [0,0,0,0,0,0,0,0]);
      },
      'check first 512 bytes': function() {
        test.assert.same(
            this.salsa20.getHexString(512),
            '3e8311417455a6abf6d1548d1b0866006343bb7bcef27f44879b88710897785f' +
            '96e65abd965788574f84f41a44b4b6bd5bb06eae65793128ede75a0bafb9b164' +
            '523ca836f233558b78b83d5751a93cb5131def0d787e0b5044bc0416213cef70' +
            'd1c835414f30b467af33436942f1ecebf7f80b60e2afd3078334de660395ae19' +
            'b242a41a2900ad02e7d5522b13a35691ae16055fd1777e7514fdfafd59e70626' +
            '57072102c2be634d1d27241ddc555f7ca5933aef7b16fc70d9c33b769e7f23d1' +
            '67e8fea371140f45b26d31fcc8bf2d298bbf7c03a7b7555717e79204459772d7' +
            'fefa3af253e3b6d1af57811047b032b0e6b038f1df02dbb14e79117e21b866c4' +
            '24a14847641f9da6789aab06a66f159c9cfc2b96192751d0c23ca7893adfcc6f' +
            '82671368ba4ae794e7f9378cbe6090b2c132e154fe4f7decca8613b771be93d3' +
            '03f62f960df01ca9c8d63b63f267d797d7613d5f4fbd5abc9ccdf435d3e8a2be' +
            '138861fa812465e7ada1f4259a29bec7ba7e9ffa78b3c4add61b228a1701a9aa' +
            '58195befb7f57051cf2fd01e6f785fcda5a83a1877038517fe59d6c57448e15a' +
            '62711c40b523153d9e3f2cfeae9166f129f3db0c73be97eb5b7a12b08f53f3c0' +
            '5013fe1241a874cb625dbf34380bfe6fe132959d3b528e102b11ad0faf2c0143' +
            'a680950006a99d3617a92273c6d5198aa71bd4aa2ab98623057b3a679cf544a7'
        );
      }
    },

    'nonce=255,255,255,255,255,255,255,255': {
      beforeEach: function() {
        this.salsa20 = new Salsa20(this.key, [255,255,255,255,255,255,255,255]);
      },

      'check first 512 bytes': function() {
        test.assert.same(
            this.salsa20.getHexString(512),
            'b342fa48e76835d16a17b20cade51c3337f93c9819dd9866475196010d258f94' +
            '95eadc0d3dde542cceba358bb99a744e2fe699f6e6f98e30abdd007c24c2aa72' +
            '3b6719f0bcabaeeb7d420c3d4f48c40864401ca929081bf7e888d3ef7f99e247' +
            '0ac7a80605345aa824499672393ae8896a2ef55e3e0275c6c21d49bb18482a29' +
            '773c34e31e597eb01ff9ca0db33a288c00c2615758fe6f1832f3afdefc7c195a' +
            '749581d04ecbf86903af3e5767fed1f43fd6232c5798f75136ce366cf7737fa1' +
            '0a6c066fd77be5b1bf62e5b13c357010cce314f6e5aa0a36cef10eb57e301745' +
            '1a98c0e50cf0cadfd2d26134b4c35a08013019a0157eae3798f72b567e2edfc6' +
            '3415101bd2e7cf60d303a8bd926cd0a7184a8a4053838100249e2c4fd79ba120' +
            'bd24202a1f7db642871170a4a2d03997f76339d25e7ab5c8a18f9e12a372a9f9' +
            '5ef561b275dca094d78174fab8aefb5ac3cf82e873e2a8373b144f9bf9448b06' +
            '16fdaa0a3b367fb677546412c0a038d8c5677feb334dd52ad14f555c596de436' +
            '3e445dd70da65d732de4432b5e2cca05e654cf640f12ec6bad59c26cc9e906ea' +
            '48e2161a4f186d5da764b12cd9480e4686db9391f2d29cd1696b5e584bb04b6f' +
            'feb815e1709f39c1e24aa344014b3616b1c34bb034644233857dd33a6ee428d1' +
            '90b0d1438f8e6730221226c452c6ff1f0122ac47ac3a477f2f8bf4659d4c5ad9'
        );
      }
    }
  }

};



module.exports[path.basename(__filename)] = test;
