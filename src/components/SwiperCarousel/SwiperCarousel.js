import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCSS from "./SwiperCarousel.module.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

function fetchApi(query){
    
}

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className={SwiperCSS.swiper}
      >
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={SwiperCSS.swiperSlide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
