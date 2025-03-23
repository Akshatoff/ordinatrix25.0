import React, { useEffect } from "react";
import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Event from "./components/Event";
import Team from "./components/Team";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Trident from "./components/Trident";

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

  // Force ScrollTrigger to refresh on component mount
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root>
      {/* Fixed background gradient that stays in place during scrolling */}
      <div className="background-grad"></div>

      {/* Content container with proper stacking context */}
      <div className="content-container">
        <Home />
        <About />
        <Event />
        <Team />
      </div>
    </ReactLenis>
  );
}

export default App;
