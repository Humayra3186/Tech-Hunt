import React, { useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const Reported = () => {

    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()

    const report = true

    const { data, isPending, refetch } = useQuery({
        queryKey: ['reports', report],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?report=${report}`)
            return res.data
        }

    })

    const handleDelete = id => {

        swal({
            title: "Are you sure to delete this product?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

            .then((willDelete) => {
                if (willDelete) {

                    axiosSecure.delete(`/product/${id}`)
                        .then(res => {
                            if (res.data?.
                                deletedCount> 0) {
                                refetch()
                                swal(" Report!", {
                                    icon: "success",
                                });
                            }


                        })
                }
            })




    }

    return (
        <div className='  bg-center bg-no-repeat bg-cover min-h-screen'>

            {/* tittle */}

            <Zoom triggerOnce={false}>
                <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold  '><span className='text-[#69a533]'>---</span>Reported Products <span className='text-[#69a533]'>---</span></h1>
            </Zoom>

            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#232121c1] mb-9'>you can manage visit the details page and see the products then can delete. <br /> any  products</p>

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



                                    <th className='text-black text-[1rem]'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>


                                {/* row 1 */}

                                {data?.map((product, index) =>

                                    <tr key={index} className="hover:bg-base-200">
                                        <th>{index + 1}</th>
                                        <td>{product.proName}</td>
                                        <td><Link to={`/product/${product?._id}`}><button className='text-[#153389] underline'>View Details</button></Link></td>



                                        <td className='flex'>

                                            <button onClick={() => { handleDelete(product?._id) }} className='text-red-700   px-4 py-1 bg-[#f317172b] rounded-2xl ml-6'  >
                                                Delete
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

export default Reported;