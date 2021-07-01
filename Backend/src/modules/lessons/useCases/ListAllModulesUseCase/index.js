const { ModulesRepository } = require('../../repositories/ModulesRepository');
const { ListAllModulesController } = require('./ListAllModulesController');
const { ListAllModulesService } = require('./ListAllModulesService');

const modulesRepository = ModulesRepository.getInstance();

const listAllModulesService = new ListAllModulesService(modulesRepository);

const listAllModulesController = new ListAllModulesController(listAllModulesService);

module.exports = { listAllModulesController };
