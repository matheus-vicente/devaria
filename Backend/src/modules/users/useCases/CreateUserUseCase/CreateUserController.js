class CreateUserController {
  #createUserService;

  constructor(createUserService) {
    this.#createUserService = createUserService;
  }

  async handle(req, res) {
    try {
      const { name, email, password } = req.body;

      await this.#createUserService.execute(name, email, password);

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { CreateUserController };
