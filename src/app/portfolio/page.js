import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import WorksHeader from "@/components/Headers/WorksHeader";
import Works from "@/components/Works/WorksStyle2";
import Footer from "@/components/Common/Footer";
import "@/styles/style.css";

export const metadata = {
  title: "LumarSoft",
};

export default async function Works2Page() {
  const dictionary = await import(
    "@/dictionary/portfolio/portfolio_es.json"
  ).then((res) => res.default);
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <WorksHeader />
      <div className="main-content">
        <Works grid={3} filterPosition="center" />
        <Footer language={dictionary.Footer} />
      </div>
    </>
  );
}
