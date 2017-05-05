const massive = require('massive'),
  config = require('../.config.js');

var db = massive.connectSync({
  connectionString: `postgress://${config.NAME}:${config.PASSWORD}@${config.ENDPOINT}:5432/${config.DBPORT}`
});



module.exports = {


  profile: function(req, res, next){
    db.run("select * from photos where location = 'Portfolio'", function(err, result){
      res.send(result);
    })
  },

  getTitle: function(req, res, next){
    if (req.params.name === 'Who'){
      db.run("select texts from title where title = 'Who'", function(err, result){
        res.send(result);
      })
    }

    else if (req.params.name === 'Why'){
      db.run("select texts from title where title = 'Why'", function(err, result){
        res.send(result);
      })
    }

    else if (req.params.name === 'Bees'){
      db.run("select texts from title where title = 'Bees'", function(err, result){
        res.send(result);
      })
    }

    else if (req.params.name === 'Order'){
      db.run("select texts from title where title = 'Order'", function(err, result){
        res.send(result);
      })
    }

    else if (req.params.name === 'Thanks'){
      db.run("select texts from title where title = 'Thanks'", function(err, result){
        res.send(result);
      })
    }

  }



}
