import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tridentmodel from "../assets/3d/trident/DANDA.glb";

gsap.registerPlugin(ScrollTrigger);

export default function Trident() {
  const trident = useLoader(GLTFLoader, tridentmodel);
  const tridentRef = useRef();

  useEffect(() => {
    if (tridentRef.current) {
      const sections = 4;
      const sectionHeight = window.innerHeight;
      const totalHeight = sectionHeight * sections;

      ScrollTrigger.create({
        trigger: ".content-container",
        start: "top top",
        end: `+=${totalHeight}`,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress * (sections - 1);
          const currentSection = Math.floor(progress);
          const sectionProgress = progress % 1;

          let yPosition, rotationY;

          switch (currentSection) {
            case 0: // Home -> About
              yPosition = gsap.utils.interpolate(-6, -10, sectionProgress);
              rotationY = gsap.utils.interpolate(
                0,
                Math.PI / 2,
                sectionProgress
              );
              break;
            case 1: // About -> Event
              yPosition = gsap.utils.interpolate(-10, -15, sectionProgress);
              rotationY = gsap.utils.interpolate(
                Math.PI / 2,
                Math.PI,
                sectionProgress
              );
              break;
            case 2: // Event -> Team
              yPosition = gsap.utils.interpolate(-15, -20, sectionProgress);
              rotationY = gsap.utils.interpolate(
                Math.PI,
                (3 * Math.PI) / 2,
                sectionProgress
              );
              break;
            default:
              yPosition = -20;
              rotationY = (3 * Math.PI) / 2;
          }

          tridentRef.current.position.y = yPosition;
          tridentRef.current.rotation.y = rotationY;
        },
      });
    }
  }, []);

  return (
    <Canvas className="trident">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive
        ref={tridentRef}
        object={trident.scene}
        scale={[0.5, 0.5, 0.5]}
        position={[0, -6, 0]}
      />
    </Canvas>
  );
}
