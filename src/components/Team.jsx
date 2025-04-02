import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
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
import aditya from "../assets/coreteam/aditya.jpg";
import arnav from "../assets/coreteam/arnav.jpg";
import siddhant from "../assets/coreteam/siddhant.jpg";

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
      name: "Arnav",
      position: "Creative Head",
      image: arnav,
    },
    {
      name: "Parth Bhatla",
      position: "Robotics Head",
      image: parths,
    },
    {
      name: "Siddhant",
      position: "Robotics Head",
      image: siddhant,
    },
    {
      name: "Jyotirmay",
      position: "3d modelling head",
      image: jyotirmay,
    },
    {
      name: "Aditya",
      position: "3d modelling head",
      image: aditya,
    },    
    {
      name: "AR Nadal Verma",
      position: "Programmer",
      image: nadal,
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
  } else if (window.innerWidth < 500) {
    swiper_size = 250;
  }

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
      <h1 className="text anim-cursor" id="heading">
        Meet The Team
      </h1>

      <Swiper
      modules={[Navigation, Pagination]}
        ref={swiperRef}
        spaceBetween={swiper_size}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={false}
        navigation
        allowTouchMove={true} // Prevent manual dragging
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
