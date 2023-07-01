import Image from 'next/image';
import { useEffect, useState } from 'react';
import FootballImg from './../assets/football.png'
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);


export default function Hero() {
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
    <div className="app-container md:flex md:justify-between md:mt-20 mb-20 mt-3">
      <div className=" md:p-5 md:w-7/12 lg:w-6/12">
        <h1 className="text-3xl font-bold text-left mb-3 w-11/12"> A WEB 3 DECENTRALIZED SPORTS <span className='text-app-orange'> MARKET PLACE </span></h1>
        <p className=" mb-5 text-sm md:w-10/12 lg:text-justify"> Exclusive way to earn big from the multiple systems for tips
          on the marketplace, carefully collated and evaluated from the
          best tipsters around the world. A platform that is Profit driven
          where u can either buy and sell your predictions. Also become a tipster
        </p>
        <p className='mb-5 text-sm md:w-10/12 '> Are you a Sport enthusiast but do not know or have the skills and knowledge on
          how to predict? We are here to assist and help you make profits
        </p>
        <button className='h-[2.25rem] w-[6.8rem] grid place-items-center bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px]' ><span className='bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center '>Join Us</span></button>
      </div>


      <div className=' shadow-lg md:w-5/12 md:ml-3 lg:ml-5 relative  h-full rounded-full mt-5'>
        <Swiper
          slidesPerView={1}
          navigation
          effect="coverflow" // Apply the 3D coverflow effect
          coverflowEffect={{
            rotate: 30, // Rotate the slides in the coverflow
            stretch: 0, // Stretch the slides when active
            depth: 300, // Depth of the 3D effect
            modifier: 1, // Effect modifier
            slideShadows: true, // Disable slide shadows
          }}
          className="mySwiper"
        >

          <SwiperSlide className="swiper-slide">
            <div className=''>
              <Image src={FootballImg} alt='FootballImage' />
              {/* <p className='text-right text-lg font-bold'> FOOTBALL</p> */}
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className=''>
              <Image src={FootballImg} alt='FootballImage' />
              {/* <p className='text-center text-4xl font-bold'> FOOTBALL</p> */}
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className=''>
              <Image src={FootballImg} alt='FootballImage' />
              {/* <p className='text-center text-4xl font-bold text-gray-100  shadow-lg'> FOOTBALL</p> */}
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="absolute blur inset-0 backdrop-filter backdrop-blur-md rounded-full"></div> */}
      </div>

    </div>
  )
}