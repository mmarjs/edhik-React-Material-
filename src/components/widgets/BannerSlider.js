/**
 * banner slider component
 */
/* eslint-disable */
import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function BannerSlider(props) {
   const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [

         {
            breakpoint: 600,
            settings: {
               arrows: false,
            }
         }
      ]
   };

   const { sliderdata } = props
   return (
      <div className="iron-banner-slider iron-post-wrap">
         <Slider {...settings}>
            {sliderdata.map((slidedata, index) => {
               return (
                  <div key={index} className="iron-post-item rounded iron-shadow">
                     <div className="iron-overlay-wrap">
                        <div className="iron-thumb-wrap">
                           <img src={require(`../../assets/images/${slidedata.thumb}`)} alt="slide-1" />
                        </div>
                        <div className="iron-overlay-content d-flex justify-content-end align-items-center">
                           <div className="iron-overlay-holder">
                              <h2>{slidedata.title}</h2>
                              <h1>{slidedata.subtitle}</h1>
                              <Button component={Link} to={slidedata.path} className="button btn-active">shop now</Button>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </Slider>
      </div>
   );
}

export default BannerSlider;