import React, {Component} from 'react'
import api from '../utils/api'

//===Contact Information===\\
const ContactInfo=(props)=>(
  <div
    className="contact-info"
    >
    <span className="label">First Name:</span>
    <input
      value={props.first_name}
      onChange={props.action}
      type="text"
      id="first_name"
      autoComplete="off"
      />
    <span className="label">(Current!) Last Name:</span>
    <input
      value={props.last_name}
      onChange={props.action}
      type="text"
      id="last_name"
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
    {props.measures.map((measure,i)=>{
      let name
      let names=measure.name.split('_')
      name=names.map((x)=>x+' ').join(' ')
      return(
        <li
          key={i}
          className="measure"
          >
          {name}
          <input
            id={measure.name}
            type="text"
            value={props[measure.name]}
            onChange={props.action}
            />
        </li>
      )
    })}
  </ul>
)


export default class Order extends Component{
  constructor(props){
    super(props)
    this.state={
      first_name: '',
      last_name: '',
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
      Photos: [],
      text: '',
      measures: []
    }
    this.updateState=this.updateState.bind(this)
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

  updateState(event){
    let target=event.target
    this.setState(()=>{
      let newState={}
      newState[target.id]=target.value
      return newState
    })
  }

  submitOrder(event){
    event.preventDefault()
    !this.state.Photos &&
    this.setState({
      Photos: ['no photos']
    });
    api.submitOrder(this.state)
  }
  render(){
    return(
      <div className="order-container">
        <div className="background"></div>
        <form className="order">
          <div className="top">
            <ContactInfo
              action={this.updateState}
              info={this.state}
              />
            <Attention
              text={this.state.text}
              />
          </div>
          <div className="bottom">
            <Measurements
              measures={this.state.measures}
              action={this.updateState}
              info={this.state}/>
            <button
              className='submit'
              type="submit"
              onClick={this.submitOrder}
              >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    )
  }
}
