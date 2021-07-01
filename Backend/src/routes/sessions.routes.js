const { Router } = require('express');

const { authenticateUserController } = require('../modules/users/useCases/AuthenticateUserUseCase');

const sessionsRouter = Router();

sessionsRouter.post('/login', async (req, res) => await authenticateUserController.handle(req, res));

module.exports = { sessionsRouter };
