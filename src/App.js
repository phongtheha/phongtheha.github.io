import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import {universe} from "./assets/index";
// import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div style={{backgroundImage: `url(${universe})`}} className="w-full h-auto text-lightText px-4">
     {/* <div className={`className="w-full h-auto bg-bodyColor text-lightText px-4"`}> */}
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Projects />
        <Resume />
        {/* <Testimonial /> */}
        <Contact />
        {/* <Footer /> */}
        {/* <FooterBottom /> */}
      </div>
    </div>
  );
}

export default App;
