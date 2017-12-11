var prompt = require('prompt');
var bip38 = require('bip38')
var wif = require('wif')

 prompt.start();

 prompt.get(['EncryptedKey', 'Password'], function (err, result) {

    /*var ek = result.EncryptedKey;
    if(ek.length > 10) ek = ek.substring(0,10)+"..."+ek.substring((result.EncryptedKey.length)-10, result.EncryptedKey.length); 

    console.log(' You entered private key: ' + ek);
    console.log(' You entered password: ' + result.Password);*/

    var decryptedKey = bip38.decrypt(result.EncryptedKey, result.Password);

    console.log('\nDone! \n');
    console.log("Your decrypted key is: " + wif.encode(0x80, decryptedKey.privateKey, decryptedKey.compressed));

});
