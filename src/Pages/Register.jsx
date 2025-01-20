import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPencilSquare } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { AuthContext } from '../Provider/AuthProvider';


 
const Register = () => {

    const axiosPublic = useAxiosPublic()
    const {register,handleSubmit} = useForm();

    const {createUser,updateUser,setUser,setPhoto,setLoader} = useContext(AuthContext)

    const [error,setError] = useState('')
    const navigate = useNavigate()


    //register 

    const onSubmit = async(data) =>{
        
        setError("")
        setLoader(true)
      
    
        // image hosting

        const formData = new FormData();
        formData.append("key", import.meta.env.VITE_IMAGE_HOSTING); 
        formData.append("image",data.photo[0] ); 
  
        const res = await axiosPublic.post("https://api.imgbb.com/1/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

       
        // all information


        const photo = res.data.data.display_url
        const email = data.email
        const name = data.name
        const password = data.password
        const role = "user"

        const userInfo = {name,email,photo,role}

        createUser(email,password)
        .then((userCredential) => {
            
            updateUser({
                displayName: name, photoURL: photo
              })
              .then(() => {
                setPhoto(userCredential.user?.photoURL)
              }).catch((error) => {
                console.log(error)
              });
              setLoader(false)
              setUser(userCredential?.user)
              navigate('/')

              axiosPublic.post("/user" , userInfo)
              .then(res => {
              console.log(res.data)
                
              })
             
            

            
          })
          .catch((error) => {
            
            const errorMessage = error.message;
           setError(errorMessage)
            
          })



   

    }

    return (
        <div className='min-h-screen py-[4rem] flex flex-col  justify-center items-center'>
            <h1 className='text-[1.6rem] mt-[4.5rem] flex items-center  font-bold '>Create An Account  <HiPencilSquare className='text-[#69a533]'></HiPencilSquare></h1>
           
            <p className='mb-[2rem]'>create an account to enjoy our all serves</p>
            <div className="card bg-base-100 lg:w-[35%]  shadow-2xl">
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
                      {/* error message */}
                      <div className='text-[0.8rem] text-red-600'>
                            {error}
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