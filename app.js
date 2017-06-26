const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();
