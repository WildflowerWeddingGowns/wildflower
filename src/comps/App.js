import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../index.css'
import Nav from "./Nav"

export default class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/"/>
            <Route path="/inspiration"/>
            <Route path="/order"/>
            <Route path="/planning" />
          </Switch>
        </div>
      </Router>
    )
  }
}
