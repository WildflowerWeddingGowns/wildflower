import React, {Component} from 'react'
import About from './About'
import mainlogo from '../images/mainlogo.png'
import PortfolioSlider from './Slick'

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
      <div className="left">
        <div className="background"></div>
        <Logo />
        <About />
      </div>
      <div className="right">
        <PortfolioSlider />
      </div>
    </div>
  )}
}
