"use client";
import React from "react";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2,
    },
  },
};

function Works3({ language }) {
  return (
    <section className="work-carousel2 metro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                {language.title}
              </h6>
              <h3 className="wow color-font">{language.subtitle}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper className="swiper-wrapper" {...swiperOptions}>
                {language.Projects.map((project, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <div className="wow cimgio" data-delay="500"></div>
                          <img src={project.image} alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <Link href={project.link}>{project.title}</Link>
                        </h6>
                        <h4>
                          <Link href={project.link}>{project.subtitle}</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                <i className="ion-ios-arrow-right"></i>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                <i className="ion-ios-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works3;
