"use client";
import React, { useEffect } from "react";
//= Scripts
import thumparallaxDown from "@/common/thumparallaxDown";

function MinimalArea1({ language }) {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">{language.title}</h4>
              <p className="wow txt" data-splitting></p>
              {language.paragraphs.map((item, index) => (
                <ul className="feat" key={index}>
                  <li className="wow fadeInUp" data-wow-delay=".2s">
                    <h6>
                      <span>{item.number}</span> {item.paragraph}
                    </h6>
                    <p>{item.description}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimalArea1;
