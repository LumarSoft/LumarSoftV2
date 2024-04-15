"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Components
import Split from "@/components/Common/Split";
//= Scripts
import { thumparallax, thumparallaxDown } from "@/common/thumparallax";
//= Static Data
import AboutUs3date from "@/data/sections/about-us3.json";
import { useRouterHelper } from "@/shared/hooks/useRouterHelper";

const AboutUs3 = ({ language }) => {
  useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 500);
  }, []);

  const aboutRoute = useRouterHelper().getOneRoute("About");
  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="imgsec md-mb50">
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgone big-bord wow fadeInDown"
                      data-wow-delay=".8s"
                    >
                      <img
                        className="thumparallax-down"
                        src={AboutUs3date.image1}
                        alt=""
                      />
                    </div>
                    <div className="exp">
                      <h2 className="nmb-font">{language.numberCard}</h2>
                      <h6>{language.titleCard}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgtwo big-bord wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <img
                        className="thumparallax"
                        src={AboutUs3date.image2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="content">
              <Split>
                <h4 className="wow words chars splitting" data-splitting>
                  {language.titleFirst} <br /> {language.titleSecond}
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  {language.descriptionFirst} <br />
                  {language.descriptionSecond}
                </p>
              </Split>
              <Link
                href={aboutRoute.path}
                className="butn bord curve mt-40 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <span>{language.button}</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default AboutUs3;
