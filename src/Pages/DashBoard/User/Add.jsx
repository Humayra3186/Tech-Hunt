import React, { useContext, useState } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TagsInput } from 'react-tag-input-component';
import { ImUpload3 } from "react-icons/im";
import { Slide, Zoom } from 'react-awesome-reveal';
import { AuthContext } from '../../../Provider/AuthProvider';

const Add = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState()
    const [selected, setSelected] = useState([]);
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
        }} className=' bg-center bg-fixed bg-no-repeat bg-cover pb-16 min-h-screen'>
            {/* tittle */}
            <Zoom triggerOnce={false}>
            <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold text-white '><span className='text-[#69a533]'>---</span>Add Your Product <span className='text-[#69a533]'>---</span></h1>
            </Zoom>
            
            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#ffffffc1] mb-9'>To add more than one product you have to get <br />membership first</p>


            {/* form */}

            <div className="card bg-base-100 w-[95%] md:w-[80%] lg:w-[60%] mx-auto  shadow-2xl rounded-none ">
                <form className="card-body">

                       {/* column01 */}
                  <div className='lg:flex justify-between gap-4'>
                  <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Product Name :</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="name" className="input input-bordered w-[100%]" required />
                    </div>
                    <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Product Image :</span>
                        </label>
                        <input {...register('image')} type="text" placeholder="photo-url" className="input input-bordered w-[100%]" required />
                    </div>
                  </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold">Description :</span>
                        </label>
                        <textarea {...register('description')} type="text"  className="input input-bordered" required />

                    </div>

                       {/* owner info */}
                       <div className='lg:flex justify-between gap-4'>
                  <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Owner Name :</span>
                        </label>
                        <input {...register('ownerName')} type="text" disabled value={user?.displayName} className="input input-bordered w-[100%]" required />
                    </div>
                    <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Owner Email :</span>
                        </label>
                        <input {...register('ownerEmail')} disabled value={user?.email} type="text"  className="input input-bordered w-[100%]" required />
                    </div>
                  </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold">Owner Image :</span>
                        </label>
                        <input {...register('ownerImg')} disabled type="text" value={user?.photoURL} className="input input-bordered" required />
                    </div>

                        {/* tags */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold"> Tags :</span>
                        </label>
                        <TagsInput
                            value={selected}
                            onChange={setSelected}
                            name="features"
                            placeHolder="enter features"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold">External Link :</span>
                        </label>
                        <input {...register('link')} placeholder='link' className="input input-bordered" type="text" required />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn-color py-2">Add Product</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Add;