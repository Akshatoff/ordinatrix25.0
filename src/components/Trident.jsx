import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import tridentmodel from "../assets/3d/trident/trident.glb";

export default function Trident() {
  const trident = useLoader(GLTFLoader, tridentmodel);

  return (
    <Canvas className="trident">
      <ambientLight intensity={0.1} />

      <directionalLight position={[0, 0, 0]} />
      <primitive
        object={trident.scene}
        scale={[0.2, 0.2, 0.2]}
        position={[0, 0, 0]}
        rotation={[0.1, 1.5, 1.4]}
      />
    </Canvas>
  );
}
