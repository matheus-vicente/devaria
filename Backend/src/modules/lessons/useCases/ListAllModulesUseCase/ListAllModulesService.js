class ListAllModulesService {
  #modulesRepository;

  constructor(modulesRepository) {
    this.#modulesRepository = modulesRepository;
  }

  execute() {
    const modules = this.#modulesRepository.list();

    return modules;
  }
}

module.exports = { ListAllModulesService };
