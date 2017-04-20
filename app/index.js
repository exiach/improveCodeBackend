const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes');

/**
* Database setup.
**/
mongoose.connect('mongodb://localhost:27017/improveCodeTest');

/**
* Server setup.
**/
app.use(bodyParser.json());
app.use(routes);
app.listen(3000);
