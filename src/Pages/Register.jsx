import React from 'react';
import { useForm } from 'react-hook-form';
import { HiPencilSquare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    //register 

    const onSubmit = data =>{
      

        console.log(data)
    }





    return (
        <div className='min-h-screen py-[4rem] flex flex-col  justify-center items-center'>
            <h1 className='text-[1.6rem] mt-[4.5rem] flex items-center  font-bold '>Create An Account  <HiPencilSquare className='text-[#69a533]'></HiPencilSquare></h1>
           
            <p className='mb-[2rem]'>create an account to enjoy our all serves</p>
            <div className="card bg-base-100 w-[35%]  shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name')}  type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')}  type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password')}  type="password" placeholder="password" className="input input-bordered" required />
                    
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input {...register('photo')}  type="file" placeholder="photo"  required />
                    </div>
                   
                    <div className="form-control mt-6">
                        <button className="btn-color py-2">Sign Up</button>
                    </div>
                    <p>Already have an account? <Link to={"/login"} className='text-[#69a533]'>SignIn</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;