import React from "react";
//= Static Data

function AboutIntro({ language }) {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>{language.title}</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <p className="wow txt mb-10 words chars splitting" data-splitting>
                {language.paragraph1}
              </p>
              <p className="wow txt words chars splitting" data-splitting>
                {language.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
