const { UsersRepository } = require('../../repositories/UsersRepository');
const { HashProvider } = require('../../providers/HashProvider');
const { CreateUserController } = require('./CreateUserController');
const { CreateUserService } = require('./CreateUserService');

const usersRepository = UsersRepository.getInstance();
const hashProvider = new HashProvider();

const createUserService = new CreateUserService(usersRepository, hashProvider);

const createUserController = new CreateUserController(createUserService);

module.exports = { createUserController };
