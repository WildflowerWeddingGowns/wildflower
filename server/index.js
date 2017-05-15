const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  config = require('./.config.js'),
  port = 3001,
  axios = require('axios'),
  dbCtrl = require('./controller/dBCtrl'),
  AWS = require('aws-sdk'),
  googleAPI = require('./controller/googleAPI');

  var app = express();
  // app.use(express.static('./build'))

  AWS.config.update({
  accessKeyId: config.ACCESS_KEY,
  secretAccessKey: config.SECRET_KEY,
  region: config.REGION
})

const s3 = new AWS.S3();

  app.use(bodyParser.json());
  app.use(cors());

  app.get('/portfolio', dbCtrl.portfolio);
  app.get('/title/:name', dbCtrl.getTitle);
  app.get('/icons', dbCtrl.getIcons);
  app.get('/chart', dbCtrl.getChart);
  app.get('/api/inspiration/:dressType', googleAPI.googleAPICall);

  app.post('/order', dbCtrl.submitOrder);

  app.post('/api/newimage', function(req, res, next) {
  const buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

  const bucketName = 'wildflower-picks/Ordersw' + req.body.userEmail;
  const params = {
    Bucket: bucketName,
    Key: req.body.imageName,
    Body: buf,
    ContentType: 'image/' + req.body.imageExtension,
    ACL: 'public-read'
  }

  s3.upload(params, function(err, data) {
   if (err) return res.status(500).send(err);
   console.log('UPLOADED:', data);
   res.status(200).json(data);
 })
})

  app.listen(port, function(){
    console.log("App working on port " + port + " me lord.")
  })
