import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { SiTechcrunch } from 'react-icons/si';
import { HiArrowLeftStartOnRectangle, HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHome, FaUser } from 'react-icons/fa';
import { RiChatUploadFill } from "react-icons/ri";
import { Toaster } from 'react-hot-toast';
import { PiFilesFill } from "react-icons/pi";
import { AiFillProduct } from 'react-icons/ai';
import useAdmin from '../../Hooks/useAdmin';
import useModerator from '../../Hooks/useModerator';
import { HiMiniQueueList } from "react-icons/hi2";
import { MdReport } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";

const Dashboard = () => {
  const { photo, user, loader ,logOut} = useContext(AuthContext)
  const [data, isPending] = useAdmin()
  const [isModerator, pending] = useModerator()


  if (isPending || loader || pending) {
    return <> < div className='h-[20rem] flex justify-center items-center'>
      <span className="loading loading-ring loading-lg"></span>
    </div></>
  }
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



        {
          data?.isAdmin ? <>
            <NavLink to={"dashboard/manageUser"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5"><PiFilesFill className='text-[1rem] hidden md:block'></PiFilesFill>Manage User</NavLink>

            <NavLink to={"dashboard/manageCoupons"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5"><PiFilesFill className='text-[1rem] hidden md:block'></PiFilesFill>Manage Coupons</NavLink>

            <NavLink to={"dashboard/statistics"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5"><BsFillPieChartFill className='text-[1rem] hidden md:block'></BsFillPieChartFill>Statistics</NavLink>

          </> : <>
            {
              isModerator?.isModerator ? <>
                <NavLink to={"dashboard/products"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5 mt-[3rem]"><HiMiniQueueList className='text-[0.87rem] hidden md:block'></HiMiniQueueList>Product Queue</NavLink>
                <NavLink to={"dashboard/reports"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5 mt-[3rem]"><MdReport className='text-[0.87rem] hidden md:block'></MdReport>Reported Content</NavLink>
              </> : <>
                <NavLink to={"/dashboard/profile"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5 mt-[3rem]"><FaUser className='text-[0.87rem] hidden md:block'></FaUser>My Profile</NavLink>

                <NavLink to={"dashboard/add"} className="flex items-center md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5"><RiChatUploadFill className='text-[0.87rem] hidden md:block'></RiChatUploadFill>Add Product</NavLink>

                <NavLink to={"dashboard/addedProduct"} className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5"><PiFilesFill className='text-[1rem] hidden md:block'></PiFilesFill>My Products</NavLink>
              </>
            }
          </>
        }





        <p className='text-center text-gray-500 border-t-1 border-b-1 border border-l-0 border-r-0 my-[4rem]'>
          Others
        </p>

        <NavLink className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5" to={"/"}><FaHome className='text-[0.87rem] hidden md:block'></FaHome> Home</NavLink>


        <NavLink className="flex items-center  md:gap-2 text-[0.9rem] font-semibold text-slate-500 mb-5" to={"/products"}><AiFillProduct className='text-[0.87rem] hidden md:block'></AiFillProduct> Products</NavLink>
        <button onClick={() => { logOut() }} className="text-[#69a533] flex items-center gap-2 font-semibold text-[1.2rem]  md:text-[0.8rem]"  ><HiArrowLeftStartOnRectangle className='text-[1.3rem]'></HiArrowLeftStartOnRectangle>LogOut</button>
      </div>




      <div className='w-[calc(100%-8rem)] md:w-[calc(100%-12rem)]  min-h-full '>





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