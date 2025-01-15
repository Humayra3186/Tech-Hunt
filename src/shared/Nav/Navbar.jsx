import React from 'react';
import { SiTechcrunch } from "react-icons/si";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import "./Nav.css"
import Navright from './Navright';
const Navbar = () => {

   
    const link = <>
    
        
           <NavLink className="flex items-center mr-[4rem] text-[1.1rem] font-bold text-gray-600" to={"/"}><FaHome></FaHome> Home</NavLink>
          
           
             <NavLink className="flex items-center mr-[4rem] text-[1.1rem] font-bold text-gray-600" to={"products"}><AiFillProduct></AiFillProduct> Products</NavLink>
             
    </>


    return (
       <div className='fixed shadow-md w-full py-1 backdrop-blur-sm  z-10'>
         <div className="navbar w-[85%]  mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-[4rem]">
             {link}
            </ul>
          </div>
         <div className='w-auto  flex items-end '>
        <SiTechcrunch className='text-[3.7rem] text-black'></SiTechcrunch>
       <div>
        <HiMiniArrowTrendingUp  className='text-[1.6rem] pt-[-1] font-extrabold text-black  '></HiMiniArrowTrendingUp>
       <h1  className='text-[1.4rem] pl-1 pb-1 font-semibold text-[#69a533] font-serif'>  hunt </h1>
       
       </div>
         </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {link}
          </ul>
        </div>
        <div className="navbar-end">
         <Navright></Navright>
        </div>
      </div>
       </div>
    );
};

export default Navbar;