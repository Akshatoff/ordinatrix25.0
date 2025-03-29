import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import trident from "../assets/3d/trident/DANDA.glb";

function RotatingModel({ rotationY }) {
  const modelRef = useRef();
  const { scene } = useGLTF(trident);
  // Update rotation based on scroll
  useFrame(() => {
    modelRef.current.rotation.y = rotationY;
  });

  return <primitive object={scene} ref={modelRef} />;
}

export default function Model({ rotationY }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingModel rotationY={rotationY} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
