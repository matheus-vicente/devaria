class CreateUserService {
  #usersRepository;

  constructor(usersRepository) {
    this.#usersRepository = usersRepository;
  }

  execute(name, email, password) {
    const emailAlreadyExists = this.#usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error('Já existe uma conta com este e-mail!');
    }

    if (password.length < 8) {
      throw new Error('A senha deve conter pelo menos 8 caracteres!');
    }

    const user = this.#usersRepository.create(name, email, password);

    return user;
  }
}

module.exports = { CreateUserService };
