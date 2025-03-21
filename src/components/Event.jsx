import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCards = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards_content = [
    {
      title: "Innovate@trix",
      text: "A platform focused on fostering innovation and creativity among young minds.",
    },
    {
      title: "Snap@trix",
      text: "A thrilling challenge that includes both online prelims and offline finals, testing participants' ability to create compelling visual narratives.",
    },
    {
      title: "Game@trix",
      text: "A high-energy gaming competition featuring multiple rounds across different gaming platforms.",
    },
    {
      title: "Movie@trix",
      text: " film-based competition, details to be announced ",
    },
    {
      title: "Byte@trix",
      text: "The participants have to explore game development using Microsoft's MakeCode platform",
    },
    {
      title: "Crypt@trix",
      text: "A completely online cryptography-based challenge, designed to test participants' analytical and problem-solving skills.",
    },
    {
      title: "Code@trix",
      text: "Participants will be given prompts where they have to solve the problems in python or smth",
    },
    {
      title: "Drone@trix",
      text: "Obstacle course Track using cones, hoops, tunnels, or cardboard structures. Use obstacles that challenge different skills:",
    },
  ];

  useLayoutEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(
        ".card:not(:first-child)"
      );

      gsap.fromTo(
        cards,
        {
          x: window.innerWidth / 2 + 500,
          y: window.innerHeight / 2 + 100,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          stagger: 0.5,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=5000",
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = Math.floor(self.progress * (cards.length - 1));
              setActiveIndex(index);
            },
          },
        }
      );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      <h1 className="text" id="event-head">
        Events
      </h1>
      <div className="cards">
        {cards_content.map((card, index) => (
          <div
            key={index}
            className={`card ${index < activeIndex ? "frosted" : "active"}`}
          >
            <h1 className="text" id="card-head">
              {card.title}
            </h1>
            <h2 className="text" id="card-des">
              {card.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
