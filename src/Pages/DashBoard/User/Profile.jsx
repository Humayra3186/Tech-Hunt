import React, { useContext } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { AuthContext } from '../../../Provider/AuthProvider';
import { GiClick } from "react-icons/gi";
import { Link } from 'react-router-dom';
import useUser from '../../../Hooks/useUser';
import { MdVerified } from "react-icons/md";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, payment, setPayment } = useContext(AuthContext)
    const [userInfo, loader] = useUser()
    const axiosSecure = useAxiosSecure()

    // handle use coupon

    const handleCoupon = (e) =>{

        e.preventDefault()
        const form = e.target 
         const code = form.code.value

         axiosSecure.get(`/coupon?code=${code}`)
         .then(res=>{
            if(!res.data){
                (toast.error("Invalid coupon"))
               document.getElementById("my_modal_5").close()
               return
            }

            if(new Date(res.data?.exDate) < new Date()){
               
                 (toast.error("Expired coupon"))
                 document.getElementById("my_modal_5").close()
                 return
             }
               
             const newAmount =(payment-(payment* res.data?.amount)) 
            setPayment(newAmount)
            toast.success(`Get ${res.data?.amount*100} % discount`)
            document.getElementById("my_modal_5").close()
            
         })
    }


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
                        loader ? <><p>loading...</p></> : <>
                            {
                                userInfo?.subscripe ? <>
                                    <MdVerified className='text-[3rem] mb-6 text-[#69a533]'></MdVerified>

                                </> : <>
                                    <div className='flex flex-col lg:flex-row pb-4 gap-3 '>
                                        <Link to={"/dashboard/dashboard/payment"}>  <button className='btn-color py-1 px-[2rem] text-[1.2rem] font-semibold rounded-lg'>pay : <span className='text-red-700'>{payment}$</span></button></Link>
                                        <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='btn-color py-1 px-[1.8rem] rounded-lg'>use Coupon</button>
                                    </div>
                                </>
                            }</>
                    }



                </div>


            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleCoupon} className="card-body">
                    
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input name='code' type="text" placeholder="coupon code" className="input input-bordered" required />
                                        </div>
            
                    
                                        <div className="form-control mt-6">
                                            <button className="btn-color py-2">Use</button>
                                        </div>
                                        
                                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn hidden">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Profile;