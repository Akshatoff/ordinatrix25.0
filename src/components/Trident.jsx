import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import tridentmodel from "../assets/3d/trident/trident.gltf";
import { div } from "framer-motion/client";

export default function Trident() {
  const trident = useLoader(GLTFLoader, tridentmodel);

  return (
    // <Canvas>
    //   <ambientLight intensity={0.1} />

    //   <directionalLight position={[0, 1, 5]} intensity={10} />
    //   <primitive
    //     object={trident.scene}
    //     scale={[0.5, 0.5, 0.5]}
    //     position={[-1, -4, 0.1]}
    //     className="trident"
    //   />
    // </Canvas>
    <div>f</div>
  );
}
