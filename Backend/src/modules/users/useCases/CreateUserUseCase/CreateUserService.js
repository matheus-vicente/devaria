class CreateUserService {
  #usersRepository;
  #hashProvider;

  constructor(usersRepository, hashProvider) {
    this.#usersRepository = usersRepository;
    this.#hashProvider = hashProvider;
  }

  async execute(name, email, password) {
    const emailAlreadyExists = await this.#usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error('Já existe uma conta com este e-mail!');
    }

    const hashedPassword = await this.#hashProvider.generateHash(password);

    await this.#usersRepository.create(name, email, hashedPassword);
  }
}

module.exports = { CreateUserService };
