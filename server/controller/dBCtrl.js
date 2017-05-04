const massive = require('massive'),
  config = require('../config.js');

var db = massive.connectSync({
  connectionString: `postgress://${config.NAME}:${config.PASSWORD}@${config.ENDPOINT}:5432/${config.DBPORT}`
});



module.exports = {


  index: function(req, res, next){
    db.run("select * from photos where location = 'Portfolio'", function(err, result){
      res.send(result);
    })
  },

}
