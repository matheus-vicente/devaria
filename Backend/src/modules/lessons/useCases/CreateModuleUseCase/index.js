const { ModulesRepository } = require('../../repositories/ModulesRepository');
const { CreateModuleController } = require('./CreateModuleController');
const { CreateModuleService } = require('./CreateModuleService');

const modulesRepository = ModulesRepository.getInstance();

const createModuleService = new CreateModuleService(modulesRepository);

const createModuleController = new CreateModuleController(createModuleService);

module.exports = { createModuleController };
