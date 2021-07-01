const { ModulesRepository } = require('../../repositories/ModulesRepository');
const { UpdateModuleController } = require('./UpdateModuleController');
const { UpdateModuleService } = require('./UpdateModuleService');

const modulesRepository = ModulesRepository.getInstance();

const updateModuleService = new UpdateModuleService(modulesRepository);

const updateModuleController = new UpdateModuleController(updateModuleService);

module.exports = { updateModuleController };
