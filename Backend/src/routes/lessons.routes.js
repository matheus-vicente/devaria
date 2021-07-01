const { Router } = require('express');

const { createLessonController } = require('../modules/lessons/useCases/CreateLessonUseCase');
const { checkModuleExists } = require('../middlewares/checkModuleExists');

const lessonsRouter = Router();

lessonsRouter.post(
  '/',
  (req, res, next) => checkModuleExists(req, res, next),
  (req, res) => createLessonController.handle(req, res)
);

module.exports =  { lessonsRouter };
