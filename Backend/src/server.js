const express = require('express');

const { usersRouter } = require('./routes/users.routes');
const { modulesRouter } = require('./routes/modules.routes');
const { lessonsRouter } = require('./routes/lessons.routes');

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/modules', modulesRouter);
app.use('/lessons', lessonsRouter);

app.listen(process.env.EXPRESS_DEFAULT_PORT, () => console.log('Servidor rodando!'));
