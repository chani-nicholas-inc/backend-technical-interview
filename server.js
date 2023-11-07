require('dotenv').config();
const express = require('express');
const logger = require('morgan');

const app = express();

app.use(express.json());
app.use(logger('dev'));

const signsRouter = require('./routes/signs');

app.use('/signs', signsRouter);

app.listen(process.env.PORT || 8000);

module.exports = app;