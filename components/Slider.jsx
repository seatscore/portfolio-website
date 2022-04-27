import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import SliderImage from "../components/SliderImage";
const Slider = () => {
   const  CardsInfo=[
        {title:"Seat-Score",
        desc:"A smart attendance solution for dynamic companies & start-ups that has needs dynamic attendance solutions",
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Seat-Score",
        desc:"A smart attendance solution for dynamic companies & start-ups that has needs dynamic attendance solutions",
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Seat-Score",
        desc:"A smart attendance solution for dynamic companies & start-ups that has needs dynamic attendance solutions",
        img:"/LandingPagePic 1.png",}
        ,

    ]
  return (
    <div className="w-full h-auto   ">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full block sm:hidden  "
      >
          {CardsInfo.map((card,index)=>{
                return(
                    <SwiperSlide key={index} className="w-full flex justify-center items-center ">
                        <SliderImage title={card.title} desc={card.desc} img={card.img}/>
                    </SwiperSlide>
                )
          }
            )}
  
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full hidden sm:block   "
      >
          {CardsInfo.map((card,index)=>{
                return(
                    <SwiperSlide key={index} className="w-full flex justify-center items-center ">
                        <SliderImage title={card.title} desc={card.desc} img={card.img}/>
                    </SwiperSlide>
                )
          }
            )}
  
      </Swiper>
    </div>
  );
};

export default Slider;
