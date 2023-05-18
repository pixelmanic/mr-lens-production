import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../../Styles/Home.css";
import About from "./About"
import Works from "./Works";
import Packages from "./Packages";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home () {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector("h1").style.visibility = "visible";
      document.querySelector("h1").style.opacity = "100";
    }, 500);
    const timer2 = setTimeout(() => {
      document.querySelector("h2").style.opacity = "100";
      document.querySelector("h2").style.top = "0";
    }, 1000);

    return () => {
      clearTimeout(timer, timer2);
    };
  }, []);

  return (
    <>
    <div id="home" className="home">
      <Navbar></Navbar>
      <div>
        <h1 className="homeh1" style={{ visibility: "hidden" }}>
          DREAMERS
        </h1>
        <h2 className="homeh2">We bring your ideas to reality</h2>
      </div>
    </div>
    <About></About>
    <Works></Works>
    <Packages></Packages>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}
