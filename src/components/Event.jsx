import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "./SpotlightCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

gsap.registerPlugin(ScrollTrigger);

const AnimatedCards = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  let [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const cards_content = [
    {
      title: "Innovate@trix",
      text: "A platform focused on fostering innovation and creativity among young minds.",
    },
    {
      title: "Snap@trix",
      text: "A thrilling challenge to test participants' ability to create compelling visual narratives.",
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
      text: "Obstacle course Track using cones, hoops, tunnels, or cardboard structures",
    },
  ];

  const pop_up = [
    {
      title: "Innovate@trix",
      class: "9 - 12th",
      participants: "4",
      teams: "1 team per school",
      mode: "Prelims - Submission based, Finals - Offline",
      text: "Teams will be challenged to reimagine an established brand, merging innovative design with technical execution to create a unique and practical solution. Participants will collaborate to conceptualize, build, and present a project that is both visually impactful and functionally effective, meeting all the given requirements.",
    },
    {
      title: "Snap@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
    {
      title: "Game@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
    {
      title: "Movie@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
    {
      title: "Byte@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
    {
      title: "Crypt@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
    {
      title: "Code@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
    {
      title: "Drone@trix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae quisquam. Debitis dolorem maiores pariatur reprehenderit mollitia expedita saepe eius voluptate! Debitis ut, obcaecati autem qui impedit officia aliquid deleniti adipisci in, deserunt aspernatur totam natus quaerat cupiditate error commodi.",
    },
  ];

  useLayoutEffect(() => {
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
            pinSpacing: true,
            scrub: true,
            start: "top top",
            end: "+=7000",
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
      // lenis.destroy(); // Remove this line since we removed the Lenis instance
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      {/* Add this div to ensure the gradient shows through */}
      <div className="background-overlay"></div>

      <h1 className="text" id="event-head">
        Events
      </h1>
      <div className="cards">
        {cards_content.map((card, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(73, 235, 216, 0.8)"
            className={`card custom-spotlight-card ${
              index < activeIndex ? "frosted" : "active"
            }`}
          >
            <h1 className="text" id="card-head">
              {card.title}
            </h1>
            <h2 className="text" id="card-des">
              {card.text}
            </h2>
            <button
              className="link"
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
            >
              Learn More
            </button>
          </SpotlightCard>
        ))}
      </div>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {selectedIndex !== null && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {pop_up[selectedIndex].title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {pop_up[selectedIndex].text}
              </Typography>
            </>
          )}
          <button onClick={() => setIsOpen(false)} className="btn btn-close">
            Close
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default AnimatedCards;
