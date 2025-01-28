import React, { useContext } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { BiSolidLike } from 'react-icons/bi';
import useVote from '../../Hooks/useVote';
import { AuthContext } from '../../Provider/AuthProvider';

const Trending = () => {
    const axiosPublic = useAxiosPublic()
    const [handleVote] = useVote()
    const {user} = useContext(AuthContext)

    const { data, isPending, refetch } = useQuery({
        queryKey: ['trending'],
        queryFn: async () => {
            const res = await axiosPublic.get("/trend")
            return res.data
        }

    })

    

    return (
        <div className='w-[85%] mx-auto'>
            {/* tittle */}

            <div className='flex flex-col items-center mt-[6rem]'>
                <p className='text-center lemon px-8 rounded-2xl bg-[#a3cc4320] inline-block text-[0.8rem] mb-4 py-1'>Trending</p>
                <h2 className='text-gray-800 font-semibold text-[2rem] inline-block border-0 border-l-8 pl-2 border-[#a3cc43]'>Explore Trending Products</h2>
                <p className='text-gray-500 text-[0.9rem] font-medium '>Our top voted products here! </p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[5rem]'>

                {
                    data?.map(product => <>
                        <div className='bg-base-200 border-0 border-b-4  border-[#a3cc43] hover:shadow-xl'>
                            <div className='w-full h-[12rem]'>
                                <Link to={`product/${product._id}`}> <img className='w-full h-full' src={product?.proImg} alt="" /></Link>
                            </div>
                            <div className='py-4 pl-4 '>
                                <h2 className='text-gray-800 mb-6 font-semibold text-[1.4rem] flex justify-between'>{product?.proName} <button onClick={() => handleVote(product?._id, refetch)} disabled={user?.email == product?.ownerEmail} className='flex btn-color px-4 items-center text-[1.1rem] gap-2'>{product?.vote}<BiSolidLike></BiSolidLike></button> </h2>


                                {
                                    product?.tags?.map(tag => <p className='   text-center text-gray-800 font-semibold px-6  bg-[#55565320] inline-block mr-11  text-[0.9rem] mb-4 py-1'>
                                        # {tag}
                                    </p>)
                                }
                            </div>
                        </div>
                    </>)
                }

            </div>

            <div className='flex justify-center my-12'>
            <Link to={"products"}><button className='text-[#a3cc43] text-[1.3rem] font-semibold'>...Show All Products...</button></Link>
            </div>
        </div>
    );
};

export default Trending;