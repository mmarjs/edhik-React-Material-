/**
 * Testimonial slider component
 */
/* eslint-disable */
import React from 'react';
import Slider from "react-slick";
import Avatar from '@material-ui/core/Avatar';

function Testimonial(props) {

   const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      rtl: true,
      responsive: [
         {
            breakpoint: 960,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   };

   const { data } = props;
   return (
      <div className="iron-testimonial-wrap testimonial-v1 slider-style">
         <Slider {...settings}>
            {data.map((data, index) => {
               return (
                  <div key={index} className="iron-testimonial-item">
                     <div className="user-text rounded iron-shadow">
                        <p className="font-italic">{data.desc}</p>
                     </div>
                     <div className="user-content d-flex">
                        <Avatar
                           alt="user-1"
                           src={require(`../../assets/images/${data.thumb}`)}
                           className="user-thumb mr-20 "
                        />
                        <div className="user-info">
                           <h6 className="mb-0">{data.name}</h6>
                           <span>{data.designation}</span>
                        </div>
                     </div>
                  </div>
               )
            })}
         </Slider>
      </div>
   )
}

export default Testimonial;