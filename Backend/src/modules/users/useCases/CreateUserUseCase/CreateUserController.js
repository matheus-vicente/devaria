class CreateUserController {
  #createUserService;

  constructor(createUserService) {
    this.#createUserService = createUserService;
  }

  handle(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = this.#createUserService.execute(name, email, password);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { CreateUserController };
