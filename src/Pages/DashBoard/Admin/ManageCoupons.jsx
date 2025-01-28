import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { format } from 'date-fns';
import { Zoom } from 'react-awesome-reveal';
import Modal from './Modal';

const ManageCoupons = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const[allCoupons , setCoupons] = useState([])

    useEffect(()=>{
        fetchCoupons()
    },[])

    const fetchCoupons = () =>{
        axiosPublic.get(`/coupons`)
        .then(res =>{
            
            setCoupons(res?.data)
        })
    }

    const handleCoupon = e =>{
        e.preventDefault()
        const form = e.target 
        const code = form.code.value 
        const exDate = startDate
        const description = form.description.value 
        const percent = form.amount.value
        const amount = percent/100
        
       

        const couponInfo = {code,exDate,description,amount}

        axiosSecure.post("/coupon" , couponInfo)
        .then(res=>{
            if(res.data?.insertedId){
                fetchCoupons()
                form.reset()
                toast.success("post coupon successfully")
            }
        })
       

    }

    //handle delete 

    const handleDelete = id =>{

        swal({
            title: "Are you sure to delete this coupon?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

            .then((willDelete) => {
                if (willDelete) {

                    axiosSecure.delete(`/coupon/${id}`)
                        .then(res => {
                            if (res.data?.
                                deletedCount> 0) {
                                fetchCoupons()
                                swal(" Delete", {
                                    icon: "success",
                                });
                            }


                        })
                }
            })

    }


    return (
        <div>

            <Zoom triggerOnce={false}>
                            <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold  '><span className='text-[#69a533]'>---</span>Manage Coupons <span className='text-[#69a533]'>---</span></h1>
                        </Zoom>
               {/* table */}

               <div className="overflow-x-auto mt-16 lg:mx-[4rem]">
                <table className="table border ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-black text-[1rem]'>Discount</th>
                            <th className='text-black text-[1rem]' >Expire Date</th>

                           
                            
                            <th className='text-black text-[1rem]'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* row 1 */}

                        {allCoupons?.map((coupon, index) =>

                            <tr key={index} className="hover:bg-base-200">
                                <th>{index + 1}</th>
                                <td>{coupon?.amount*100} %</td>
                                <td>{format((coupon?.exDate), 'P')}</td>
                               
                                
                                <td className='flex'>
                                     <button onClick={() => document.getElementById(`${index}`).showModal()} className='btn-color px-6 py-1 rounded-2xl'>
                                        Edit
                                    </button>
                                    <button onClick={()=>{handleDelete(coupon?._id)}}  className='text-white bg-red-600 px-6 py-1 rounded-2xl ml-6'  >
                                       Delete
                                    </button>
                                </td>
                                <td>
                   <Modal index={index} id={coupon?._id} coupon={coupon} fetchCoupons={fetchCoupons}></Modal>
                                </td>
                            </tr>
                        )}




                    </tbody>
                </table>
            </div>
            {/* add coupon form */}
           <div className='flex justify-center mt-[4rem]'>
           <h2 className='text-gray-900  text-[1.8rem] inline-block border-0 border-l-8 pl-2 border-[#a3cc43] font-semibold'>Post Coupon</h2>
           </div>
            <form onSubmit={handleCoupon}   className="w-[80%] md:w-[60%] p-6 mx-auto bg-base-200 my-8 bg-center bg-cover bg-no-repeat rounded-lg">
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Coupon Code : </span>
                    </label>
                    <input  type="text"  className="input input-bordered mb-3" required placeholder='coupon code' name='code' />
                   
                </div>
                <label className="label font-semibold">
                        <span className="label-text">Expiry Date : </span>
                    </label>
                <DatePicker className='border-2 p-3 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Description :</span>
                    </label>
                    <textarea className='border-2 mb-3 rounded-md' name="description" required ></textarea>

                    <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Discount Percentage % : </span>
                    </label>
                    <input  type="number"  className="input input-bordered mb-3" required placeholder='discount in %' name='amount' />
                   
                </div>
                    
                </div>
                <button  className="btn btn-color mt-6">Submit</button>
            </form>

           
        </div>
    );
};

export default ManageCoupons;