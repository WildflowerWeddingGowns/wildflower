const config = require('../.config.js'),
      axios = require('axios');

module.exports = {

  googleAPICall: function(req, res){
    axios.get('https://www.googleapis.com/customsearch/v1?q=' + req.params.dressType + '&cref=https%3A%2F%2Fcse.google.com%3A443%2Fcse%2Fpublicurl%3Fcx%3D006157088675124412018%3Alrfiqnpf6xw&cx=006157088675124412018%3Alrfiqnpf6xw&num=200&imgSize=medium&searchType=image&key=' + config.GOOGLEKEY)
    .then(function(response){
      res.send(response.data.items)
    })
  }
}
