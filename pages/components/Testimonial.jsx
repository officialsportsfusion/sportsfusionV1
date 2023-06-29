'use client'
import Image from "next/image";
import  { useEffect, useState } from 'react';
import Img1 from "./../assets/image.png";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineStar } from "react-icons/ai";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export default function Testimonial() {

  const Testimonies = [
    {
      name: "Ezra John",
      testimony: "Sports Fusion's team exhibits unmatched expertise in analyzing sports events.",
      image: Img1,
      star: <AiOutlineStar size={20} className="text-gradient-radial" />,
    },
    {
      name: "Pa Taiwo",
      testimony: "Sports Fusion improves betting decisions and deepens sports knowledge.",
      image: Img1,
      star: <AiOutlineStar size={20} />,
    },
    {
      name: "John Doe",
      testimony: "For reliable sports predictions and serious sports betting, Sports Fusion is a necessity. ",
      image: Img1,
      star: <AiOutlineStar size={20} />,
    },
    {
      name: "John Doe",
      testimony: "No other sports prediction website compares to the accuracy and reliability of Sports Fusion",
      image: Img1,
      star: <AiOutlineStar size={20} />,
    }
  ]; 

 const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(2); // Display 2 slides per view for screen widths >= 768px
      } else {
        setSlidesPerView(1); // Display 1 slide per view for screen widths < 768px
      }
    };

    // Call the handleResize function on initial load and when the window is resized
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    <div className="app-container flex items-center justify-center mb-5">
     <div className="w-full ">
     <h1 className="text-3xl text-center text-app-orange font-bold py-5 lg:text-5xl">
        {" "}
        Testimonials
      </h1>
      <Swiper
       slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper">
      {Testimonies.map((testi, key) => {
        return (
      <SwiperSlide key={key} className="swiper-slide">
          <div    className="flex items-center justify center ">
            <div
            className=" m-3 lg:w-full lg:h-full rounded-2xl bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[2px] lg:h-72"
          >
            <div className="flex  p-4  rounded-2xl h-full w-full bg-app-black ">
             <div className=" mt-4 md:mt-0 md:flex md:justify-center md:items-center lg:w-6/12">
             <div className="  ">
                <Image src={testi.image} alt="Testimonial Image" />
              </div>
             </div>
              <div className=" flex justify-center item-center ml-3 ">  
          <div>
          <p className="font-bold text-xl md:text-3xl lg:text-5xl lg:mt-3 md:mb-2 text-app-orange-light ">
                  {testi.name}
                </p>
                <p className="text-app-white-500 text-sm lg:text-xl md:mb-2 lg:mb-5">{testi.testimony}</p>
                <div className="flex">
                  {testi.star}
                  {testi.star}
                  {testi.star}
                  {testi.star}
                  {testi.star}
             </div>
          </div>
              
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
        );
      })}
      </Swiper>
     </div>
    </div>
  );
}
