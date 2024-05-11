const crypto = require('crypto');

function generateBase62String() {
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const randomValues = crypto.randomBytes(7);
    let result = "";
  
    for (let i = 0; i < 7; i++) {
      const index = randomValues[i] % 62;
      result += charset.charAt(index);
    }
  
    return result;
}

module.exports = {generateBase62String} ;