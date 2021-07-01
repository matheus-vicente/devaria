const { compare, hash } = require('bcryptjs');

class HashProvider {
  async generateHash(payload) {
    return hash(payload, 8);
  }

  async compareHash(payload, hashedPassword) {
    return compare(payload, hashedPassword);
  }
}

module.exports = { HashProvider };
