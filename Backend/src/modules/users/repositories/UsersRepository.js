const { v4: uuidV4 } = require('uuid');

const { User } = require('../../../database/models');

class UsersRepository {

  static #INSTANCE;

  static getInstance() {
    if (!UsersRepository.#INSTANCE) {
      UsersRepository.#INSTANCE = new UsersRepository();
    }

    return UsersRepository.#INSTANCE;
  }

  async create(name, email, password) {
    await User.create({
      id: uuidV4(),
      name,
      email,
      password,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  async findByEmail (email) {
    const user = await User.findOne({ where: { email }});

    return user;
  }

  async findById(id) {
    const user = await User.findOne({ where: { id } });

    return user;
  }

  async turnAdmin(id) {
    const user = await User.findOne({ where: { id } });

    user.admin = !user.admin;
    user.updated_at = new Date();

    await user.save();
  }

  async list() {
    const users = await User.findAll();

    return users;
  }
}

module.exports = { UsersRepository };
