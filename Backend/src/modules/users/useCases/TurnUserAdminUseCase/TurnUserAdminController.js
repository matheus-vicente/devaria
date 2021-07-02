class TurnUserAdminController {
  #turnUserAdminService;

  constructor(turnUserAdminService) {
    this.#turnUserAdminService = turnUserAdminService;
  }

  async handle(req, res) {
    try {
      const { id } = req.params;

      await this.#turnUserAdminService.execute(id);

      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { TurnUserAdminController };
