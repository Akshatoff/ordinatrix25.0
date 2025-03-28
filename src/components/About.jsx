import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DecryptedText from "./DecryptedText";

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

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [200, 0, -200]);

  return (
    <div className="section" id="about">
      <div className="text-container">
        <DecryptedText
          text="ABOUT US"
          className="about-head anim-cursor"
          animateOn="view"
          revealDirection="start"
          encryptedClassName="about-head-encrypted"
          speed={120}
          characters="ABOUT US"
          maxIterations={10}
        />
      </div>
      <div className="animation-container">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="text-block"
            style={{
              y: yRange,
            }}
          >
            <h1 className="subheading">{section.title}</h1>
            <motion.p className="para">{section.text}</motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
