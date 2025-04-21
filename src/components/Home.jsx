import React, { useState } from "react";
import DecryptedText from "./DecryptedText";
import { useEffect, useRef, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadAll } from "@tsparticles/all"
import particleconfig from "../assets/particles.json"

// import Trident from "./Trident";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine)
    }).then(() => {
      setInit(true);
    })
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);

  }


  return (
    <div className="section" id="home">
      <DecryptedText
        text="Ordin@triXkuriobots 25.0"
        animateOn="view"
        revealDirection="start"
        className="heading anim-cursor"
        encryptedClassName="encrypted"
        speed={120}
        characters="ORDIN@TRIXKURIOBOTS 25.0"
        maxIterations={10}
      />

      <div className="particles-container">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleconfig}
        ></Particles>
      </div>
    </div>
  );
}
