const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    db: 'mean3',
    uri: 'mongodb://localhost:27017/' + this.db,
    secret: crypto
}