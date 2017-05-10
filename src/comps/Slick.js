import React, {Component} from 'react';
import Slider from 'react-slick';

export default class PortfolioSlider extends Component{
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
                    <div><img src='https://static1.squarespace.com/static/53fc024de4b0ad5cecf5c9f1/5834bff7b8a79b68e660af9b/5834c040c534a52c8541b736/1479852101174/AlixannLoosle49.jpg?format=1000w' alt='' /></div>
                    <div><img src='https://static1.squarespace.com/static/53fc024de4b0ad5cecf5c9f1/5834bff7b8a79b68e660af9b/5834c041414fb5a615eb31fc/1479852100051/AlixannLoosle50.jpg?format=1000w' alt='' /></div>
                    <div><img src='https://static1.squarespace.com/static/53fc024de4b0ad5cecf5c9f1/5834bff7b8a79b68e660af9b/5834c04a414fb5a615eb32dc/1479852109104/AlixannLoosle56.jpg?format=1000w' alt='' /></div>
                    <div><img src='https://static1.squarespace.com/static/53fc024de4b0ad5cecf5c9f1/5834bff7b8a79b68e660af9b/5834c04f414fb5a615eb3348/1479852113605/AlixannLoosle59.jpg?format=1000w' alt='' /></div>
                    <div><img src='https://static1.squarespace.com/static/53fc024de4b0ad5cecf5c9f1/5834bff7b8a79b68e660af9b/5834c05520099ed326e12115/1479852120097/AlixannLoosle64.jpg?format=1000w' alt='' /></div>
                </Slider>
            </div>


        );
    }
};
