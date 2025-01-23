import React, { useContext, useEffect, useState } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TagsInput } from 'react-tag-input-component';
import { ImUpload3 } from "react-icons/im";
import { Slide, Zoom } from 'react-awesome-reveal';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useUser from '../../../Hooks/useUser';
import toast, { Toaster } from 'react-hot-toast';



const Add = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm();
    const [selected, setSelected] = useState([]);
    const [products , setProducts]= useState([])
    const userInfo = useUser()
    const navigate = useNavigate()


   




   useEffect(()=>{

    axiosSecure.get(`/products?email=${user?.email}`)
    .then(res =>{
        setProducts(res.data)
    })

   },[user])
   

    //    form submit

    const onSubmit = data =>{

        const proName = data.name 
        const proImg = data.image 
        const description = data.description
        const link = data.link 
        const tags = selected
        const ownerName = user?.displayName
        const ownerEmail = user?.email 
        const ownerImg = user?.photoURL
        const vote = 0;
        const status = "pending"
        const featured = false
        const date = new Date()

        const productInfo = {proName,proImg,description,link,tags,ownerEmail,ownerName,ownerImg,date,vote, status,featured}

        if(!userInfo?.subscripe && products?.length > 0){
            return(toast.error("Sry! Unable to add more.",{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                
              }))
        }

        
        

          
        // navigate("/dashboard/dashboard/addedProduct")

        axiosSecure.post("products" , productInfo)
        .then(res =>{
            if(res.data.insertedId){
                toast.success("Successfully Added.",{
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        
                      })  

              
        navigate("/dashboard/dashboard/addedProduct")
            }

        })

        
    }


    return (
        
       <>
     
        <div style={{
            backgroundImage: `url(${bg})`,
        }} className=' bg-center bg-fixed bg-no-repeat bg-cover pb-16 min-h-screen'>
            {/* tittle */}
           
            <Zoom triggerOnce={false}>
            <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold text-white '><span className='text-[#69a533]'>---</span>Add Product <span className='text-[#69a533]'>---</span></h1>
            </Zoom>
            
            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#ffffffc1] mb-9'>To add more than one product you have to get <br />membership first</p>


            {/* form */}

            <div className="card bg-base-100 w-[95%] md:w-[80%] lg:w-[60%] mx-auto  shadow-2xl rounded-none ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

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
                            placeHolder="press enter to add tags"
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
       </>
    );
};

export default Add;