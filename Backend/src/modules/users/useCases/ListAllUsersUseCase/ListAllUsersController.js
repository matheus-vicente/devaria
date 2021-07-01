class ListAllUsersController {
  #listAllUsersService;

  constructor(listAllUsersService) {
    this.#listAllUsersService = listAllUsersService;
  }

  handle(req, res) {
    try {
      const users = this.#listAllUsersService.execute();

      const usersWithoutPassword = users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          admin: user.admin,
          created_at: user.created_at,
          updated_at: user.updated_at,
        }
      });

      return res.status(200).json(usersWithoutPassword);
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
}
 module.exports = { ListAllUsersController };
