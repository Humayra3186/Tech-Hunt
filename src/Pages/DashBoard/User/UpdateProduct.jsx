import React, { useContext, useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { TagsInput } from 'react-tag-input-component';
import bg from "../../../assets/img/add bg.jpg"
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useUser from '../../../Hooks/useUser';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateProduct = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
   
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate()
    const{id} = useParams()

    const [product , setProduct] = useState({})

    

    useEffect(()=>{

        axiosSecure.get(`/product/${id}`)
        .then(res =>{
            setProduct(res.data)
            
           
        })

    },[id])

    


    



      //    form submit

      const handleSubmit = e =>{
        e.preventDefault()

        const form =e.target

        const proName = form.proName.value 
        const proImg = form.proImg.value 
        const description = form.description.value
        const link = form.link.value 
        const tags = selected
       

        const productInfo = {proName,proImg,description,link,tags}

        if (selected.length === 0) {
            toast.error("Please add at least one tag.");
            return;
          }

       axiosSecure.patch(`/product/update/${id}`, productInfo)
       .then(res=>{
        if(res.data?.modifiedCount){
            toast.success("successfully updated")
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
            <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold text-white '><span className='text-[#69a533]'>---</span>Update Product Details <span className='text-[#69a533]'>---</span></h1>
            </Zoom>
            
            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#ffffffc1] mb-9'>You can change any information about the product <br /> as your need</p>


            {/* form */}

            <div className="card bg-base-100 w-[95%] md:w-[80%] lg:w-[60%] mx-auto  shadow-2xl rounded-none ">
                <form onSubmit={handleSubmit} className="card-body">

                       {/* column01 */}
                  <div className='lg:flex justify-between gap-4'>
                  <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Product Name :</span>
                        </label>
                        <input name='proName' type="text" placeholder="name" className="input input-bordered w-[100%]" defaultValue={product?.proName} required />
                    </div>
                    <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Product Image :</span>
                        </label>
                        <input name='proImg' type="text" placeholder="photo-url" defaultValue={product?.proImg} className="input input-bordered w-[100%]" required />
                    </div>
                  </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold">Description :</span>
                        </label>
                        <textarea name='description' type="text" defaultValue={product?.description}  className="input input-bordered" required />

                    </div>

                       {/* owner info */}
                       <div className='lg:flex justify-between gap-4'>
                  <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Owner Name :</span>
                        </label>
                        <input  type="text" disabled value={user?.displayName} className="input input-bordered w-[100%]" required />
                    </div>
                    <div className="form-control lg:w-[50%]">
                        <label className="label">
                            <span className="label-text  font-bold">Owner Email :</span>
                        </label>
                        <input  disabled value={user?.email} type="text"  className="input input-bordered w-[100%]" required />
                    </div>
                  </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold">Owner Image :</span>
                        </label>
                        <input  disabled type="text" value={user?.photoURL} className="input input-bordered" required />
                    </div>

                        {/* tags */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold"> Tags :</span>
                        </label>
                        <TagsInput
                            value={selected}
                            onChange={setSelected}
                            required
                            placeHolder="press enter to add tags"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  font-bold">External Link :</span>
                        </label>
                        <input name='link' placeholder='link' defaultValue={product?.link} className="input input-bordered" type="text" required />
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

export default UpdateProduct;