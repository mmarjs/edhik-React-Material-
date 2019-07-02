/**
 * banner slider Two component
 */
/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function BannerSliderTwo(props) {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    centerPadding: "415px",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "315px"
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "165px"
        }
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "85px"
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "0px",
          centerMode: false
        }
      }
    ]
  };

  const { sliderData } = props;
  return (
    <div className="iron-banner-slider-v2 iron-post-wrap slider-style">
      <Slider {...settings}>
        {sliderData.map((slidedata, index) => {
          return (
            <div key={index} className="iron-post-item iron-shadow">
              <div className="iron-overlay-wrap">
                <div className="iron-thumb-wrap">
                  <img
                    src={require(`../../assets/images/${slidedata.thumb}`)}
                    alt="slide-1"
                  />
                  {/* <LazyLoadImage
                    alt={"slide-1"}
                    effect="blur"
                    src={require(`../../assets/images/${slidedata.thumb}`)}
                  /> */}
                </div>
                <div className="iron-overlay-content d-flex justify-content-start align-items-center">
                  <div className="iron-overlay-holder">
                    <h4 className="mb-10">{slidedata.subtitle}</h4>
                    <h2 className="text-main mb-10">{slidedata.title}</h2>
                    <h2 className="text-bold mb-25">
                      {slidedata.offer}
                      <sup className="bold-sup">{slidedata.sup}</sup>
                    </h2>
                    <Button
                      component={Link}
                      to={slidedata.path}
                      className="button btn-active"
                    >
                      shop now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BannerSliderTwo;
