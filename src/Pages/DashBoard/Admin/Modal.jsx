import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Modal = ({index,id,coupon,fetchCoupons}) => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()

    const handleEdit =(e)=>{
        e.preventDefault()
        const form = e.target 
        const code = form.code.value 
        const exDate = startDate
        const description = form.description.value 
        const percent = form.amount.value
        const amount = percent/100
        
       
    
        const couponInfo = {code,exDate,description,amount}
        console.log(couponInfo)
    
        axiosSecure.patch(`/Update/coupon/${id}` , couponInfo)
        .then(res=>{
            
                form.reset()
                fetchCoupons()
                toast.success("Update coupon successfully")
           
        })

    document.getElementById(`${index}`).close()
    }

   
   
   
    return (
        <div>
                         <dialog id={`${index}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
            
                               
                                
                            <form onSubmit={handleEdit}   className=" p-6 mx-auto bg-base-200 my-8 bg-center bg-cover bg-no-repeat rounded-lg">
                            <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Coupon Code : </span>
                                </label>
                                <input defaultValue={coupon?.code}  type="text"  className="input input-bordered mb-3" required placeholder='coupon code' name='code' />
                               
                            </div>
                            <label className="label font-semibold">
                                    <span className="label-text">Expiry Date : </span>
                                </label>
                            <DatePicker className='border-2 p-3 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                            <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Description :</span>
                                </label>
                                <textarea defaultValue={coupon?.description} className='border-2 mb-3 rounded-md' name="description" required ></textarea>
            
                                <div className="form-control">
                                <label className="label font-semibold">
                                    <span className="label-text">Discount Percentage % : </span>
                                </label>
                                <input defaultValue={coupon?.amount*100}  type="number"  className="input input-bordered mb-3" required placeholder='discount in %' name='amount' />
                               
                            </div>
                                
                            </div>
                            <button  className="btn btn-color mt-6">Submit</button>
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

export default Modal;