import React, { useContext, useState } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { Zoom } from 'react-awesome-reveal';
import useProduct from '../../../Hooks/useProduct';
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

import swal from 'sweetalert';
import { Link } from 'react-router-dom';



const AddedProduct = () => {
    const [data, refetch] = useProduct()
    const axiosSecure = useAxiosSecure()
    

    // delete

    const handleDelete = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`product/${id}`)
                        .then(res => {
                            if (res.data.deletedCount) {

                                refetch()
                                swal("Successfully Deleted!", {
                                    icon: "success",
                                });

                            }
                        })
                  
                }
            });



    }


    return (
        <div style={{
            backgroundImage: `url(${bg})`,
        }} className=' bg-center bg-no-repeat bg-cover min-h-screen'>

            {/* tittle */}

            <Zoom triggerOnce={false}>
                <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold text-white '><span className='text-[#69a533]'>---</span>My Products <span className='text-[#69a533]'>---</span></h1>
            </Zoom>

            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#ffffffc1] mb-9'>you can update any information and also delete <br /> any  products</p>

            {/* table */}

            <div className="overflow-x-auto mt-16">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-white text-[1rem]'>Name</th>
                            <th className='text-white text-[1rem]' >Votes</th>
                            <th className='text-white text-[1rem]'>Status</th>
                            <th className='text-white text-[1rem]'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* row 1 */}

                        {data?.map((product, index) =>

                            <tr key={index} className="hover:bg-base-200">
                                <th>{index + 1}</th>
                                <td>{product?.proName}</td>
                                <td>{product?.vote}</td>
                                <td>{product?.status}</td>
                                <td className='flex'>
                                   <Link to={`/dashboard/dashboard/updateProduct/${product?._id}`}> <button>
                                        <HiPencilSquare className='text-[1.4rem]'></HiPencilSquare>
                                    </button></Link>
                                    <button onClick={() => { handleDelete(product._id) }} className='ml-6'>
                                        <MdDelete className='text-[1.4rem]  '></MdDelete>
                                    </button>
                                </td>
                            </tr>
                        )}




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AddedProduct;