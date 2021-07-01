const { LessonsRepository } = require('../../repositories/LessonsRepository');
const { DeleteLessonController } = require('./DeleteLessonController');
const { DeleteLessonService } = require('./DeleteLessonService');

const modulesRepository = LessonsRepository.getInstance();

const deleteLessonService = new DeleteLessonService(modulesRepository);

const deleteLessonController = new DeleteLessonController(deleteLessonService);

module.exports = { deleteLessonController };
