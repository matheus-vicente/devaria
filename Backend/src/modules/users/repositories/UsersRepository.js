const models = require('../../../database/models');

class UsersRepository {
  #users;

  static #INSTANCE;

  constructor() {
    this.#users = [];
  }

  static getInstance() {
    if (!UsersRepository.#INSTANCE) {
      UsersRepository.#INSTANCE = new UsersRepository();
    }

    return UsersRepository.#INSTANCE;
  }

  create(name, email, password) {
    models.User.create({
      name,
      email,
      password,
    });
  }

  findByEmail(email) {
    const user = this.#users.find(user => user.email === email);

    return user;
  }

  findById(id) {
    const user = this.#users.find(user => user.id === id);

    return user;
  }

  turnAdmin(id) {
    const user = this.#users.find(user => user.id === id);

    user.admin = !user.admin;
    user.updated_at = new Date();
  }

  list() {
    return this.#users;
  }
}

module.exports = { UsersRepository };
