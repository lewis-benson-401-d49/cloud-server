'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const logger = require('./middleware/logger');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');

app.use(cors());
app.get('/', logger, (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/person', validator, (req, res, next) => {
  res.status(200).json({ 'name': req.query.name });
});

app.get('/bad', (req, res, next) => {
  next('Error');
});
app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
}
module.exports = { start, app };
