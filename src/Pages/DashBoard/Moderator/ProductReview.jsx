import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Zoom } from 'react-awesome-reveal';
import toast from 'react-hot-toast';

const ProductReview = () => {

    const [loading, setLoading] = useState(false)

    const sort = true

    const axiosSecure = useAxiosSecure()

    const { data, isPending, refetch } = useQuery({
        queryKey: ['products',sort],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?sort=${sort}`)
            return res.data
        }

    })



    //handle accept

    const handleAccept = id => {
        setLoading(true)
        const newUpdate = { newStatus: "Accepted", newValue: 1 }
        console.log(id)

        axiosSecure.patch(`/status/${id}`, newUpdate)
            .then(res => {


                if (res.data?.modifiedCount > 0) {
                    refetch()
                    setLoading(false)

                }


            })
    }


    //handle accept

    const handleReject = id => {
        setLoading(true)
        const newUpdate = { newStatus: "Rejected", newValue: 2 }

        axiosSecure.patch(`/status/${id}`, newUpdate)
            .then(res => {


                if (res.data?.modifiedCount > 0) {
                    
                    refetch()
                    setLoading(false)
                    

                }


            })
    }


    //handle accept

    const handleFeature = id => {
        setLoading(true)
        const newUpdate = { newFeature: true }

        axiosSecure.patch(`/feature/${id}`, newUpdate)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    toast.success("successfully updated!")
                    refetch()
                    setLoading(false)
                }


            })
    }








    return (
        <div className='  bg-center bg-no-repeat bg-cover min-h-screen'>

            {/* tittle */}

            <Zoom triggerOnce={false}>
                <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold  '><span className='text-[#69a533]'>---</span>Products Queue <span className='text-[#69a533]'>---</span></h1>
            </Zoom>

            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#232121c1] mb-9'>you can manage products status like feature and status <br /> any  products</p>

            {/* table */}

            {
                loading ? <>
                    < div className='h-[20rem] flex justify-center items-center'>
                        <span className="loading loading-ring loading-lg"></span>
                    </div></> : <>
                    <div className="overflow-x-auto mt-16">
                        <table className="table border ">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th className='text-black text-[1rem]'>Name</th>
                                    <th className='text-black text-[1rem]' >Details</th>
                                    
                                    <th className='text-black text-[1rem]' >Featured</th>

                                    <th className='text-black text-[1rem]'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>


                                {/* row 1 */}

                                {data?.map((product, index) =>

                                    <tr key={index} className="hover:bg-base-200">
                                        <th>{index + 1}</th>
                                        <td>{product.proName}</td>
                                        <td><button>View Details</button></td>
                                        
                                        <td><button  onClick={() => { handleFeature(product?._id) }}  disabled={product?.featured}  className='text-[#69a533] bg-[#b6ef854d] py-1 px-2'>Make Featured</button></td>

                                        <td className='flex'>
                                            <button onClick={() => { handleAccept(product?._id) }} disabled={product?.status == "Accepted"} className='btn-color px-2 py-1 rounded-2xl'>
                                                Accept
                                            </button>
                                            <button onClick={() => { handleReject(product?._id) }} disabled={product?.status == "Rejected"} className='bg-red-700  text-white px-4 py-1 rounded-2xl ml-6'  >
                                                Reject
                                            </button>
                                        </td>
                                    </tr>
                                )}




                            </tbody>
                        </table>
                    </div></>
            }

        </div>
    );
};

export default ProductReview;