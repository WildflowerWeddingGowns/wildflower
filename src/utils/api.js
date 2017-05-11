import axios from 'axios'

module.exports={
  fetchInspiration:(style)=>{
    return axios.get(`http://localhost:3001/api/inspiration/${style}+wedding+dress`).then((r)=>r.data)
  },

  fetchText:(title)=>{
    if (title==='Bee Happy') title='Bees'
    return axios.get(`http://localhost:3001/title/${title}`).then((r)=>r.data[0].texts)
  },

  fetchMeasures:()=>{
    return axios.get(`http://localhost:3001/chart`).then((r)=>r.data)
  },

  fetchPortfolio:()=>{
    return axios.get(`http://localhost:3001/portfolio`).then((r)=>r.data)
  },

  submitOrder:(order)=>{
    return axios.post(`http://localhost:3001/order`,order)
  }
}
