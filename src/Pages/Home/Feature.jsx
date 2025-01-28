import React, { useContext } from 'react';
import { BiSolidLike } from "react-icons/bi";
import { FaCaretSquareUp } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import useVote from '../../Hooks/useVote';
import useFeature from '../../Hooks/useFeature';


const Feature = () => {
    const feature = true
    const [products,reload] = useFeature(feature)
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
 
    const [handleVote] = useVote()

    
    return (
        <div className='w-[85%] mx-auto '>
            {/* tittle */}

           <div className='flex flex-col items-center mt-[4rem]'>
           <p className='text-center lemon px-8 rounded-2xl bg-[#a3cc4320] inline-block text-[0.8rem] mb-4 py-1'>Featured</p>
           <h2 className='text-gray-800 font-semibold text-[2rem] inline-block border-0 border-l-8 pl-2 border-[#a3cc43]'>Explore Featured products</h2>
           <p className='text-gray-500 text-[0.9rem] font-medium '>For details click on the product's name</p>
           </div>

           {/* card section */}
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[4rem]'>

            {
               products?.map((product,index)=>
                <div key={index} className='flex bg-base-200 border-0 border-r-4  border-[#a3cc43] shadow-xl'>
                  <div className='w-[13rem] h-[8rem] rounded-xl '>
                <Link to={`product/${product._id}`}>
                <img className='
                    w-full h-full ' src={product?.proImg} alt="" /></Link>
                  </div>
                  <div className='ml-4 w-full'>
                  
                  <h2 className='text-gray-800 mb-1 font-semibold text-[1.4rem] flex justify-between'>{product?.proName} <button onClick={()=> handleVote(product?._id,reload)} disabled={user?.email == product?.ownerEmail} className='flex btn-color px-4 items-center text-[1.1rem] gap-2'>{product?.vote}<BiSolidLike></BiSolidLike></button> </h2>
                  
                
                   {
                        product?.tags?.map(tag => <p className='mt-0 md:mt-4 lg:mt-0  text-center text-gray-800 font-semibold px-6 ro bg-[#55565320] inline-block mr-11  text-[0.9rem] mb-4 py-1'>
                           # {tag}
                        </p> )
                    }
                 
                  </div>
                </div>
            )
            }

           </div>
        </div>
    );
};

export default Feature;