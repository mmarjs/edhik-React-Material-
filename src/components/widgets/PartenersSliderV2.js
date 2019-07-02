/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function PartenersSliderV2(props) {
   const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      centerPadding: "50px",
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1500,
            settings: {
               centerPadding: "0px",
               centerMode: false
            }
         },
         {
            breakpoint: 1200,
            settings: {
               centerPadding: "20px",
               centerMode: true,
               slidesToShow: 4,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 980,
            settings: {
               centerPadding: "20px",
               slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               centerPadding: "20px",
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 567,
            settings: {
               centerPadding: "0px",
               centerMode: false,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   const { clientdata } = props;
   return (
      <div className="iron-partener-wrap-v2 slider-style mx-auto iron-shadow">
         <Slider {...settings}>
            {
               clientdata.map((data, index) => {
                  return (
                     <div key={index} className="iron-partener-item">
                        <div className="client-thumb d-flex justify-content-center align-items-center">
                           <Link to={data.path}>
                              <img
                                 src={require(`../../assets/images/${data.image}`)}
                                 alt="partner img"
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

export default PartenersSliderV2;