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

    const MoreButton=(props)=>{
      return(
        <div>
          <button
          className='more-button'
          onClick={props.onClick.bind(null,props.name)}>
          View More
          </button>
        </div>
  )
}

    const BackButton=(props)=>{
      return(
        <div>
          <button
          className='back-button'
          onClick={props.onClick}
          >
          Back
          </button>
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
    this.goBack=this.goBack.bind(this)
  }

  getInspired(style){
      api.fetchInspiration(style).then((r)=>{
        console.log(r)
        this.setState({
          style: style,
          inspiration:r
        });
      })
    }

    goBack(){
      this.setState({
        inspiration:null
      });
    }

  render(){
    return(
      <div className="inspiration-container">
        <div className="background"></div>
        <div className="inspiration">
          {!this.state.inspiration ?
            <DressTypes
              action={this.getInspired}/>:
            <div className="thingy">
            <PhotosGrid
              inspiration={this.state.inspiration}
            />

            <MoreButton
              name={this.state.style}
              onClick={this.getInspired}
              style={{display: this.state.style ? 'block' : 'none'}}
               />
            <BackButton
              onClick={this.goBack}
              style={{display: this.state.style ? 'block' : 'none'}}
               />
          </div>
          }
          </div>
        </div>
    )
   }
  }
