class ListAllModulesController {
  #listAllModulesService;

  constructor(listAllModulesService) {
    this.#listAllModulesService = listAllModulesService;
  }

  handle(req, res) {
    try {
      const modules = this.#listAllModulesService.execute();

      return res.status(200).json(modules);
    } catch (error) {
      return res.status(401).json({ error: String(error) });
    }
  }
}

module.exports = { ListAllModulesController };
