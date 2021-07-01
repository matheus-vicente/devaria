const { Router } = require('express');

const { createModuleController } = require('../modules/lessons/useCases/CreateModuleUseCase');

const modulesRouter = Router();

modulesRouter.post('/', (req, res) => createModuleController.handle(req, res));

module.exports =  { modulesRouter };
