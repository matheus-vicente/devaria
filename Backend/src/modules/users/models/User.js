const { v4: uuidV4 } = require('uuid');

class User {
  id;

  name;

  email;

  password;

  created_at;

  updated_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

module.exports = { User };
