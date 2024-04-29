import React from "react";
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import PagesHeader from "@/components/Headers/PagesHeader";
import AboutIntro from "@/components/AboutUs/AboutIntro";
import Services from "@/components/Services/Services1";
import TestimonialsWithVideo from "@/components/Testimonials/TestimonialsWithVideo";
import SkillsCircle from "@/components/Skills/SkillsCircle";
import Team from "@/components/Team/Team1";
import MinimalArea from "@/components/Others/MinimalArea1";
import CallToAction from "@/components/Others/CallToAction";
import Footer from "@/components/Common/Footer";
import "@/styles/style.css";

async function AboutDark() {
  const dictionary = await import(`@/dictionary/about/about_es.json`).then(
    (res) => res.default
  );
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader
        language={dictionary.Header}
        imageLink="/img/slid/about.jpg"
      />
      <AboutIntro language={dictionary.AboutIntro} />
      <Services style="4item" language={dictionary.Services} />
      <TestimonialsWithVideo language={dictionary.TestimonialsWithVideo} />
      <SkillsCircle from="aboutPage" />
      <Team language={dictionary.Team} />
      <MinimalArea language={dictionary.AboutUs} />
      <CallToAction language={dictionary.CallToAction} />
      <Footer language={dictionary.Footer} />
    </>
  );
}

export default AboutDark;
