import React, {Component} from 'react'
import Slider from 'react-slick'
import api from '../utils/api'


export default class PortfolioSlider extends Component{
  constructor(props){
    super(props)

    this.state={
      photos: ["https://s3-us-west-2.amazonaws.com/wildflower-picks/Portfolio/port1.jpg"]
    }
  }

  componentWillMount(){
    let urls=[]
    api.fetchPortfolio().then((r)=>{
      r.map((obj)=>{
        urls.push(obj.url)
      })
      this.setState({
        photos: urls
      })
    })
  }
    render() {
      var settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false
    };

        return (
            <div className='slick'>
                <Slider {...settings}>
                  {this.state.photos.length &&
                  this.state.photos.map((p,i)=>(<div key={i}>
                    <img src={p} alt=""/>
                  </div>))}
                </Slider>
            </div>


        );
    }
};
