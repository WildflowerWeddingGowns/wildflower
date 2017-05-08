import React, {Component} from 'react';
import About from './About';
import mainlogo from '../images/mainlogo.png';

export default class Home extends Component{

  render(){
    return(
    <div className='home'>
      <div className='logo-container'>
        <img src={mainlogo} alt='' />
      </div>
      <About />
    </div>
  )}
}
