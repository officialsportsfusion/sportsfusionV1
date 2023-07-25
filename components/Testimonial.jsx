import { useEffect, useState } from 'react';
import Image from "next/image";
import Img1 from "../images/black-man-7368415.jpg";
import Img2 from "../images/silhouette-6875954.png"
import Img3 from "../images/man-5249991.jpg";
import Img4 from "../images/man-7450033.jpg";

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star } from './Star';
import { StarHalf } from './StarHalf';

SwiperCore.use([Navigation, Pagination]);

export const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const testimonies = [
    {
      name: "Ezra John",
      testimony: "Sports Fusion's team exhibits unmatched expertise in analyzing sports events.",
      image: Img1,
      star: 5,
    },
    {
      name: "Felix",
      testimony: "Sports Fusion improves betting decisions and deepens sports knowledge.",
      image: Img3,
      star: 4,
    },
    {

      name: "John Doe",
      testimony: "For reliable sports predictions and serious sports betting, Sports Fusion is a necessity. ",
      image: Img2,
      star: 5,
    },
    {
      name: "Cris Kyle",
      testimony: "This platform has taken my betting experience to a whole new level of success and excitement. ",
      image: Img4,
      star: 4.5,
    }
  ];

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
    <div className="w-full relative">
      <div className="app-container mb-5">
        <h1 className="text-3xl text-center text-app-orange font-bold py-5 lg:text-5xl">Testimonials</h1>

        <Swiper
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          id="swiper"
          className="mySwiper">
          {testimonies.map((testimony, key) => {
            return (
              <SwiperSlide key={key} className="swiper-slide px-4">
                <Card testimony={testimony} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className=' bg-app-orange-light blur-[180px] h-64 rounded-full w-64 absolute right-0 bottom-0  shadow-[150px_150px_125px_rgb(255,255,255,0.05)] shadow-lg'></div>
    </div>
  );
}

const Card = ({ testimony }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[2px] h-[200px]">
      <div className="grid grid-cols-12 p-2 rounded-2xl h-full w-full bg-app-black sm:p-4 items-center">
        <div className="col-span-4 w-full h-[100px] lg:h-[170px]">
          <Image src={testimony?.image} alt={`Image of ${testimony?.name || 'testifier'}`} className="w-full h-[100%]" />
        </div>

        <div className="ml-4 col-span-8 md:ml-6 lg:ml-8">
          <h2 className="font-bold text-app-orange-light text-2xl mb-2 lg:text-3xl mt-0">{testimony?.name}</h2>
          <p className="text-app-white-500 line-clamp-3 text-[.875rem] mb-1 md:mb-2 ">{testimony?.testimony}</p>
          <div className="flex gap-1 md:gap-3"><Ratings rating={testimony?.star} /></div>
        </div>
      </div>
    </div>
  )
}

const Ratings = ({ rating }) => {
  const isInteger = rating % 1 === 0;
  const wholeNumber = Math.floor(rating)
  const fullstar = []

  for (let index = 0; index < wholeNumber; index++) {
    fullstar.push(index)
  }

  if (!rating || rating <= 0) {
    return <></>
  }

  return (
    <>{fullstar.map(n => <Star key={n} />)} {!isInteger && <StarHalf />}</>
  )
}