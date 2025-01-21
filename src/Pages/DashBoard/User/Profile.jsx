import React, { useContext } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { AuthContext } from '../../../Provider/AuthProvider';
import { GiClick } from "react-icons/gi";

const Profile = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div >
            <div className='w-full h-[12rem] lg:h-[15rem] z-0'>
                <img className='w-full h-full' src={bg} alt="" />
            </div>
           <div className='w-[80%] md:w-[60%] px-8 rounded-lg shadow-lg h-[20rem] bg-white mx-auto relative z-10  top-[-6rem]'>

             <div className='w-24 h-24 p-2 shadow-xl bg-white rounded-full mx-auto relative top-[-1.5rem] '>
                <img className='w-full h-full rounded-full' src={user?.photoURL} alt="" />
             </div>

             <div className='flex flex-col items-center text-left'>
                <p className='text-[1.5rem] font-bold text-black'>{user?.displayName}</p>
                <p className='text-slate-600 text-[0.9rem] font-medium mt-1 '>{user?.email}</p>

                <div className="divider"></div>

                <h2 className='text-left text-[0.9rem] md:text-[1rem] font-bold flex items-end gap-2 mb-4'>Membership Subscription  <GiClick className='text-amber-400 text-[1.5rem]'></GiClick></h2>

                <button className='btn-color py-1 px-[3rem] rounded-lg'>200$</button>
             </div>
             

           </div>
        </div>
    );
};

export default Profile;