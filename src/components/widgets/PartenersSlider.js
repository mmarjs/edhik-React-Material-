/**
 * partener slider component
 */
/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function PartenersSlider(props) {
   const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      rtl: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 980,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 567,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   };

   const { clientdata } = props;
   return (
      <div className="iron-partener-wrap slider-style">
         <Slider {...settings}>
            {
               clientdata.map((data, index) => {
                  return (
                     <div key={index} className="iron-partener-item bg-secondary">
                        <div className="client-thumb d-flex justify-content-center align-items-center">
                           <Link to={data.path}>
                              <img
                                 src={require(`../../assets/images/${data.image}`)}
                                 alt="partner-img"
                              />
                           </Link>
                        </div>
                     </div>
                  )
               })
            }
         </Slider>
      </div>
   )
}

export default PartenersSlider;