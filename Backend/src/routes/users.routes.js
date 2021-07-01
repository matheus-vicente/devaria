const { Router } = require('express');

const { createUserController } = require('../modules/users/useCases/CreateUserUseCase');

const usersRouter = Router();

usersRouter.post('/', (req, res) => createUserController.handle(req, res));

module.exports = { usersRouter };
