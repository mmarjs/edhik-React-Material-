/**
 * Trestimonial v2 slider component
 */
/* eslint-disable */
import React from 'react';
import Slider from "react-slick";
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';

function TestimonialV2(props) {

   const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
   };

   const { data } = props;
   return (
      <div className="iron-testimonial-wrap testimonial-v2 slider-style2">
         <div className="testimonial overlay  section-pad">
            <div className="container">
               <div className="iron-sec-heading-wrap heading-font-v2 text-center mb-sm-60 mb-40">
                  <div className="heading-title">
                     <h2>Awesome Words</h2>
                  </div>
               </div>
               <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={10} lg={6} className="mx-auto mt-10">
                     <Slider {...settings}>
                        {
                           data.map((data, index) => {
                              return (
                                 <div key={index} className="iron-testimonial-item text-center">
                                    <div className="user-content mb-20">
                                       <Avatar
                                          alt="user-1"
                                          src={require(`../../assets/images/${data.thumb}`)}
                                          className="user-thumb mb-30 mx-auto "
                                       />
                                       <div className="user-info">
                                          <h4 className="mb-0">{data.name}</h4>
                                          <span>{data.designation}</span>
                                       </div>
                                    </div>
                                    <div className="user-text">
                                       <p className="lead mb-0">{data.desc}</p>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </Slider>
                  </Grid>
               </Grid>
            </div>
         </div>
      </div>
   )
}

export default TestimonialV2;