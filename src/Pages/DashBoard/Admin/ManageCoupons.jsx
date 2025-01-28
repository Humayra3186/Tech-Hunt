import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ManageCoupons = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleCoupon = e =>{
        e.preventDefault()
        const form = e.target 
        const code = form.code.value 
        const exDate = startDate
        const description = form.description.value 
        const percent = form.amount.value
        const amount = percent/100
       

        const couponInfo = {code,exDate,description,amount}
        console.log(couponInfo)
        
    }

    return (
        <div>
            {/* add coupon form */}
           <div className='flex justify-center'>
           <h2 className='text-gray-900  text-[2rem] inline-block border-0 border-l-8 pl-2 border-[#a3cc43] font-semibold'>Post Coupon</h2>
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