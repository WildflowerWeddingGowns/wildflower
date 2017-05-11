import React, {Component} from 'react'
import api from '../utils/api'

//===Contact Information===\\
const ContactInfo=(props)=>(
  <div
    className="contact-info"
    >
    <span className="label">First Name:</span>
    <input
      value={props.firstName}
      onChange={props.action}
      type="text"
      id="firstName"
      autoComplete="off"
      />
    <span className="label">(Current!) Last Name:</span>
    <input
      value={props.lastName}
      onChange={props.action}
      type="text"
      id="lastName"
      autoComplete="off"
      />
    <span className="label">Email:</span>
    <input
      value={props.email}
      onChange={props.action}
      type="text"
      id="email"
      autoComplete="off"
      />
    <span className="label">Phone:</span>
    <input
      value={props.phone}
      onChange={props.action}
      type="text"
      id="phone"
      autoComplete="off"
      />
  </div>
)


//===Info Box===\\
const Attention=(props)=>(
  <div className="text-container">
    <span className="title">Attention!</span>
    <p className="text">{props.text}</p>
  </div>
)



//===Measurements Table===\\
const Measurements=(props)=>(
  <ul className="measure-container">
    {props.measures.map((measure,i)=>(
      <li
        key={i}
        className="measure"
        >
        {measure.name}
        <input
          id={measure.name}
          type="text"
          value={props[measure.name]}
          onChange={props.action.bind(null,this)}
          />
      </li>
    ))}
  </ul>
)


export default class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      text: '',
      measures: [],
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
    this.updateContactInfo=this.updateContactInfo.bind(this)
    this.updateMeasurements=this.updateMeasurements.bind(this)
    this.submitOrder=this.submitOrder.bind(this)
  }

  componentDidMount(){
    api.fetchText("Order").then((r)=>{
      this.setState({
        text:r
      });
    })
    api.fetchMeasures().then((r)=>{
      this.setState({
        measures:r
      })
    })
  }

  handleSubmit(){
    console.log('test')
  }

  updateContactInfo(event){
    let target=event.target
    this.setState(()=>{
      let newState={}
      newState.firstName=target.firstName
      newState.lastName=target.lastName
      newState.phone=target.phone
      newState.email=target.email
      return newState
    })
    console.log(this.state)
    console.log(target)
  }

  updateMeasurements(event){
    let target=event.target
    this.setState(()=>{
      let newState={}
      newState.Full_Bust=target.Full_Bust
      newState.Upper_Bust=target.Upper_Bust
      newState.Under_Bust=target.Under_Bust
      newState.Nipple_to_Nipple=target.Nipple_to_Nipple
      newState.Shoulder_to_Bust=target.Shoulder_to_Bust
      newState.Shoulder_to_Waist=target.Shoulder_to_Waist
      newState.Shoulder_to_Shoulder=target.Shoulder_to_Shoulder
      newState.Outer_Leg=target.Outer_Leg
      newState.Armseye=target.Armseye
      newState.Arm_Length=target.Arm_Length
      newState.Armpit_to_Elbow=target.Armpit_to_Elbow
      newState.Bicep=target.Bicep
      newState.Neck=target.Neck
      newState.Waist=target.Waist
      return newState
    })

  }

  submitOrder(event){
    event.preventDefault()
    console.log(this.state)
  }
  render(){
    return(
      <div className="order-container">
        <div className="background"></div>
        <form className="order">
          <div className="top">
            <ContactInfo
              action={this.updateContactInfo}
              info={this.state}
              />
            <Attention
              text={this.state.text}
              />
          </div>
          <div className="bottom">
            <Measurements
              measures={this.state.measures}
              action={this.updateMeasurements}
              info={this.state}/>
            <button
              type="submit"
              onClick={this.submitOrder}
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
