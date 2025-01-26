import React, { useContext } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { AuthContext } from '../../../Provider/AuthProvider';
import { GiClick } from "react-icons/gi";
import { Link } from 'react-router-dom';
import useUser from '../../../Hooks/useUser';
import { MdVerified } from "react-icons/md";

const Profile = () => {
    const {user,payment,setPayment} = useContext(AuthContext)
    const userInfo = useUser()
    
    return (
        <div >
            <div className='w-full h-[12rem] lg:h-[15rem] z-0'>
                <img className='w-full h-full' src={bg} alt="" />
            </div>
           <div className='w-[80%] md:w-[60%] px-8 rounded-lg shadow-lg  bg-white mx-auto relative z-10  top-[-6rem]'>

             <div className='w-24 h-24 p-2 shadow-xl bg-white rounded-full mx-auto relative top-[-1.5rem] '>
                <img className='w-full h-full rounded-full' src={user?.photoURL} alt="" />
             </div>

             <div className='flex flex-col items-center text-left'>
                <p className='text-[1.5rem] font-bold text-black'>{user?.displayName}</p>
                <p className='text-slate-600 text-[0.9rem] font-medium mt-1 '>{user?.email}</p>

                <div className="divider"></div>

                <h2 className='text-left text-[0.9rem] md:text-[1rem] font-bold flex items-end gap-2 mb-4'>Membership Subscription  <GiClick className='text-amber-400 text-[1.5rem]'></GiClick></h2>

                {
                    userInfo?.subscripe? <>
                    <MdVerified className='text-[3rem] mb-6 text-[#69a533]'></MdVerified>
                    
                    </> : <>
                       <div className='flex flex-col lg:flex-row pb-4 gap-3 '>
             <Link to={"/dashboard/dashboard/payment"}>  <button className='btn-color py-1 px-[2rem] rounded-lg'>pay : {payment}$</button></Link>
             <button className='btn-color py-1 px-[1.8rem] rounded-lg'>use Coupon</button>
             </div>
                    </>
                }

          
             </div>
             

           </div>
        </div>
    );
};

export default Profile;