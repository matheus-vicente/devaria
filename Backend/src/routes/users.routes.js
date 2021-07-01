const { Router } = require('express');

const { listAllUsersController } = require('../modules/users/useCases/ListAllUsersUseCase');
const { createUserController } = require('../modules/users/useCases/CreateUserUseCase');
const { turnUserAdminController } = require('../modules/users/useCases/TurnUserAdminUseCase');

const usersRouter = Router();

usersRouter.get('/', (req, res) => listAllUsersController.handle(req, res));

usersRouter.post('/', async (req, res) => await createUserController.handle(req, res));

usersRouter.put('/admin/:id', (req, res) => turnUserAdminController.handle(req, res));

module.exports = { usersRouter };
