import React, {Component} from 'react'
import api from '../utils/api'
import ContactInfo from './ContactInfo'
import Measurements from './Measurements'

class Attention extends Component{
  constructor(props){
    super(props)

    this.state={
      text: ''
    }
  }

  componentDidMount(){
    api.fetchText("Order").then((r)=>{
      this.setState({
        text:r
      });
    })
  }

  render(){
    return(
      <div className="text-container">
        <span className="title">Attention!</span>
        <p className="text">{this.state.text}</p>
      </div>
    )
  }
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
        <form className="order-container">
          <div className="top">
            <ContactInfo
              action={this.handleSubmit}
              />
            <Attention />
          </div>
          <div className="bottom">
            <Measurements />
          </div>
        </form>
      </div>
    )
  }
}
