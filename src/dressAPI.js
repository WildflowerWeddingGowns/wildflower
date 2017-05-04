import React, {Component} from 'react';
var axios = require('axios');

  
    
    
    // ('https://www.googleapis.com/customsearch/v1?q=' + dressType + '&cref=https%3A%2F%2Fcse.google.com%3A443%2Fcse%2Fpublicurl%3Fcx%3D006157088675124412018%3Alrfiqnpf6xw&cx=006157088675124412018%3Alrfiqnpf6xw&imgSize=medium&searchType=image&key=' + APIKey)
    // .then(function(response){
    //     return response;
        
    //   })
    // }
  
export default class Inspiration extends Component{

    function googleAPICall(dressType){
    axios.get(`/api/inspiration/${dressType}`).then((res)=>{let inspiration=[res]})

    render(){
      return (
   



<div>
    {res}
</div>
}
  
