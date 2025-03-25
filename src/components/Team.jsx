import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from "./Squares";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  let ss = 47;
  if (window.innerWidth > 1700) {
    ss = 67;
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
        spaceBetween={50}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={false}
        allowTouchMove={false} // Prevent manual dragging
        speed={800} // Smooth transition speed
        onSwiper={(swiper) => (swiperRef.current = { swiper })}
      >
        {[...Array(9)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="card-team"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
