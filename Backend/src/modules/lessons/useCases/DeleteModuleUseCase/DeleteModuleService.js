class DeleteModuleService {
  modulesRepository;

  constructor(modulesRepository) {
    this.modulesRepository = modulesRepository;
  }

  async execute(id) {
    const module = await this.modulesRepository.findById(id);

    if (!module) {
      throw new Error('Não é possível remover um módulo inexistente!');
    }

    await this.modulesRepository.delete(id);
  }
}

module.exports = { DeleteModuleService };
