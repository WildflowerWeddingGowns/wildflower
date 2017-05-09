import React, {Component} from 'react'
import api from '../utils/api'
import ContactInfo from './ContactInfo'
import Measurements from './Measurements'

const Attention=(props)=>{
  let text
  api.fetchText("Order").then((r)=>{
    text=r
  })
  return(
    //TODO get text to show up!
    <div className="text-container">
      <span className="title">Attention!</span>
      <p className="text">{text}</p>
    </div>
  )
}

export default class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(){
    console.log('test')
  }
  render(){
    return(
      <div className="main">
        <div className="background"></div>
        <div className="order-container">
          <ContactInfo
            action={this.handleSubmit}
            />
          <Attention />
          <Measurements />
        </div>
      </div>
    )
  }
}
