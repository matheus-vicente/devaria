const { LessonsRepository } = require('../../repositories/LessonsRepository');
const { CreateLessonController } = require('./CreateLessonController');
const { CreateLessonService } = require('./CreateLessonService');

const lessonsRepository = LessonsRepository.getInstance();

const createLessonService = new CreateLessonService(lessonsRepository);

const createLessonController = new CreateLessonController(createLessonService);

module.exports = { createLessonController };
