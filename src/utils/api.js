import axios from 'axios'

module.exports={
  fetchInspiration:(style)=>{
    return axios.get(`http://localhost:3001/api/inspiration/${style}+wedding+dress`).then((r)=>r)
  },

  fetchAbout:(title)=>{
    if (title==='Bee Happy') title='Bees'
    return axios.get(`http://localhost:3001/title/${title}`).then((r)=>r.data[0].texts)
  }
}
