const { Router } = require('express');

const { usersRouter } = require('./users.routes');
const { modulesRouter } = require('./modules.routes');
const { lessonsRouter } = require('./lessons.routes');
const { sessionsRouter } = require('./sessions.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/modules', modulesRouter);
routes.use('/lessons', lessonsRouter);

module.exports = { routes };
