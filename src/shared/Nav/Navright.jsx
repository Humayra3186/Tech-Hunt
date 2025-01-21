import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";


const Navright = () => {

    const { loader, photo, user, logOut } = useContext(AuthContext)
  

    if (loader) {
        return (
            <span className="loading loading-dots loading-md"></span>
        )
    }
    return (
        <div>
            {user ? <>


                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={photo} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow relative right-[0]">
                        <div>
                           <h2 className="text-black  font-semibold text-[1.2rem]  md:text-[0.9rem]">{user?.displayName}</h2>
                        </div>
                        <div  className='mt-2'>
                            <NavLink to="dashboard" className="text-black hover:text-[#69a533] font-semibold text-[1.2rem]  md:text-[0.9rem]" >Dashboard</NavLink>
                        </div>
                        <div  className='mt-2'>
                           <button onClick={()=>{logOut()}}  className="text-[#69a533] flex items-center gap-2 font-semibold text-[1.2rem]  md:text-[0.9rem]"  >LogOut<HiArrowLeftStartOnRectangle className='text-[1.3rem]'></HiArrowLeftStartOnRectangle></button>
                        </div>

                    </ul>
                </div>

            </> :
                <>
                    <Link to={"register"}><button className='btn-color py-1 px-4 mr-5'>SignUp</button></Link>
                    <Link to={"login"}><button className='btn-color py-1 px-4'>SignIn</button></Link></>}
        </div>
    );
};

export default Navright;