"use client";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const Header4 = ({ language }) => {
  return (
    <header className="particles circle-bg valign">
      <div className="container container-hero">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <div>
                <h1>{language.title1}</h1>
                <h1 className="color-font">
                  <TypewriterComponent
                    options={{
                      strings: language.title2,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </div>
              <button className="btn-hero-contact animation-pulse">
                <span className="">{language.button}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
