const { Router } = require('express');

const { createLessonController } = require('../modules/lessons/useCases/CreateLessonUseCase');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');
const { ensureUserIsAdmin } = require('../middlewares/ensureUserIsAdmin');
const { checkModuleExists } = require('../middlewares/checkModuleExists');

const lessonsRouter = Router();

lessonsRouter.post(
  '/',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res, next) => checkModuleExists(req, res, next),
  (req, res) => createLessonController.handle(req, res)
);

module.exports =  { lessonsRouter };
