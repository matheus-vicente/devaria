class ListAllUsersService {
  #usersRepository;

  constructor(usersRepository) {
    this.#usersRepository = usersRepository;
  }

  async execute() {
    const users = await this.#usersRepository.list();

    return users;
  }
}

module.exports = { ListAllUsersService };
