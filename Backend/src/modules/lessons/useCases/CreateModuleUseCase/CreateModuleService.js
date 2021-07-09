class CreateModuleService {
  modulesRepository;

  constructor(modulesRepository) {
    this.modulesRepository = modulesRepository;
  }

  async execute(name) {
    const moduleAlreadyExists = await this.modulesRepository.findByName(name);

    if (moduleAlreadyExists) {
      throw new Error("Módulo informado já existe!");
    }

    const module = await this.modulesRepository.create(name);

    return module;
  }
}

module.exports = { CreateModuleService };
