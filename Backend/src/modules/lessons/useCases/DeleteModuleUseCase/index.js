const { ModulesRepository } = require('../../repositories/ModulesRepository');
const { DeleteModuleController } = require('./DeleteModuleController');
const { DeleteModuleService } = require('./DeleteModuleService');

const modulesRepository = ModulesRepository.getInstance();

const deleteModuleService = new DeleteModuleService(modulesRepository);

const deleteModuleController = new DeleteModuleController(deleteModuleService);

module.exports = { deleteModuleController };
