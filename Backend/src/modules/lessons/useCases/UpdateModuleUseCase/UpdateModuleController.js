class UpdateModuleController {
  #updateModuleService;

  constructor(updateModuleService) {
    this.#updateModuleService = updateModuleService;
  }

  async handle(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const module = await this.#updateModuleService.execute(id, name);

      return res.status(200).json(module);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { UpdateModuleController };
