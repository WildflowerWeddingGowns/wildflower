const axios = require('axios');

module.exports = {

  getPortfolioImages: function(req, res){
    axios.get('http://localhost:3001/portfolio')
    .then(function(response){
      res.send(response);
    })
  }
}