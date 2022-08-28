import React, { useEffect, useState, useRef, useCallback } from "react";
import { useAsync } from "react-async-hook";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCSS from "./SwiperCarousel.module.css";
import { Pagination, Autoplay } from "swiper";


export default function SwiperCarousel() {
  console.log("rerender");
  
  const datas = useRef([]);
  const ref = useRef(false);

  const [calls,  setCalls] = useState(0);

  const fetchData = useCallback(async _ => {
    datas.current.push(await axios.get("https://www.breakingbadapi.com/api/quote/random"))
    setCalls(prevCalls => prevCalls + 1);
    return datas;
  }, []); 
  
  let quotes = <SwiperSlide className={SwiperCSS.swiperSlide}>Loading data...</SwiperSlide>;

  useEffect(()=>{
    if(calls < 6){
      if(ref.current){
        fetchData();
      }
    
      return ()=>{
        ref.current = true;
      }
    }
  })

  //console.log(datas.current);
  console.log(calls); 
 const fillCarousel = useCallback(()=>{
    console.log("mapping");
    quotes = datas.current.map((res)=>{
      return <SwiperSlide key={res.data[0].quote_id} className={SwiperCSS.swiperSlide}> {res.data[0].quote} </SwiperSlide>
    })
  });

  if(calls >= 6){
    fillCarousel();
  }

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
       {quotes}
      </Swiper>
    </>
  );
}
