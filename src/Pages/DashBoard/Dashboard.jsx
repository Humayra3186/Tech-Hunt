import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { SiTechcrunch } from 'react-icons/si';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import {  MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {  FaUser } from 'react-icons/fa';
import { RiChatUploadFill } from "react-icons/ri";
import { Toaster } from 'react-hot-toast';

const Dashboard = () => {
    const {photo,user} = useContext(AuthContext)
    return (
        <div className='flex'> 
          <Toaster
       position="top-center"
       reverseOrder={false} />

                    {/* side bar */}

        <div className='w-[8rem] md:w-[12rem]  bg-white border px-4 pt-2 min-h-screen'>
                     {/* logo */}
                       <div className='w-auto   flex items-end '>
                         <SiTechcrunch className='text-[3rem] text-black'></SiTechcrunch>
                         <div>
                           <HiMiniArrowTrendingUp className='text-[1.4rem] pt-[-1] font-extrabold text-black  '></HiMiniArrowTrendingUp>
                           
                           <h1 className='text-[1.2rem] pl-1 pb-1 font-semibold text-[#69a533] font-serif'>  hunt </h1>
             
                         </div>
                       </div>

                       <div className="divider"></div>

                      
                       

                  {/* routes */}
                  <NavLink to={"dashboard/profile"} className="flex items-center md:gap-2 text-[0.9rem] font-semibold text-slate-500"><FaUser className='text-[0.87rem]'></FaUser>My Profile</NavLink>

                  <NavLink to={"dashboard/add"} className="flex items-center md:gap-2 text-[0.9rem] font-semibold text-slate-500"><RiChatUploadFill className='text-[0.87rem]'></RiChatUploadFill>Add Product</NavLink>
        </div>

 
                       

        <div className='flex-1    min-h-full '>





                    {/* header */}

            <div className='w-full bg-white flex justify-between py-6 px-4 md:px-[3rem]'>
          
    
                   <p className='my-auto flex items-center gap-1 font-semibold text-[1rem]'>Dashboard <MdOutlineKeyboardDoubleArrowRight className='text-[#69a533]'></MdOutlineKeyboardDoubleArrowRight>
                  </p>
                       <div className='flex gap-2'>
                       <div className="w-9 rounded-3xl ">
                            <img className='rounded-3xl'
                                alt=""
                                src={photo} />
                        
                  
                </div>
                <div className='my-auto'>
                     <p className='font-bold text-[0.8rem] leading-4'>{user?.displayName}</p>
                    
                </div>
                       </div>

            </div>


                {/* outlet */}

                <div>
                    <Outlet></Outlet>
                </div>

        </div>

            
        </div>
    );
};

export default Dashboard;