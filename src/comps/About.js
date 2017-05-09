import React, {Component} from 'react';
import api from '../utils/api';

function SelectAbout(props){
  var titles= ['Who', 'Why', 'Bee Happy'];
  return(
    <ul className='about-options'>
      {titles.map(function(title){
        return(
          <li
            className='option'
            key={title}
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
      text: 'Wildflower Wedding Gowns is thrilled to be part of your perfect day! Our custom and designer inspired gowns are just what you\'ve been searching for. Each gown is specially sewn by experienced seamstresses to your precise measurements, so there is no need for costly alterations.'
    }
    this.updateAbout = this.updateAbout.bind(this);
  }

  updateAbout(title){

    this.setState({
      title:title
    })
    api.fetchText(title).then((text)=>{
      console.log(text)
      this.setState({
        text:text
      })
    })
  }

  render(){
    return(
      <div className='about-container'>
        <SelectAbout
        text={this.state.text}
        action={this.updateAbout}
        />
      {this.state.text &&
        <p className='about'>{this.state.text}</p>}
      </div>
    )
  }
}
