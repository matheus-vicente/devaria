const { UsersRepository } = require('../../repositories/UsersRepository');
const { CreateUserController } = require('./CreateUserController');
const { CreateUserService } = require('./CreateUserService');

const usersRepository = UsersRepository.getInstance();

const createUserService = new CreateUserService(usersRepository);

const createUserController = new CreateUserController(createUserService);

module.exports = { createUserController };
