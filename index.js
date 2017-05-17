//main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//db setup
mongoose.connect('mongodb://localhost:auth/auth');

const router = require('./router');

//app setup
app.use(morgan('combined')); //logging framework
app.use(bodyParser.json({type: '*/*'})); //parse all json

router(app);


//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ' + port);