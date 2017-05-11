const massive = require('massive'),
  config = require('../.config.js');

var db = massive.connectSync({
  connectionString: `postgress://${config.NAME}:${config.PASSWORD}@${config.ENDPOINT}:5432/${config.DBPORT}`
});



module.exports = {


  portfolio: function(req, res, next){
    db.get_all_portfolio(function(err, result){
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

  },

  getIcons: function(req, res, next){
    db.run("select * from photos where location = 'Icons'", function(err, result){
      res.send(result);
    })
  },

  getChart: function(req, res, next){
    db.get_chart(function(err, result){
      res.send(result);
    })
  },


  submitOrder: function(req, res, next){
    var test = req.body;
    db.post_to_user(
      [
      test.firstName,
      test.lastName,
      test.phone,
      test.email
    ],
  function(err, result){
    console.log(test.test1);
    console.log(result);
    console.log(err);
    var userID = result[0].user_id;

      db.post_to_measures(
        [
          test.FullBust,
          test.UpperBust,
          test.UnderBust,
          test.NippleToNipple,
          test.ShoulderToBust,
          test.ShoulderToWaist,
          test.ShoulderToShoulder,
          test.Outerleg,
          test.Armseye,
          test.ArmLength,
          test.UpperArmLength,
          test.ArmpitToElbow,
          test.Bicep,
          test.Neck,
          test.Waist,
          test.Hips,
           userID

        ],
            function(err, result){
            console.log(test.test2);
            console.log(result);
            console.log(err);
              test.Photos.map(function(x){
              db.post_to_photos(
                [
                  x,
                  userID
                ],
                function(err, result){
                  console.log(test.test3);
                  console.log(result);
                  console.log(err);
                }
              )
             })
         res.send(result);
         })
    })



  },

}
