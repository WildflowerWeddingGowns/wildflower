const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  config = require('./config.js'),
  port = 3000;


  const mainCtrl = require('./controller/dBCtrl')


  var app = express();

  app.use(bodyParser.json());
  app.use(cors());


  app.get('/portfolio', mainCtrl.index);




  app.listen(port, function(){
    console.log("App working on port " + port + " me lord.")
  })
