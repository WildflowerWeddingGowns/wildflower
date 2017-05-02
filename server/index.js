const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  config = require('./config.js'),
  port = 3000;


  var db = massive.connectSync({
    connectionString: `postgress://${config.NAME}:${config.PASSWORD}@${config.ENDPOINT}:5432/${config.DBPORT}`
  })
  var app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.get('/test', function(req, res, next){
    db.run("select * from chart", function(err, result){
      res.send(result);
    })
  })

  app.listen(port, function(){
    console.log("App working on port " + port + " me lord.")
  })
