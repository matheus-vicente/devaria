const { Router } = require('express');

const { createModuleController } = require('../modules/lessons/useCases/CreateModuleUseCase');
const { listAllModulesController } = require('../modules/lessons/useCases/ListAllModulesUseCase');
const { updateModuleController } = require('../modules/lessons/useCases/UpdateModuleUseCase');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');
const { ensureUserIsAdmin } = require('../middlewares/ensureUserIsAdmin');

const modulesRouter = Router();

modulesRouter.post(
  '/',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res) => createModuleController.handle(req, res),
);

modulesRouter.put(
  '/:id',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res) => updateModuleController.handle(req, res)
);

modulesRouter.get('/', (req, res) => listAllModulesController.handle(req, res));

module.exports =  { modulesRouter };
