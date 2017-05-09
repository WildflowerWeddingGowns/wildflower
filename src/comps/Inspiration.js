import React, {Component} from 'react'
import api from '../utils/api.js'

const DressTypes=(props)=>{
  const styles=[{name: 'Ballgown'},{name: 'Mermaid'},{name: 'A-Line'},{name: 'Empire'},{name: 'Sheath'},{name: 'Short'}]

  return(
    <div className="dress-types">
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

const PhotosGrid=(props)=>{
  return(
    <div className="pictures">
      {props.inspiration.map((pic,i)=>{
        return(
          <div
            key={i}
            className="inspiration">
            <a target="_blank" href={pic.link}>
              <img
                src={pic.image.thumbnailLink} alt=""/>
            </a>
          </div>
        )

      })}
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
        this.setState({
          inspiration:r
        });
      })
    }
  render(){
    return(
      <div className="main">
        <div className="background"></div>
        <div className="inspiration-container">
          {!this.state.inspiration ?
            <DressTypes
              action={this.getInspired}/>:
            <PhotosGrid
              inspiration={this.state.inspiration}/>
          }

        </div>
      </div>
    )
  }
}
