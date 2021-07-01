const { Router } = require('express');

const { createModuleController } = require('../modules/lessons/useCases/CreateModuleUseCase');
const { listAllModulesController } = require('../modules/lessons/useCases/ListAllModulesUseCase');
const { updateModuleController } = require('../modules/lessons/useCases/UpdateModuleUseCase');
const { deleteModuleController } = require('../modules/lessons/useCases/DeleteModuleUseCase');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');
const { ensureUserIsAdmin } = require('../middlewares/ensureUserIsAdmin');

const modulesRouter = Router();

modulesRouter.get('/', (req, res) => listAllModulesController.handle(req, res));

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
  (req, res) => updateModuleController.handle(req, res),
);

modulesRouter.delete(
  '/:id',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res) => deleteModuleController.handle(req, res),
);

module.exports =  { modulesRouter };
