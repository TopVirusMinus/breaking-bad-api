import React, { useEffect, useState, useRef, useCallback } from "react";
import { useFetchQuotes } from "../../hooks/useFetchQuotes";
import { useAsync } from "react-async-hook";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCSS from "./SwiperCarousel.module.css";
import { Pagination, Autoplay } from "swiper";
import {Quote} from "../Quote/Quote";

export default function SwiperCarousel({component}) {
  console.log("rerender");
  let quoteLoadPlaceholder = <SwiperSlide className={SwiperCSS.swiperSlide}>Fetching quotes...</SwiperSlide>;
  
  //to make quotes unique
  const ref = useRef(false);
  const quotesRef = useRef();
  const numberOfQuotes = useRef(6);
  
  const [ctIsQuotesFetched, setCtIsQuotesFetched] = useState(0);
  const [updater, setUpdater] = useState(false);
  
  let [quoteResponse, getQuotes] = useFetchQuotes();

  const forceUpdate = ()=> setUpdater((prev) => !prev);

  const waitQuotes = useCallback(async ()=>{
      quoteResponse = await getQuotes(numberOfQuotes.current, "https://www.breakingbadapi.com/api/quote/random");
      console.log(quoteResponse);
      setCtIsQuotesFetched((prev)=>prev = 1);
    });

  useEffect(()=>{
    if(ref.current || process.env.NODE_ENV !== 'development'){
      console.log("res", quoteResponse, ctIsQuotesFetched);
      if(ctIsQuotesFetched === 1){
        quotesRef.current = [...quoteResponse].map((res)=>{
          return <SwiperSlide key={res.data[0].quote_id} className={SwiperCSS.swiperSlide}> {React.cloneElement(component, {quote:res.data[0].quote, author:res.data[0].author})}</SwiperSlide>
        })
        setCtIsQuotesFetched(2);
      }
      else if(ctIsQuotesFetched === 0){
        waitQuotes();
      }
    }
    
    console.log(quotesRef);
    return ()=>{
      ref.current = true;
    }
    });
    
    
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className={SwiperCSS.swiper}
      >
       {ctIsQuotesFetched ? quotesRef.current: quoteLoadPlaceholder}
      </Swiper>
    </>
  );
}
