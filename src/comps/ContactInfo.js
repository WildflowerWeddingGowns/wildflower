import React, {Component} from 'react'

export default class ContactInfo extends Component{
  constructor(props){
    super(props)

    this.state={
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(event){
    let target=event.target
    this.setState(()=>{
      let newState={}
      newState[target.id]=target.value;
      return newState;

    })
  }
  render(){
    return(
      <div
        className="contact-info"
        >
        <span className="label">First Name:</span>
        <input
          value={this.state.firstName}
          onChange={this.handleChange}
          type="text"
          id="firstName"
          autoComplete="off"
          />
        <span className="label">(Current!) Last Name:</span>
        <input
          value={this.state.lastName}
          onChange={this.handleChange}
          type="text"
          id="lastName"
          autoComplete="off"
          />
        <span className="label">Email:</span>
        <input
          value={this.state.email}
          onChange={this.handleChange}
          type="text"
          id="email"
          autoComplete="off"
          />
        <span className="label">Phone</span>
        <input
          value={this.state.phone}
          onChange={this.handleChange}
          type="text"
          id="phone"
          autoComplete="off"
          />
      </div>
    )
  }
}
