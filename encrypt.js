var prompt = require('prompt');
var bip38 = require('bip38')
var wif = require('wif')

 prompt.start();
 prompt.get(['PrivateKey', 'Password'], function (err, result) {

   /*console.log('Command-line input received:');
   console.log('  Private Key: ' + result.PrivateKey);
   console.log('  Password: ' + result.Password);*/

 var myWifString = result.PrivateKey;
 var decoded = wif.decode(myWifString)
 
 var encryptedKey = bip38.encrypt(decoded.privateKey, decoded.compressed, result.Password)

 console.log('\nDone! \n')

 console.log('Your encrypted key is: ' +encryptedKey)


});