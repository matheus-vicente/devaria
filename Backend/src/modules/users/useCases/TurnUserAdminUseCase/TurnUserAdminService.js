class TurnUserAdminService {
  usersRepository;

  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(user_id) {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error('Usuário não existe!');
    }

    await this.usersRepository.turnAdmin(user_id);
  }
}

module.exports = { TurnUserAdminService };
