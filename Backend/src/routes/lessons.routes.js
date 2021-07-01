const { Router } = require('express');

const { createLessonController } = require('../modules/lessons/useCases/CreateLessonUseCase');
const { deleteLessonController } = require('../modules/lessons/useCases/DeleteLessonUseCase');
const { listAllLessonsController } = require('../modules/lessons/useCases/ListAllLessonsUseCase');
const { updateLessonController } = require('../modules/lessons/useCases/UpdateLessonUseCase');

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated');
const { ensureUserIsAdmin } = require('../middlewares/ensureUserIsAdmin');
const { checkModuleExists } = require('../middlewares/checkModuleExists');

const lessonsRouter = Router();

lessonsRouter.get('/', (req, res) => listAllLessonsController.handle(req, res));

lessonsRouter.post(
  '/',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res, next) => checkModuleExists(req, res, next),
  (req, res) => createLessonController.handle(req, res),
);

lessonsRouter.put(
  '/:id',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res) => updateLessonController.handle(req, res),
);

lessonsRouter.delete(
  '/:id',
  (req, res, next) => ensureAuthenticated(req, res, next),
  (req, res, next) => ensureUserIsAdmin(req, res, next),
  (req, res) => deleteLessonController.handle(req, res),
);

module.exports =  { lessonsRouter };
