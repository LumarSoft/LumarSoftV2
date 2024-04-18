import React from 'react';
import Link from 'next/link';
//= Components
import Split from '@/components/Common/Split';

function CallToAction({ img, language }) {
  return (
    <section className="call-action section-padding sub-bg bg-img" style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>{language.stitle}</h6>
                <h2 className="wow words chars splitting" data-splitting>{language.title}<br /> <b className="back-color">{language.subtitle}</b>.</h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href={`/contact/contact-dark`} className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
              <span>{language.button}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction