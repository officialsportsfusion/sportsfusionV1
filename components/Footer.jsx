import Link from "next/link";
import Image from "next/image";
import Logo from "/assets/logo1.png";
import ageWarning from "/assets/18+.png";
import FooterLogo from "/assets/Layer1.png";
import fbImage from "/assets/Vector1.png";
import img2 from "/assets/Vector7.png";
import img3 from "/assets/Vector8.png";
import img4 from "/assets/Vector9.png";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <div className="bg-app-black justify-center items-center lg:justify-end mt-20 lg:pl-8">
        <div className=" hidden lg:contents">
          {" "}
          <Image src={Logo} alt="SportsFusionLogo" className="" />
        </div>
        {/* the second div */}
        <div className="w-12/12 mx-5 lg:mx-0 lg:flex lg:justify-end lg:mt-4">
          {/* the third div */}
          <div className=" lg:hidden mb-8">
            {" "}
            <Image src={Logo} alt="SportsFusionLogo" />
          </div>
          <div className="border-b-2 lg:w-3/12">
            <ul className=" text-white ">
              <li className=" mb-3 mt-3">
                <Link href="./"> About Us </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> Contact Us </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> Privacy Policy </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> Terms And Conditions </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> Terms Of Services </Link>
              </li>
            </ul>
          </div>
          <div className="border-b-2 text-white lg:w-3/12">
            <ul>
              <li className=" mb-3 mt-3">
                <Link href="./"> Features </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> About Us </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> Testimonial </Link>
              </li>
              <li className=" mb-3">
                <Link href="./"> Partners</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:contents lg:w-3/12">
            <div className="w-3/12">
              <p className="text-white font-bold mb-5 mt-2 text-2xl">
                {" "}
                Visit Us
              </p>
              <ul className="flex">
                <li className="flex-1">
                  <Link href="./">
                    <Image src={fbImage} alt="image" />
                  </Link>
                </li>
                <li className="flex-1">
                  <Link href="./">
                    <Image src={img2} alt="image" />
                  </Link>
                </li>
                <li className="flex-1">
                  <Link href="./">
                    <Image src={img3} alt="image" />
                  </Link>
                </li>
                <li className="flex-1">
                  <Link href="./">
                    <Image src={img4} alt="image" />
                  </Link>
                </li>
              </ul>
              <div className="mt-10 mb-5">
                <Image src={ageWarning} alt="ageWarning" />
              </div>
              <div className="text-white flex mt-28">
                <BiCopyright size={20} />
                <span className=""> 2023 all rights reserved</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:contents lg:w-3/12 bg-red-500">
            <Image
              src={FooterLogo}
              alt="FooterLogo"
              className="object-contain "
            />
          </div>
        </div>

        <div className="flex mt-5 lg:hidden">
          <div className="w-8/12 ml-4 md:ml-8 ">
            <p className="text-white font-bold mb-5 mt-5 text-2xl"> Visit Us</p>
            <ul className="flex">
              <li className="flex-1">
                <Link href="./">
                  <Image src={fbImage} alt="image" />
                </Link>
              </li>
              <li className="flex-1">
                <Link href="./">
                  <Image src={img2} alt="image" />
                </Link>
              </li>
              <li className="flex-1">
                <Link href="./">
                  <Image src={img3} alt="image" />
                </Link>
              </li>
              <li className="flex-1">
                <Link href="./">
                  <Image src={img4} alt="image" />
                </Link>
              </li>
            </ul>
            <div className="mt-5 mb-5">
              <Image src={ageWarning} alt="ageWarning" />
            </div>
            <div className="text-white flex">
              <BiCopyright size={20} />
              <span> 2023 all rights reserved</span>
            </div>
          </div>
          <Image src={FooterLogo} alt="FooterLogo" className="w-4/12" />
        </div>
      </div>
    </>
  );
}
