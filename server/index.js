const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  config = require('./.config.js'),
  port = 3001,
  axios = require('axios'),
  dbCtrl = require('./controller/dBCtrl'),
  googleAPI = require('./controller/googleAPI');

  var app = express();
  // app.use(express.static('./build'))

  app.use(bodyParser.json());
  app.use(cors());

  app.get('/portfolio', dbCtrl.portfolio);
  app.get('/title/:name', dbCtrl.getTitle);
  app.get('/icons', dbCtrl.getIcons);
  app.get('/chart', dbCtrl.getChart);
  app.get('/api/inspiration/:dressType', googleAPI.googleAPICall);

  app.post('/order', dbCtrl.submitOrder);

  app.listen(port, function(){
    console.log("App working on port " + port + " me lord.")
  })
