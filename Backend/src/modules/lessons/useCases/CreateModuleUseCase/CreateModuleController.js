class CreateModuleController {
  createModuleService;

  constructor(createModuleService) {
    this.createModuleService = createModuleService;
  }

  async handle(req, res) {
    try {
      const { name } = req.body;

      const module = await this.createModuleService.execute(name);

      return res.status(201).json(module);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { CreateModuleController };
