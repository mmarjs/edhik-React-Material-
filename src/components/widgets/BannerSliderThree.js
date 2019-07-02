/**
 * banner slider Three component
 */
/* eslint-disable */
import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function BannerSliderThree(props) {
   const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: false,
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

   const { sliderData } = props
   return (
      <div className="iron-banner-slider-v3 iron-post-wrap">
         <Slider {...settings}>
            {sliderData.map((slidedata, index) => {
               return (
                  <div key={index} className="iron-post-item">
                     <div className="iron-overlay-wrap">
                        <div className="iron-thumb-wrap">
                           <img src={require(`../../assets/images/${slidedata.thumb}`)} alt="slide-1" />
                        </div>
                        <div className="iron-overlay-content d-flex justify-content-center align-items-center">
                           <div className="iron-overlay-holder mx-auto text-center">
                              <p className="mb-lg-15 mb-10">{slidedata.subtitle}</p>
                              <h4 className="text-main mb-lg-25 mb-20">{slidedata.title}</h4>
                              <Button component={Link} to={slidedata.path} className="button btn-base">shop now</Button>
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

export default BannerSliderThree;