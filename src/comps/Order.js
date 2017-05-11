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
      Full_Bust:'',
      Upper_Bust: '',
      Under_Bust: '',
      Nipple_to_Nipple: '',
      Shoulder_to_Bust: '',
      Shoulder_to_Waist: '',
      Shoulder_to_Shoulder: '',
      Outer_Leg:'',
      Armseye: '',
      Arm_Length:'',
      Upper_Arm_Length:'',
      Armpit_to_Elbow:'',
      Bicep:'',
      Neck:'',
      Waist:'',
      photos: []
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(){
    console.log('test')
  }

  saveMeasurements(){
    
  }
  render(){
    return(
      <div className="order-container">
        <div className="background"></div>
        <form className="order">
          <div className="top">
            <ContactInfo />
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
