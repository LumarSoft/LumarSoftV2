import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import PageHeader from "@/components/Headers/PageHeader";
import BlogGrid from "@/components/Blogs/BlogGrid";
import Footer from "@/components/Common/Footer";
import "@/styles/style.css";

export const metadata = {
  title: "LumarSoft",
};

export default async function BlogGridPage() {
  const dictionary = await import(`@/dictionary/blog/blog_es.json`).then(
    (res) => res.default
  );

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
      <PageHeader
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogGrid />
      <Footer language={dictionary.Footer} />
    </>
  );
}
