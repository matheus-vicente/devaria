const { UsersRepository } = require('../../repositories/UsersRepository');
const { TurnUserAdminController } = require('./TurnUserAdminController');
const { TurnUserAdminService } = require('./TurnUserAdminService');

const usersRepository = UsersRepository.getInstance();

const turnUserAdminService = new TurnUserAdminService(usersRepository);

const turnUserAdminController = new TurnUserAdminController(turnUserAdminService);

module.exports = { turnUserAdminController };
