import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import logo from "../assets/img/Google.webp"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen pt-[4rem] flex flex-col  justify-center items-center'>
            <h1 className='text-[1.6rem] mt-[4.5rem] flex items-center  font-bold '>Welcome Back  <FaArrowAltCircleRight className='text-[#69a533]'></FaArrowAltCircleRight></h1>

            <p className='mb-[2rem]'>Please enter your details and sign in</p>
            <div className="card bg-base-100 w-[35%]  shadow-2xl">
                <form className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />

                    </div>


                    <div className="form-control mt-6">
                        <button className="btn-color py-2">Sign In</button>
                    </div>
                    <p>Don't have any account? <Link to={"/register"} className='text-[#69a533]'>Register</Link></p>
                </form>
            </div>

           
                <div className="divider w-[35%] mx-auto my-[2rem]">OR</div>

                <button className='flex items-center gap-4  border shadow-md px-[3rem] mb-[4rem]'>
                    <img className='w-[3rem]' src={logo} alt="" />
                    <h3>Login with Google</h3>
                </button>
               
        </div>
    );
};

export default Login;