import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from "./Squares";
import akshat from "../assets/coreteam/AKSHAT.jpg";
import lavnika from "../assets/coreteam/lavnika.jpg";
import daksh from "../assets/coreteam/daksh.jpg";
import aneira from "../assets/coreteam/ANEIRA.jpg";
import parth from "../assets/coreteam/parth.png";
import nadal from "../assets/coreteam/nadal.jpg";
import jyotirmay from "../assets/coreteam/jyotirmay.jpg";
import parths from "../assets/coreteam/parthdusrawala.jpg";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const team_image = [
    {
      name: "Lavnika",
      position: "President",
      image: lavnika,
    },
    {
      name: "Daksh",
      position: "Vice President",
      image: daksh,
    },
    {
      name: "Aneira",
      position: "Creative Head",
      image: aneira,
    },
    {
      name: "Akshat",
      position: "Web Development Head",
      image: akshat,
    },
    {
      name: "Parth",
      position: "Designer",
      image: parth,
    },
    {
      name: "AR Nadal Verma",
      position: "Programmer",
      image: nadal,
    },
    {
      name: "Jyotirmay",
      position: "3d modelling head",
      image: jyotirmay,
    },
    {
      name: "Parth Bantala",
      position: "Robotics Head",
      image: parths,
    },
  ];

  let ss = 47;
  if (window.innerWidth > 1700) {
    ss = 67;
  } else if (window.innerWidth < 1000) {
    ss = 0;
  }

  let swiper_size = 50;
  if (window.innerWidth < 1000) {
    swiper_size = 150;
  }

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (!swiper) {
      console.error("Swiper not initialized yet.");
      return;
    }

    const totalSlides = swiper.slides.length;
    const slideWidth = swiper.width;
    const scrollDuration = totalSlides * slideWidth; // Dynamic end value

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${scrollDuration + 1000}`, // Ensure it scrolls for the full slider length
      scrub: 5, // Ultra-smooth transition
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        if (!swiper.slides) return;
        const progress = self.progress * (totalSlides - 1);
        swiper.translateTo(-progress * slideWidth, false);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="section" id="team" ref={containerRef}>
      {/* Add this div to ensure the gradient shows through */}
      <div className="background-overlay"></div>

      <Squares
        speed={0.5}
        squareSize={ss}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#49ebd8"
      />
      <h1 className="text" id="heading">
        Meet The Team
      </h1>

      <Swiper
        ref={swiperRef}
        spaceBetween={swiper_size}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={false}
        allowTouchMove={false} // Prevent manual dragging
        speed={800} // Smooth transition speed
        onSwiper={(swiper) => (swiperRef.current = { swiper })}
      >
        {team_image.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card-team">
              <img
                src={card.image}
                alt="team member's image"
                className="image"
              />
              <h1 className="text" id="name">
                {card.name}
              </h1>
              <h1 className="text" id="pos">
                {card.position}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
