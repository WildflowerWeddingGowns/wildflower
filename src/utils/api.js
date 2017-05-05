import axios from 'axios'

module.exports={
  fetchInspiration:(style)=>{
    return axios.get(`http://localhost:3001/api/inspiration/${style}+wedding+dress`).then((r)=>r)
  }
}
