require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { routes } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(
  process.env.DEFAULT_PORT,
  process.env.DEFAULT_HOST,
  () => console.log('Servidor rodando!')
);
