import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../index.css'
import Nav from "./Nav"
// import Inspiration from "./Inspiration"
import Order from "./Order"

export default class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/"/>
            <Route path="/inspiration"/>
            <Route path="/order" component={Order}/>
            <Route path="/planning" />
          </Switch>
        </div>
      </Router>
    )
  }
}
