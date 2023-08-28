import React from "react";
import { Player } from "../model/PlayerModel";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

import PlayerCard from "./PlayerCard";
import useFadeInOnScroll from "../Hooks/UseFadeInOnScroll";

const TeamSlider = () => {
  const ref = useFadeInOnScroll();

  const player = new Player(
    "Fábio Coentrão",
    10,
    "Forward",
    "path-to-image.jpg",
    25,
    "1998-01-01",
    "Country",
    180,
    70
  );

  return (
    <div ref={ref} className="fade-in">
      <div className="xl:m-20 md:m-10 s:mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Conheça a equipa
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          navigation={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 600,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper mt-10 mb-20"
          style={{ width: "100%" }} // Adjust width and height as needed
        >
          {Array.from({ length: 22 }).map((_, index) => (
            <SwiperSlide
              className="bg-white"
              key={index}
              style={{ width: "auto" }}
            >
              <PlayerCard player={player} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
