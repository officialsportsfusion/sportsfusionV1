import { useEffect, useState } from 'react';
import Image from "next/image";
import Img1 from "../images/black-man-7368415.jpg";
import Img2 from "../images/silhouette-6875954.png"
import Img3 from "../images/man-5249991.jpg";
import Img4 from "../images/man-7450033.jpg";
import { Swiper } from '@components/swiper'
import { Star } from './Star';
import { StarHalf } from './StarHalf';

export const Testimonial = () => {
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
    },
   
  ];

  const [slides, setSlides] = useState(1);

  useEffect(() => {
    const setSlideInView = () => {
      if (window.innerWidth >= 768) {
        setSlides(2);
      } else {
        setSlides(1);
      }
    };
    setSlideInView()
    window.addEventListener("resize", setSlideInView);
    return () => { window.removeEventListener("resize", setSlideInView) };
  }, []);

  return (
    <div className="w-full relative isolate before:-z-10 before:bg-app-orange-light before:h-64 before:rounded-full before:w-64 before:absolute before:right-0 before:bottom-0  before:shadow-[150px_150px_125px_rgb(255,255,255,0.05)] before:blur-[180px]">
      <div className="mb-5">
        <h1 className="app-container text-3xl text-center text-app-orange font-bold py-5 lg:text-5xl">Testimonials</h1>
        <Swiper withIndicators withNavigators slides={slides} className='md:app-container'>
          {
            testimonies.map((testimony, index) => <Card testimony={testimony} key={index} />)
          }
        </Swiper>
      </div>
    </div>
  );
}

const Card = ({ testimony }) => {
  return (
    <div className='w-full'>
      <div className="app-border-gradient-rounded-lg p-[2px] h-[200px] mx-auto w-[92%] max-w-[540px] max-[319px]:h-[140px]">
        <div className="grid grid-cols-12 p-2 sm:p-4 items-center">
          <div className="col-span-4 w-full h-[100px] lg:h-[150px]">
            <Image src={testimony?.image} alt={`Image of ${testimony?.name || 'testifier'}`} className="w-full h-[100%] rounded-2xl" />
          </div>

          <div className="ml-4 col-span-8 md:ml-6 lg:ml-8 ">
            <h2 className="font-bold text-app-orange-light text-2xl mb-2 lg:text-3xl mt-0 max-[319px]:text-lg max-[319px]:mb-1">{testimony?.name}</h2>
            <p className="text-app-white-500 line-clamp-3 text-[.875rem] mb-1 md:mb-2 max-[319px]:text-sm">{testimony?.testimony}</p>
            <div className="flex gap-1 md:gap-3 max-[319px]:gap-[0.125rem]"><Ratings rating={testimony?.star} /></div>
          </div>
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