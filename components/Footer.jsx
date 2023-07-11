import Link from "next/link";
import Image from "next/image";
import Logo from "/images/logo1.png";
import ageWarning from "/images/18+.png";
import FooterLogo from "/public/Layer1.png";
import fbImage from "/images/Vector1.png";
import img2 from "/images/Vector7.png";
import img3 from "/images/Vector8.png";
import img4 from "/images/Vector9.png";
import { BiCopyright } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="mt-auto py-4 bg-[url('/Layer1.png')] bg-no-repeat bg-right-bottom bg-[length:120px] min-[600px]:bg-[length:150px] min-[992px]:bg-[length:175px]">
      <div className="app-container mt-8">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Sports Fusion Logo" />
          </Link>
        </div>

        <div className="pb-8 md:flex">
          <div className="sm:grid sm:grid-cols-12 sm:gap-8 lg:pl-12 lg:w-[540px] xl:w-[720px]">
            <ul className="text-app-white border-b-solid border-b-2 border-b-app-white-500 py-4 sm:col-span-6 sm:border-none">
              <li className=" mb-3 mt-3"><Link href="/about-us"> About Us </Link></li>
              <li className=" mb-3"><Link href="/contact-us"> Contact Us </Link></li>
              <li className=" mb-3"><Link href="/privacy-policy"> Privacy Policy</Link></li>
              <li className=" mb-3"><Link href="/term-and-conditions"> Terms And Conditions </Link></li>
              <li className=" mb-3"><Link href="/terms-of-services"> Terms Of Services </Link></li>
            </ul>

            <ul className="text-app-white border-b-solid border-b-2 border-b-app-white-500 py-4 sm:col-span-6 sm:border-none md:w-[200px]">
              <li className=" mb-3 mt-3"><Link href="/features"> Features </Link></li>
              <li className=" mb-3"><Link href="/testimonials"> Testimonials </Link></li>
              <li className=" mb-3"><Link href="/partners"> Partners</Link></li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-white font-bold mb-5 pt-5 text-2xl"> Visit Us</h2>
            <ul className="flex items-center gap-8">
              <li className="pr-2 "><Link href="#"><Image src={fbImage} alt="instagram" className="h-[1.5rem] w-auto" /></Link></li>
              <li className="pr-2 "><Link href="#"><Image src={img2} alt="facebook" className="h-[1.5rem] w-auto" /></Link></li>
              <li className="pr-2 "><Link href="#"><Image src={img3} alt="twitter" className="h-[1.5rem] w-auto" /></Link></li>
              <li className="pr-2 "><Link href="#"><Image src={img4} alt="youtube" className="h-[1.5rem] w-auto" /></Link></li>
            </ul>
            <Image src={ageWarning} alt="18 years plus warning" className="my-6 " />
          </div>
        </div>

        <div className="text-app-white-500">
          <p className="text-left md:text-center"><span className="inline-flex items-center gap-1 "><BiCopyright size={20} className="mb-[2px]" /> {new Date().getFullYear()} all rights reserved</span></p>
        </div>
      </div>
    </footer>
  )
}