const { LessonsRepository } = require('../../repositories/LessonsRepository');
const { UpdateLessonController } = require('./UpdateLessonController');
const { UpdateLessonService } = require('./UpdateLessonService');

const lessonsRepository = LessonsRepository.getInstance();

const updateLessonService = new UpdateLessonService(lessonsRepository);

const updateLessonController = new UpdateLessonController(updateLessonService);

module.exports = { updateLessonController };
