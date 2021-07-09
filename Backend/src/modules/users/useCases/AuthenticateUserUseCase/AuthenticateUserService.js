const { sign } = require('jsonwebtoken');

const { secret, expiresIn } = require('../../../../config/auth');

class AuthenticateUserService {
  usersRepository;

  hashProvider;

  constructor(usersRepository, hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute(email, password) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Combinação de e-mail/senha está incorreta!');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new Error('Combinação de e-mail/senha está incorreta!');
    }

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    }
  }
}

module.exports = { AuthenticateUserService };
