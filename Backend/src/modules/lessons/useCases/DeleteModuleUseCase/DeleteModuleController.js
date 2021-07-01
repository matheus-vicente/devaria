class DeleteModuleController {
  #deleteModuleService;

  constructor(deleteModuleService) {
    this.#deleteModuleService = deleteModuleService;
  }

  handle(req, res) {
    try {
      const { id } = req.params;

      this.#deleteModuleService.execute(id);

      return res.status(204).send();
    } catch (error) {
      return res.status(401).json({ error: String(error) });
    }
  }
}

module.exports = { DeleteModuleController };
