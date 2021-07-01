class TurnUserAdminService {
  #usersRepository;

  constructor(usersRepository) {
    this.#usersRepository = usersRepository;
  }

  execute(user_id) {
    const userExists = this.#usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error('Usuário não existe!');
    }

    this.#usersRepository.turnAdmin(user_id);
  }
}

module.exports = { TurnUserAdminService };
