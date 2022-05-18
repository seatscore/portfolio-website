import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SliderImage from "../components/SliderImage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/bundle"
const Slider = () => {
   const  CardsInfo=[
        {title:"Mobile Application & web app",
        
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Multiple working location per company/startup        ",
        
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Multiple working calendars per company/startup",
       
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Dynamic reports for employees attendance history",
       
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Shifts management for future attendance",
       
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Change attendance requests",
       
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Time off requests",
       
        img:"/LandingPagePic 1.png",}
        ,
        {title:"Announcements wall",
       
        img:"/LandingPagePic 1.png",}
        ,

    ]
  return (
    <div className="w-full h-auto   "> 
    <h1 className="text-4xl p-2 pb-12 ml-12">Features</h1>
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
                        <SliderImage title={card.title}  img={card.img}/>
                    </SwiperSlide>
                )
          }
            )}
  
      </Swiper>
    </div>
  );
};

export default Slider;
