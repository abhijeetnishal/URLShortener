const crypto = require('crypto');

function generateBase62String(length = 7) {
    const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const randomValues = crypto.randomBytes(length);
    let result = '';

    for (let i = 0; i < length; i++) {
        const index = randomValues[i] % 62;
        result += charset.charAt(index);
    }

    return result;
}

module.exports = { generateBase62String };