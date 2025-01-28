import React, { useContext, useState } from 'react';
import { SiTechcrunch } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import "./Nav.css"
import Navright from './Navright';
import { AuthContext } from '../../Provider/AuthProvider';
import { RxCross2 } from 'react-icons/rx';
import { IoMenuSharp } from 'react-icons/io5';
const Navbar = () => {

  const{open , setOpen,user} = useContext(AuthContext)


  const link = <>


    <NavLink className="flex items-center mr-[2rem] text-[0.9rem] font-semibold text-gray-600 " to={"/"}> Home</NavLink>


    <NavLink className="flex items-center mr-[2rem] text-[0.9rem] font-semibold text-gray-600" to={"products"}> Products</NavLink>

  </>


  return (
    <div className='sticky top-0 backdrop-blur-md shadow-xl w-full  z-10'>
      <div className="navbar w-[85%]  mx-auto ">
        <div className="navbar-start">
          <div className={`bg-[#fdfdfdf2] backdrop-blur-lg p-4 lg:hidden absolute   duration-[600ms]  pt-4 pl-7 w-48 top-[4.4rem] h-screen ${open ? "  left-0" : "left-[-13rem]"}`}>

            <ul className='text-[1.2rem]  md:text-[0.9rem] flex flex-col items-center gap-6  '>
              <div>
                <NavLink className="text-black hover:text-[#a3cc43] font-semibold text-[1.2rem]  md:text-[0.9rem]" to={'/'}>Home</NavLink>
              </div>
              <div>
                <NavLink className="text-black hover:text-[#a3cc43] font-semibold text-[1.2rem]  md:text-[0.9rem]" to={'products'}>Products</NavLink>
              </div>
            

            </ul>


          </div>
          <div className={`text-[1.2rem] lg:hidden mr-3`} onClick={() => { setOpen(!open) }}>
            {
              open ? <RxCross2 className='text-[1.8rem] font-bold'></RxCross2> : <IoMenuSharp className='text-[1.8rem]  font-semibold' ></IoMenuSharp>
            }

          </div>

          {/* logo */}
          <div className='w-auto  flex items-end '>
            <SiTechcrunch className='text-[3rem] text-black'></SiTechcrunch>
            <div>
              <HiMiniArrowTrendingUp className='text-[1.4rem] pt-[-1] font-extrabold text-black  '></HiMiniArrowTrendingUp>
              
              <h1 className='text-[1.2rem] pl-1 pb-1 font-semibold text-[#a3cc43] font-serif'>  hunt </h1>

            </div>
          </div>

        </div>
       
        <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex">
            {link}
          </ul>
        </div>
          <Navright></Navright>
        </div>
      </div>
    </div>
  );
};

export default Navbar;