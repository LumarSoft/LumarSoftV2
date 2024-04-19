import React from "react";

function Footer({ hideBGCOLOR, language }) {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>{language.GetTouch}</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>{language.OficialAdress}</h6>
                    <p>{language.Adress}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>{language.EmailUs}</h6>
                    <a href="mailto:lumarsoftarg@gmail.com">
                      <p>{language.Email}</p>
                    </a>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>{language.CallUs}</h6>
                    <p>{language.Phone}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* VER QUE HACER CON ESTO, SI AGREGAR LAS ULTIMAS NOTICIAS ACÁ O NO */}
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/img/LumarSoftV2.png" alt="logo" />
              </div>
              <div className="social">
                <a href={language.Redes.instagram} target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  {language.CopyRight}{" "}
                  <a
                    href="https://www.linkedin.com/company/lumar-soft"
                    target="_blank"
                  >
                    {language.Company}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
