class AuthenticateUserController {
  #authenticateUserService;

  constructor(authenticateUserService) {
    this.#authenticateUserService = authenticateUserService;
  }

  async handle(req, res) {
    try {
      const { email, password } = req.body;

      const { user, token } = await this.#authenticateUserService.execute(email, password);

      const userWithoutPassword = {
        name: user.name,
        email: user.email,
        admin: user.admin,
        created_at: user.created_at,
      }

      return res.status(200).json({
        user: userWithoutPassword,
        token,
      });
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}

module.exports = { AuthenticateUserController };
