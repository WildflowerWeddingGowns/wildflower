import React, {Component} from 'react'
import api from '../utils/api.js'

const DressTypes=(props)=>{
  const styles=[{name: 'Ballgown'},{name: 'Mermaid'},{name: 'A-Line'},{name: 'Empire'},{name: 'Sheath'},{name: 'Short'}]

  return(
    <div className="thumb-container">
      <ul>
      {styles.map((style)=>{
        return(
          <li
            onClick={props.action.bind(null,style.name)}
            key={style.name}
            id={style.name}
            className="thumb">
            {style.name}
          </li>
        )

      })}
      </ul>
    </div>
  )
}

export default class Inspiration extends Component{
  constructor(props){
    super(props)

    this.state={
      style: '',
      inspiration: null,
    }
    this.getInspired=this.getInspired.bind(this)
  }

  getInspired(style){
      api.fetchInspiration(style).then((r)=>{
        console.log(r)
      })
    }
  render(){
    return(
      <div className="inspiration">
        <DressTypes
          action={this.getInspired}/>
      </div>
    )
  }
}
