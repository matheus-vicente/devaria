const { LessonsRepository } = require('../../repositories/LessonsRepository');
const { ListAllLessonsController } = require('./ListAllLessonsController');
const { ListAllLessonsService } = require('./ListAllLessonsService');

const modulesRepository = LessonsRepository.getInstance();

const listAllLessonsService = new ListAllLessonsService(modulesRepository);

const listAllLessonsController = new ListAllLessonsController(listAllLessonsService);

module.exports = { listAllLessonsController };
