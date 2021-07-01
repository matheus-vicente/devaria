class UpdateModuleController {
  #updateModuleService;

  constructor(updateModuleService) {
    this.#updateModuleService = updateModuleService;
  }

  handle(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      this.#updateModuleService.execute(id, name);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { UpdateModuleController };
