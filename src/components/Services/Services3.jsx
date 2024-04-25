"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

function Services3({ language }) {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                {language.preTitle}
              </h6>
              <h3 className="wow color-font">{language.title}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>{language.oneCard.title}</h5>
              <p>{language.oneCard.description}</p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>{language.twoCard.title}</h5>
              <p>{language.twoCard.description}</p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>{language.threeCard.title}</h5>
              <p>{language.threeCard.description}</p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>{language.fourCard.title}</h5>
              <p>{language.fourCard.description}</p>
              <Link href="/about/about-dark" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services3;
