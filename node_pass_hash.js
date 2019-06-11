function passHash(str) {

var crypto = require('crypto');

var result = crypto.createHash('md5').update(str).digest("hex");

return result;
}
