import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo.png";
import { FaDiscord, FaEnvelope, FaFacebookF, FaInstagram,  FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {

 const links = () => (
    <>
      <li>
        <NavLink
          to="/"
          className="navlink text-base md:text-lg font-medium  hover:text-yellow-400 "
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-plants"
          className="navlink text-base  md:text-lg font-medium  hover:text-yellow-400"
        >
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-plant"
          className="navlink text-base  md:text-lg font-medium  hover:text-yellow-400"
        >
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-plants"
          className="navlink text-base  md:text-lg font-medium  hover:text-yellow-400"
        >
          My Plants
        </NavLink>
      </li>
    </>
  );


  return (
    <footer
      className="pt-28 pb-10 text-white  bg-no-repeat bg-bottom bg-[#6A8C25]  md:bg-contain"
      style={{
        backgroundImage:
          "url(https://madebydesignesia.com/themes/gardyn/images/misc/silhuette-1-black.webp)",
      }}
    >
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-15 mb-20">

             <div className="about md:col-span-2">
            <div className="max-w-[400px]  mx-auto md:mx-0 text-center md:text-start">
            <Link className="flex items-baseline md:items-center justify-center md:justify-start" to="/">
              <img className="size-15" src={Logo} alt="" />

              <span className="text-2xl md:text-3xl font-bold text-[#6A8C25] dark:text-white">
                Planto.
              </span>
            </Link>
            <p className="text-gray-50  text-base md:text-lg mt-5">
              Your ultimate plant care companion, helping you nurture and
              flourish your indoor garden with ease.
            </p>
             <div className="social-icons flex gap-5  mt-5 justify-center md:justify-start">
                <button className="bg-white hover:bg-[#204e36] text-[#204e36] hover:text-white transition duration-300 ease-in-out p-2 rounded-full">
                    <FaFacebookF size={20} />
                </button>
                <button className="bg-white hover:bg-[#204e36] text-[#204e36] hover:text-white transition duration-300 ease-in-out p-2 rounded-full">
                    <FaInstagram size={20} />
                </button>
                 <button className="bg-white hover:bg-[#204e36] text-[#204e36] hover:text-white transition duration-300 ease-in-out p-2 rounded-full">
                    <FaDiscord size={20} />
                </button>
                <button className="bg-white hover:bg-[#204e36] text-[#204e36] hover:text-white transition duration-300 ease-in-out p-2 rounded-full">
                    <FaTiktok size={20} />
                </button>
            </div>
            </div>
          </div>
           <div className="quick-links text-center md:text-start">
            <h2 className=" text-2xl md:text-3xl font-bold mb-5">
                Quick Links
            </h2>
            <ul className="flex flex-col gap-1">
              {links()}
            </ul>

           </div>
         
          <div className="follow-us">
            <div className="max-w-[300px] mx-auto md:mx-0 lg:ml-auto text-center md:text-start">
            <h2 className=" text-2xl md:text-3xl font-bold mb-5">
                Contact Us
            </h2>
          
            <p className="text-gray-50  text-base md:text-lg mt-5 flex items-center gap-2 justify-center md:justify-start">
                <span className="size-8 bg-white text-[#6A8C25] flex justify-center items-center rounded-full">

                <FaEnvelope size={16}></FaEnvelope>
                </span>
                <span>info@planto.com</span>
            </p>
                  <p className="text-gray-50  text-base md:text-lg mt-5 flex items-center gap-2 justify-center md:justify-start">
                <span className="size-8 bg-white text-[#6A8C25] flex justify-center items-center rounded-full">

                <FaPhoneAlt size={16} />
                </span>
                <span>
                +974 1234 5678
                </span>
            </p>
            <p className="text-gray-50  text-base md:text-lg mt-5 flex items-center gap-2 justify-center md:justify-start">
                <span className="size-8 bg-white text-[#6A8C25] flex justify-center items-center rounded-full">

                <FaLocationDot size={16} />
                </span>
                <span className="">
                Doha, Qatar
                </span>
            </p>
          
          </div>
          </div>
        </div>
        <p className="text-center text-white text-base md:text-lg border-t border-[#ffffff60] pt-5 mt-5 ">
          &copy; {new Date().getFullYear()} Planto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
