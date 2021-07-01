class DeleteModuleService {
  #modulesRepository;

  constructor(modulesRepository) {
    this.#modulesRepository = modulesRepository;
  }

  execute(id) {
    const module = this.#modulesRepository.findById(id);

    if (!module) {
      throw new Error('Não é possível remover um módulo inexistente!');
    }

    this.#modulesRepository.delete(id);
  }
}

module.exports = { DeleteModuleService };
