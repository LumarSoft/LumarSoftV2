import React from "react";

function ContactForm({ theme, language }) {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form md-mb50">
              <h2 className="fw-700 color-font mb-50">{language.h2title}</h2>

              <form id="contact-form">
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`butn ${theme === "light" ? "dark" : "bord"}`}
                  >
                    <span>{language.SendForm}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
