import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import ContactHeader from "@/components/Contact/ContactHeader";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "LumarSoft",
};

export default async function ContactPage() {
  const dictionary = await import(`@/dictionary/home/contact_es.json`).then(
    (res) => res.default
  );
  return (
    <>
      <Loading />
      <Navbar />
      <ContactHeader language={dictionary.ContactHeader} />
      <div className="main-content">
        <ContactForm language={dictionary.ContactForm} />
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.613294201724!2d-60.647790325878546!3d-32.98760287357636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7abc730abb121%3A0x757422dd89cb54df!2sAmeghino%20850%2C%20S2001BQL%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1714059156949!5m2!1ses!2sa"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <Footer hideBGCOLOR language={dictionary.Footer} />
      </div>
    </>
  );
}
