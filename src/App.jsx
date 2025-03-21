import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Event from "./components/Event";
import Team from "./components/Team";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return; // Ensure lenis is defined before accessing properties

    const onScroll = () => {
      ScrollTrigger.update(); // Sync ScrollTrigger with Lenis scrolling
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <ReactLenis root>
      <Home></Home>
      <About></About>
      <Event />
      <Team />
    </ReactLenis>
  );
}

export default App;
