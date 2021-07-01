const { ModulesRepository } = require('../modules/lessons/repositories/ModulesRepository');

const modulesRepository = ModulesRepository.getInstance();

module.exports = {
  checkModuleExists(req, res, next) {
    const { module_id } = req.headers;

    const module = modulesRepository.findById(module_id);

    if (!module) {
      return res.status(400).json({ error: 'Módulo citado não extiste!' });
    }

    req.module_id = module;

    return next();
  }
}
