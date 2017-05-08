import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

const ToolTip=(props)=>{
  return(
    <div
      className="tooltip"
      >
      <span>{props.message}</span>
    </div>
  )
}

export default class Nav extends Component{
  constructor(props){
    super(props)

    this.state={
      message: '',
      option: ''
    }
    this.handleHover=this.handleHover.bind(this)
    this.handleLeave=this.handleLeave.bind(this)
  }
  handleHover(e){
    switch (e.target.name){
      case 'inspiration':
        this.setState({
          message:'Need ideas?',
          option: e.target.name
        })
        break

      case 'order':
        this.setState({
          message: 'Know what you want?',
          option: e.target.name
        })
        break

      case 'planning':
        this.setState({
          message: 'Shopping for something else?',
          option: e.target.name
        })
        break

      default:
        this.setState({
          message:'',
          option: ''
        })
    }
  }
  handleLeave(e){
    this.setState({
      message:'',
      option: ''
    });
  }
  render(){
    return(
      <nav>

        <div className="nav-opts">
          <NavLink
            name="inspiration"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
            to="/inspiration"
            activeClassName="active"
            >
            INSPIRATION
          </NavLink>
          <NavLink
            name='order'
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
            to="/order"
            activeClassName="active"
            >
            ORDER
          </NavLink>
          <NavLink
            name='planning'
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleLeave}
            to="/planning"
            activeClassName="active"
            >
            PLANNING
          </NavLink>
        </div>
        <div className="nav-logo">
          <NavLink
            exact
            to='/'
            activeClassName='active'
            >
            WWG
          </NavLink>
        </div>
        <ToolTip
          option={this.state.option}
          message={this.state.message}
           />

      </nav>
    )
  }
}
