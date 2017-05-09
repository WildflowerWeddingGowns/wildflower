import React, {Component} from 'react'
import api from '../utils/api'

export default class Measurements extends Component{
  constructor(props){
    super(props)

    this.state={
      measures:[]
    }
  }

  componentDidMount(){
    api.fetchMeasures().then((r)=>{
      this.setState({
        measures:r
      });
    })
  }

  render(){
    return (
      <ul className="measure-container">
        {this.state.measures.map((measure)=>(
          <li
            key={measure}
            >

            {measure}

            <input
              type="text"
              id={measure}
              />

          </li>
        ))}
      </ul>
    )
  }
}
