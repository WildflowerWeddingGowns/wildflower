const config = require('../.config.js'),
      axios = require('axios');

let start = 1;
let dressType = '';

module.exports = {

  googleAPICall: function(req, res){
    console.log(req.params.dressType)
    if(req.params.dressType != dressType){
      start = 1
    }
    dressType=req.params.dressType;
    axios.get('https://www.googleapis.com/customsearch/v1?q=' + req.params.dressType + '&cref=https%3A%2F%2Fcse.google.com%3A443%2Fcse%2Fpublicurl%3Fcx%3D006157088675124412018%3Alrfiqnpf6xw&cx=006157088675124412018%3Alrfiqnpf6xw&start=' + start + '&imgSize=large&searchType=image&key=' + GOOGLEKEY)
    .then(function(response){
      res.send(response.data.items)
      start = start + 10
    })
  }
}
