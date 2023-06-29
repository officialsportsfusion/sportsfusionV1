'use client'
import Link from "next/link"
import Image from "next/image";
import FootballImg from '../assets/football.png'
import BasketBallImg from '../assets/image (1).png'

import { useRef, useState } from "react";
import Footer from "./footer"
import{FaFacebookF} from 'react-icons/fa'
import{BiLogoGoogle} from 'react-icons/bi'
import{AiFillApple} from 'react-icons/ai'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SigninPage(){
    return(
<div className='lg:flex justify-between '>
<div className="flex justify-center items-center  lg:w-5/12">
  <div className="w-11/12 md:w-8/12 lg:w-10/12 ">
    <div className='mt-8'>
      <h2 className="text-2xl font-bold text-center">Sign In</h2>
      <p className='text-center mt-3'>Welcome Back</p>
    </div>

    <div className=''>
      <input type="email" placeholder="Email" className="w-full h-12 p-3 rounded-xl my-4 text-2xl" />
      <input type="password" placeholder="Password" className="w-full h-12 p-3 rounded-xl my-4 text-2xl" />
    </div>

    <div className="text-center">
      <button className=" mt-6 mb-6 h-[2.25rem] w-8/12 bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px]">
        <span className="bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center">Sign In</span>
      </button>
      <p>
         <span><Link href="/">Forgot Password ?</Link></span>
      </p>
    </div>

   <div className='flex justify-center items-center  mt-6 '>
   <div className='flex  justify-between w-7/12'>
    <Btn icon = {<FaFacebookF size={20}/>} />
    <Btn icon = {<BiLogoGoogle size={20}/>} />
    <Btn icon = {<AiFillApple size={20}/>} />
    </div>
   </div>


   <div className="mt-8 flex items-center">
  <div className="w-[20rem] h-[1px] bg-red-500"></div>
  <p className="px-4">or</p>
  <div className="w-[20rem] h-[1px] bg-red-500"></div>
</div>



<div className="text-center">
      <button className=" mt-6 mb-6 h-[2.25rem] w-8/12 bg-gradient-to-r from-app-orange via-app-sky to-app-orange p-[1px] rounded-lg cursor-pointer hover:p-[2px]">
        <span className="bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center">Connect Wallet </span>
      </button>
    
    </div>

  </div>
</div>

<div className=' hidden md:contents'>
  
    {/* Footer */}
    <div className="md:contents">
    <div className=" md:contents">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-8/12 lg:w-5/12  mt-[100px] flex justify-center items-center"
    >
     <div>
     <SwiperSlide>
        <Image src={FootballImg} alt="footballImg" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={FootballImg} alt="footballImg" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={FootballImg} alt="footballImg" className="w-full" />
      </SwiperSlide>
     </div>
    </Swiper>
  </div>
  </div>
</div>

</div>

    )
}


const Btn =({icon})=>{
  
  return(
    <div className='bg-gradient-to-r from-app-orange via-app-sky to-app-orange w-[3.25rem] h-[2.25rem] rounded-lg p-[1px]'>  <span className="bg-app-black w-full h-full p-[1px] text-sm rounded-lg inline-grid place-items-center"> {icon} </span></div>
    );

}