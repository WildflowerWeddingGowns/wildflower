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
      })
    })
  }

  render(){
    return (
      <ul className="measure-container">
        {this.state.measures.map((measure,i)=>(
          <li
            key={i}
            className="measure"
            >
            {measure.name}
            <input
              id={measure.name}
              type="text"
              />
          </li>
        ))}
      </ul>
    )
  }
}
