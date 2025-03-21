import React from "react";
import { useState, useEffect, useRef } from "react";
import Trident from "./Trident";
import BlurText from "./BlurText";

export default function Home() {
  const meshRef = useRef();

  return (
    <div className="section" id="home">
      <BlurText
        text="Ordin@trix 25.0"
        delay={150}
        animateBy="words"
        direction="top"
        className="heading"
      />
      {/* <Trident></Trident> */}
    </div>
  );
}
