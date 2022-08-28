import React, { useEffect, useState, useRef, useCallback } from "react";
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
  let quotes = <SwiperSlide className={SwiperCSS.swiperSlide}>Fetching quotes...</SwiperSlide>;
  
  const quoteResponse = useRef(new Set()); //to make quotes unique
  const ref = useRef(false);
  const quotesRef = useRef(quotes);
  const [isQuotesFetched, setIsQuotesFetched] = useState(false);
  const numberOfQuotes = useRef(6);

  const Quotes = useCallback(async _ => {
    //fetches until getting 6 unique quotes
    while(quoteResponse.current.size < numberOfQuotes.current){
      //console.log("fetching");
      quoteResponse.current.add(await axios.get("https://www.breakingbadapi.com/api/quote/random"))
    }

    //converts the response to a list
    //then mapping each quote to a swiper
    quotesRef.current = [...quoteResponse.current].map((res)=>{
      return <SwiperSlide key={res.data[0].quote_id} className={SwiperCSS.swiperSlide}> {React.cloneElement(component, {quote:res.data[0].quote, author:res.data[0].author})}</SwiperSlide>
    })

    //Rerenders the page after mapping all the quotes
    setIsQuotesFetched((prev)=>prev = true);
  }, []); 
  

  useEffect(()=>{
      if(ref.current || process.env.NODE_ENV !== 'development'){
        Quotes();
      }
    
      return ()=>{
        ref.current = true;
      }
    }, []);


  console.log("re-render");

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
       {quotesRef.current}
      </Swiper>
    </>
  );
}
