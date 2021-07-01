const { UsersRepository } = require('../../repositories/UsersRepository');
const { HashProvider } = require('../../providers/HashProvider');
const { AuthenticateUserController } = require('./AuthenticateUserController');
const { AuthenticateUserService } = require('./AuthenticateUserService');

const usersRepository = UsersRepository.getInstance();
const hashProvider = new HashProvider();

const authenticateUserService = new AuthenticateUserService(usersRepository, hashProvider);

const authenticateUserController = new AuthenticateUserController(authenticateUserService);

module.exports = { authenticateUserController };
