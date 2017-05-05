const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  config = require('./.config.js'),
  port = 3000,
  axios = require('axios'),
  mainCtrl = require('./controller/dBCtrl'),
  googleAPI = require('./controller/googleAPI');

  var app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.get('/portfolio', mainCtrl.profile);
  app.get('/title/:name', mainCtrl.getTitle);
  app.get('/api/inspiration/:dressType', googleAPI.googleAPICall);

  app.listen(port, function(){
    console.log("App working on port " + port + " me lord.")
  })
