//= Scripts
import generateStylesheetObject from "@/common/generateStylesheetsObject";

//= Page Components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import Header from "@/components/Headers/Header4";
import AboutUs from "@/components/AboutUs/AboutUs3";
import Works from "@/components/Works/Works3";
import Services from "@/components/Services/Services3";
import CallToAction from "@/components/Others/CallToAction";
import Footer from "@/components/Common/Footer";
import "@/styles/style.css";

export const metadata = {
  title: "LumarSoft",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
    ]),
  },
};

export default async function LandingPreview() {
  const dictionary = await import(`@/dictionary/home/home_es.json`).then(
    (res) => res.default
  );

  return (
    <>
      <Loading />
      <Navbar />
      <Header language={dictionary.Hero} />
      <AboutUs language={dictionary.AboutUs} />
      <Works language={dictionary.Works} />
      <Services language={dictionary.Services} />
      <CallToAction language={dictionary.CallToAction} />
      <Footer language={dictionary.Footer} />
    </>
  );
}
