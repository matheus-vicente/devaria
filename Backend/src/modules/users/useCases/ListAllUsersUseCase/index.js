const { UsersRepository } = require('../../repositories/UsersRepository');
const { ListAllUsersController } = require('./ListAllUsersController');
const { ListAllUsersService } = require('./ListAllUsersService');

const usersRepository = UsersRepository.getInstance();

const listAllUsersService = new ListAllUsersService(usersRepository);

const listAllUsersController = new ListAllUsersController(listAllUsersService);

module.exports = { listAllUsersController };
