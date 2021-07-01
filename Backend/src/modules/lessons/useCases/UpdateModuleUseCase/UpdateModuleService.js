class UpdateModuleService {
  #modulesRepository;

  constructor(modulesRepository) {
    this.#modulesRepository = modulesRepository;
  }

  execute(id, name) {
    const moduleAlready = this.#modulesRepository.findById(id);

    if (!moduleAlready) {
      throw new Error('Módulo citado não extiste!');
    }

    const module = this.#modulesRepository.findByName(name);

    if (module) {
      throw new Error('Já existe um módulo com este nome!');
    }

    this.#modulesRepository.update(id, name);
  }
}

module.exports = { UpdateModuleService };
