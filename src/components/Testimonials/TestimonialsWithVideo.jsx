"use client";
import React from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
//= Components

const swiperOptions = {
  loop: true,
  speed: 500,
  slidesPerView: 1,
};

function Testimonials({ language }) {
  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{
          backgroundImage:
            "url('https://elearningindustry.com/wp-content/uploads/2022/07/The-Most-Important-But-Overlooked-Features-You-Didnt-Know-You-Wanted-In-An-eLearning-Authorin-Tool-1.jpg')",
        }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    {language.OurClients}
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    {language.WhatsSay}
                  </h4>
                </div>
                <Swiper
                  {...swiperOptions}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  {language.Testimonials.map((item, index) => (
                    <SwiperSlide className="item" key={index}>
                      <p>{item.message}</p>
                      <div className="info">
                        <div className="img">
                          <div className="img-box">
                            <img src={item.photo} alt="" />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name">{item.name}</h6>
                            <span className="author-details">
                              {item.position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
