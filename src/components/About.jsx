import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecryptedText from "./DecryptedText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sections = [
    {
      title: "Our Journey",
      text: "It all started 19 years ago. A fusion of creativity, talent and skill is what Ordin@trix is all about. Ordin@trix has evolved through the years moving from an interschool festival at the state level to an international event. Over the years we have had students from China, Muscat, Japan and other countries as regular participants.",
    },
    {
      title: "Pyrotech - The Core",
      text: "PYROTECH members are an elite team of student computer enthusiasts. They have represented the school in various competitions and won laurels in events such as web designing, software development, image editing, movie making, 3-D modelling, Robotics, photography and others.",
    },
    {
      title: "Guest & Legacy",
      text: "The event has witnessed gracious presence of celebrities like Mr. Amol Gupte and Miss Manju Singh apart from experts from various technical fields. Since its conception, Ordin@trix has come a long way and so has Pyrotech. They are the very nuclei of Ordin@trix, who create fireworks in the field of technology. They breathe life into Ordin@trix.",
    },
  ];

  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // Keeps section pinned for a longer period
        pin: true,
        scrub: 1, // Allows smooth progress-based animation
      },
    });

    textRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { y: "100vh", opacity: 0 },
        { y: "0vh", opacity: 1, duration: 1.5 },
        index * 1.5 // Stagger effect, delays each paragraph animation
      ).to(
        el,
        { y: "-100vh", opacity: 0, duration: 1.5 },
        index * 1.5 + 1.5 // Ensures fade-out happens after fade-in
      );
    });

    return () => {
      tl.kill(); // Cleanup GSAP timeline on unmount
    };
  }, []);

  return (
    <div className="section" id="about" ref={containerRef}>
      <div className="text-container">
        <DecryptedText
          text="About Us"
          className="about-head"
          animateOn="view"
          revealDirection="start"
          encryptedClassName="about-head-encrypted"
          speed={120}
          characters="About Us"
          maxIterations={10}
        ></DecryptedText>
      </div>
      <div className="animation-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className="text-block"
            ref={(el) => (textRefs.current[index] = el)}
          >
            <h1 className="subheading">{section.title}</h1>
            <motion.p className="para">{section.text}</motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}
