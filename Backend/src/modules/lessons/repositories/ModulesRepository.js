const { v4: uuidV4 } = require('uuid');

const { Module } = require('../../../database/models');

class ModulesRepository {
  static #INSTANCE;

  static getInstance() {
    if (!ModulesRepository.#INSTANCE) {
      ModulesRepository.#INSTANCE = new ModulesRepository();
    }

    return ModulesRepository.#INSTANCE;
  }

  async create(name) {
    const module = await Module.create({
      id: uuidV4(),
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return module;
  }

  async findById(id) {
    const module = await Module.findOne({ where: { id } });

    return module;
  }

  async findByName(name) {
    const module = await Module.findOne({ where: { name } });

    return module;
  }

  async list() {
    const modules = await Module.findAll();

    return modules;
  }

  async update(id, name) {
    const module = await this.findById(id);

    module.name = name;
    module.updatedAt = new Date();

    module.save();

    return module;
  }

  async delete(id) {
    const modules = await this.findById(id);

    modules.destroy();
  }
}

module.exports = { ModulesRepository };
