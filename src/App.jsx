import { useEffect } from "react";
import "./App.css";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Event from "./components/Event";
import Team from "./components/Team";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import AnimatedCursor from "react-animated-cursor";
import Guideline from "./components/Guideline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.8}
        innerScale={1}
        outerScale={1.7}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".anim-cursor",
            options: {
              innerSize: 55,
              outerSize: 55,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      ></AnimatedCursor>
      {/* Fixed background gradient that stays in place during scrolling */}
      <div className="background-grad"></div>

      {/* Content container with proper stacking context */}
      <div className="content-container">
        <Navbar></Navbar>
        <Home />
        <About />
        <Guideline></Guideline>
        <Event />
        <Team />
        <Footer></Footer>
      </div>
    </ReactLenis>
  );
}

export default App;
