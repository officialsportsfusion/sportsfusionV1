import Image from 'next/image';
import { useEffect, useState } from 'react';
import FootballImg from '../images/football-1406106.jpg'
import robot from '../images/imageedit_7_7673854764-removebg-preview.png'
import robot2 from '../images/green-robot-3d-character 1.png'
import football from '../images/football-scene-soccer-player-futuristic-digital-background-generative-ai-276861640-removebg-preview.png'
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
// SwiperCore.use([Navigation, Pagination]);

// import { Autoplay } from 'swiper/modules';
export const Hero = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const { status } = useSession();

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
    <section className="pt-[64px] md:pt-[88px]">
      <div className="app-container grid md:landscape:min-h-[calc(100dvh-88px)]">
        <div className='my-auto grid grid-cols-12 gap-y-12 md:gap-x-16 py-4 md:py-12'>
          <div className='col-span-12 md:max-laptop:max-w-[640px] md:max-laptop:mx-auto laptop:col-span-7 '>
            <h1 className="text-4xl font-black text-left mb-6 "> A WEB 3 DECENTRALIZED SPORTS <span className='text-app-orange'> MARKET PLACE </span></h1>
            <p className="text mb-6"> Exclusive way to earn big from the multiple systems for tips
              on the marketplace, carefully collated and evaluated from the
              best tipsters around the world. A platform that is Profit driven
              where u can either buy and sell your predictions. Also become a tipster
            </p>
            {/* <p className='mt-3 text-sm'> Are you a Sport enthusiast but do not know or have the skills and knowledge on
              how to predict? We are here to assist and help you make profits
            </p> */}
            
            <p>Are you a sports enthusiast
               seeking to enhance your understanding of 
               sports predictions and expand your profit-making potential? 
               If you lack the specific skills and knowledge required to make accurate predictions, 
               fear not, for we are here to assist and provide valuable insights 
               that can help you navigate the world of sports predictions and potentially increase your chances of making profitable decisions.</p>

            {
              !(status === 'authenticated') && <Link href='/auth/signup' className='h-[2.25rem] w-[6.8rem] app-border-gradient-rounded-lg cursor-pointer hover:p-[2px] mt-6' >
                <span className='text-sm inline-grid place-items-center '>Join Us</span>
              </Link>
            }
          </div>

          <div className='col-span-12 md:max-laptop:max-w-[640px] md:max-laptop:mx-auto laptop:col-span-5 laptop:col-start-8'>
            <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation, Autoplay]}
               
              className="mySwiper"
            >

              <SwiperSlide>
                <div className=''>
                  <Image src={robot} alt='FootballImage' priority  className='rounded-lg '/>
                  {/* <p className='text-right text-lg font-bold'> FOOTBALL</p> */}
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className=''>
                  <Image src={robot2} alt='FootballImage' priority className='rounded-lg ' />
                  {/* <p className='text-center text-4xl font-bold'> FOOTBALL</p> */}
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className=''>
                  <Image src={football} alt='FootballImage' priority  className='rounded-lg'/>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="absolute blur inset-0 backdrop-filter backdrop-blur-md rounded-full"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}