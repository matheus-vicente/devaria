class ListAllModulesService {
  modulesRepository;

  constructor(modulesRepository) {
    this.modulesRepository = modulesRepository;
  }

  async execute() {
    const modules = await this.modulesRepository.list();

    return modules;
  }
}

module.exports = { ListAllModulesService };
