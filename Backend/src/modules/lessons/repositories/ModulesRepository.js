const { Module } = require("../models/Modules");

class ModulesRepository {
  #modules;

  static #INSTANCE;

  constructor() {
    this.#modules = [];
  }

  static getInstance() {
    if (!ModulesRepository.#INSTANCE) {
      ModulesRepository.#INSTANCE = new ModulesRepository();
    }

    return ModulesRepository.#INSTANCE;
  }

  create(name) {
    const module = new Module();

    Object.assign(module, {
      name,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.#modules.push(module);

    return module;
  }

  findById(module_id) {
    const module = this.#modules.find((module) => module.id === module_id);

    return module;
  }

  findByName(name) {
    const module = this.#modules.find((module) => module.name === name);

    return module;
  }

  list() {
    return this.#modules;
  }

  update(id, name) {
    const module = this.#modules.find(module => module.id === id);

    module.name = String(name);
    module.updated_at = new Date();
  }

  delete(id) {
    const modules = this.#modules.filter(module => module.id !== id);

    this.#modules = modules;
  }
}

module.exports = { ModulesRepository };
