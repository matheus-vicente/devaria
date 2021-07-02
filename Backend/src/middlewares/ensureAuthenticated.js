const { verify } = require('jsonwebtoken');

const { secret } = require('../config/auth');
const { UsersRepository } = require('../modules/users/repositories/UsersRepository');

const usersRepository = UsersRepository.getInstance();

module.exports = {
  async ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(400).json({ error: 'JWT não existe!' });
    }

    const [_, token] = authHeader.split(' ');

    try {
      const { sub } = verify(token, secret);

      const user = await usersRepository.findById(sub);

      if (!user) {
        throw new Error('Usuário não cadastrado!');
      }

      req.user = {
        id: sub,
        admin: user.admin,
      }

      return next();
    } catch (error) {
      return res.status(400).json({ error: String(error) });
    }
  }
};
