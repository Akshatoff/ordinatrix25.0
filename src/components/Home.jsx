import React from "react";
import DecryptedText from "./DecryptedText";
import Particles from "./Particles";
// import Trident from "./Trident";

export default function Home() {
  return (
    <div className="section" id="home">
      <DecryptedText
        text="Ordin@trix 25.0"
        animateOn="view"
        revealDirection="start"
        className="heading anim-cursor"
        encryptedClassName="encrypted"
        speed={120}
        characters="ORDIN@TRIX 25.0"
        maxIterations={10}
      />
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="particles-container"
      />

      {/* <Trident></Trident> */}
    </div>
  );
}
