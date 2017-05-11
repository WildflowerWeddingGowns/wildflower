import React, {Component} from 'react'
import api from '../utils/api.js'
import Dress1 from '../images/Dress1.svg'

const DressTypes=(props)=>{
  const styles=[
    {name: 'Ballgown', icon: '../images/Dress5.svg'},
    {name: 'Mermaid', icon: '../images/Dress6.svg'},
    {name: 'A-Line', icon: '../images/Dress7.svg'},
    {name: 'Empire', icon: '../images/Dress.svg'},
    {name: 'Sheath', icon: '../images/Dress3.svg'},
    {name: 'Short', icon: '../images/Dress.svg'}
  ]

  return(
    <div className="dress-types">
      <ul>
        {styles.map((style,i)=>
            <li key={i}>
              {style.name}
            </li>
            )
          }
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
            className="pic">
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
      <div className="inspiration-container">
        <div className="background"></div>
        <div className="inspiration">
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
