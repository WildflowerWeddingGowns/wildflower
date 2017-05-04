import React, {Component} from 'react';
import {api} from '../utils/api';

function SelectAbout(props){
  var titles= ['Who', 'Why', 'Bee Happy'];
  return(
    <ul>
      {titles.map(function(title){
        return(
          <li
            onClick={props.action.bind(null, title)}>
            {title}
          </li>
        )}
      )}
    </ul>
  )
}

export default class About extends Component{
  constructor(props){
    super(props)
    this.state= {
      title: 'who',
      text: null
    }
    this.updateAbout = this.updateAbout.bind(this);
}

  updateAbout(title){
    this.setState({
      title: title,
      text: null
    })
    api.fetchText(title)
      .then(function(text){
        this.setState(function(){
          return {
            text: text
          }
        })
      }.bind(this));
  }

  render(){
    return(
      <div>
        <SelectAbout
        text={this.state.text}
        action={this.updateAbout}
        />
      </div>
    )
  }
}
