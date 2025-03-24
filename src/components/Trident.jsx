import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tridentmodel from "../assets/3d/trident/DANDA.glb";

gsap.registerPlugin(ScrollTrigger);

export default function Trident() {
  const trident = useLoader(GLTFLoader, tridentmodel);

  return (
    <Canvas className="trident">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive
        object={trident.scene}
        scale={[0.5, 0.5, 0.5]}
        position={[0, -6, 0]}
      />
    </Canvas>
  );
}
