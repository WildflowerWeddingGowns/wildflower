import React, {Component} from 'react'
import About from './About'
import mainlogo from '../images/mainlogo.png'

const Logo=(props)=>{
  return(
    <div className="logo-container">
      <img src={mainlogo} alt=""/>
    </div>
  )
}

export default class Home extends Component{

  render(){
    return(
    <div className="main">
      <div className="background"></div>
      <div className="left">
        <Logo />
        <About />
      </div>
    </div>
  )}
}
