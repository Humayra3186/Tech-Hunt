import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneVolume, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { IoLogoTwitter } from 'react-icons/io';
import { MdLocalPostOffice } from 'react-icons/md';
import { SiOnlyoffice, SiTechcrunch } from 'react-icons/si';


const Footer = () => {
    return (
        <div className='bg-[#212120] '>
        <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>


            {/* col 01 */}
            <div className='mt-[3rem]'>
            <div className='w-auto  flex items-end '>
                   <SiTechcrunch className='text-[3.7rem] text-white'></SiTechcrunch>
                  <div>
                   <HiMiniArrowTrendingUp  className='text-[1.6rem] pt-[-1] font-extrabold text-white  '></HiMiniArrowTrendingUp>
                  <h1  className='text-[1.4rem] pl-1 pb-1 font-semibold text-[#69a533] font-serif'>  hunt </h1>
                  
                  </div>
                    </div>
            <p className='text-[0.8rem] text-[#ffffff92]'>
            Stay ahead in the tech world with the latest gadgets, expert reviews, and cutting-edge innovations. Your one-stop destination for everything tech!
            </p>
            <div className='flex gap-2 my-7'>
                <div className='inline-block '><FaFacebookF className='text-[#69a533] text-[1.7rem]'></FaFacebookF></div>
                <div className='inline-block '><IoLogoTwitter className='text-[#69a533] text-[1.7rem]'></IoLogoTwitter></div>
                <div className='inline-block '><FaWhatsapp className='text-[#69a533] text-[1.7rem] '></FaWhatsapp></div>
                <div className='inline-block '><FaInstagram className='text-[#69a533] text-[1.7rem]'></FaInstagram></div>
                <div className='inline-block '><FaYoutube className='text-[#69a533] text-[1.7rem]'></FaYoutube></div>
            </div>
            </div>

             {/* col 02 */}
             <div>
            <h1 className='text-white text-[1.6rem] mt-[1rem] md:mt-[3rem] mb-[1.5rem]  text-center font-semibold'>Products</h1>
            <p className='text-center font-semibold text-[#ffffff92] mb-3'>Web App</p>
            <p className='text-center font-semibold text-[#ffffff92] mb-3'>Mobile App</p>
            <p className='text-center font-semibold text-[#ffffff92] mb-3'>Software</p>
            <p className='text-center font-semibold text-[#ffffff92] mb-3'>AI Tools</p>
            </div>


             {/* col 03 */}
             <div>
             <h1 className='text-white text-[1.6rem] mt-[1rem] md:mt-[3rem] mb-[1.5rem]  text-center font-semibold'>Contact Us</h1>
             <div className='flex justify-center items-center gap-4'>
                <FaPhoneVolume className='text-[#69a533] text-[2.2rem] '></FaPhoneVolume>
            <div>
            <h1 className='play text-[1.2rem]  text-[#ffffff92] text-center font-semibold'>Phone Number</h1>
            <p className='text-center   text-[#ffffff92] mb-4 text-[0.9rem]'>+947-678-235</p>
            </div>
             </div>

             <div className='flex justify-center items-center gap-4'>
                <MdLocalPostOffice className='text-[#69a533] text-[2.2rem] '></MdLocalPostOffice>
            <div>
            <h1 className='play text-[1.2rem]  text-[#ffffff92]  text-center font-semibold'>Email Address</h1>
            <p className='text-center   text-[#ffffff92] mb-4 text-[0.9rem]'>tech.hunt@email.com</p>
            </div>
             </div>


           
            </div>

        </div>
        <div className='w-[85%] mx-auto py-[2rem]  border-t-[1px]  text-[0.9rem] border-t-[#ffffff92] text-[#ffffff92]'>
            <p className='text-center'>Copyright 2025, Tech-Hunt. All Rights Reserved.</p>

        </div>
    </div>
    );
};

export default Footer;