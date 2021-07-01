class CreateModuleService {
  #modulesRepository;

  constructor(modulesRepository) {
    this.#modulesRepository = modulesRepository;
  }

  execute(name) {
    const moduleAlreadyExists = this.#modulesRepository.findByName(name);

    if (moduleAlreadyExists) {
      throw new Error("Módulo informado já existe!");
    }

    const module = this.#modulesRepository.create(name);

    return module;
  }
}

module.exports = { CreateModuleService };
