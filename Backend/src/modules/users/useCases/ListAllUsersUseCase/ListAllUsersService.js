class ListAllUsersService {
  #usersRepository;

  constructor(usersRepository) {
    this.#usersRepository = usersRepository;
  }

  execute() {
    const users = this.#usersRepository.list();

    return users;
  }
}

module.exports = { ListAllUsersService };
