import React, { useContext, useEffect, useState } from 'react';

import bg from "../../assets/img/de.webp"
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import useVote from '../../Hooks/useVote';
import { BiSolidLike } from 'react-icons/bi';
import ReactStars from 'react-stars'
import swal from 'sweetalert';
import Review from './Review';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Details = () => {

    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    
    const { user } = useContext(AuthContext)
    const [rating, setRating] = useState("")
    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate()

    //vote

    const handleVote =( _id,reload) =>{
        const id = _id
        const email = user?.email
        const data = {id,email}

      

        axiosSecure.post("/votes" , data)
        .then(res =>{
            if(res.data.insertedId){
                reload()
                swal("successfully","Voted the product" , "success")
                
            }
            if(res.data.message){
                swal(`${res?.data?.message}`,"can vote on a product once only" , "error") 
            }
        })
         

    }

    // get product
    const { data: product, isPending, refetch } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product/${id}`)
            return res.data
        }

    })

   

    const ratingChanged = (newRating) => {
        setRating(newRating)
    }


    // review


    const handleReview = e => {
        e.preventDefault()

        const id = product?._id
        const name = user?.displayName
        const photo = user?.photoURL
        const comment = e.target.comment.value
        const rate = rating


        const review = {
            id, name, photo, comment, rate
        }

       
       
        axiosSecure.post("/review" , review)
        .then(res =>{
            if(res.data.
                insertedId
                ){
                    e.target.reset()
                    swal("Great", "Successfully Posted!", 'success');
                     navigate("/products")
                }
        })


    }


    // handle report 

    const handleReport = () =>{

       

          swal({
            title: "Are you sure to report this product?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

        .then((willDelete) => {
            if (willDelete) {
            
                axiosSecure.patch(`/report/${id}` )
                .then(res =>{
                    if( res.data?.modifiedCount>0){
                        refetch()
                        swal(" Report!", {
                            icon: "success",
                        });
                    }
                  
                   
                })
            }
    })}

    

    
    return (
        <div>



            {/* main section */}

            <div className='w-[85%] md:w-[70%] my-[4rem] bg-base-200 rounded-xl mx-auto pb-8'>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='w-[4rem] h-[4rem] rounded-full' src={product?.proImg} alt="" />
                        <h2 className='text-[1.9rem] font-semibold text-gray-700 ml-4'>{product?.proName}</h2>
                    </div>

                    <div className='flex '>
                       

                        <button onClick={() => handleVote(product?._id, refetch)} disabled={user?.email == product?.ownerEmail} className='inline-flex btn-color h-[2.6rem] py-2 px-4 items-center text-[1.1rem] gap-2 font-medium'>{product?.vote} Upvote<BiSolidLike></BiSolidLike></button>
                    </div>

                </div>

                <div className='ml-16'>
                    {
                        product?.tags?.map(tag => <p className='mt-0 md:mt-4 lg:mt-0  text-center text-gray-800 font-semibold px-6 ro bg-[#55565320] inline-block mr-4  text-[0.9rem] mb-4 py-1'>
                            # {tag}
                        </p>)
                    }
                </div>

                <p className='px-12 mb-[2rem] text-gray-600 mt-6'>{product?.description}</p>
                <a href={product?.link} className=' text-black text-[1.5rem] ml-[3rem] font-semibold'># Visit Link</a>
                 <button onClick={handleReport}  disabled={user?.email == product?.ownerEmail} className='inline-flex bg-[#ef434349] text-red-700 ml-4 py-1 px-3 items-center text-[1.1rem] gap-2 font-medium'> Report</button>
            </div>




            {/* review section */}

            <div className='flex flex-col items-center w-[70%] mx-auto mt-[4rem]'>

                <h2 className='text-gray-900 text-[2rem] inline-block  font-semibold border-0 border-l-8 pl-2 border-[#a3cc43]'>User Reviews</h2>
                <p className='text-gray-500 text-[0.9rem] font-medium '>Our happy user's review for our product</p>
            </div>

            <Review proId={id}></Review>


            {/* post review  */}

            <div className='flex flex-col items-center mt-[4rem] w-[70%] mx-auto'>

                <h2 className='text-gray-900 text-[2rem] inline-block border-0 border-l-8 pl-2 border-[#a3cc43] font-semibold'>Post A Review</h2>
                <p className='text-gray-500 text-[0.9rem] font-medium '>Post a review and give your opinion.</p>
            </div>
            <form  onSubmit={handleReview} className="w-[80%] md:w-[60%] p-6 mx-auto bg-base-200 my-8 bg-center bg-cover bg-no-repeat rounded-lg">
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Name : </span>
                    </label>
                    <input readOnly type="text" value={user?.displayName} className="input input-bordered mb-3" required />
                    <input readOnly type="text" value={user?.photoURL} className="input input-bordered mb-3" required />
                </div>
                <div className="form-control">
                    <label className="label font-semibold">
                        <span className="label-text">Comment :</span>
                    </label>
                    <textarea className='border-2 mb-3 rounded-md' name="comment" required id=""></textarea>


                    <label className="label font-semibold">
                        <span className="label-text mb-3">Rating :</span>
                    </label>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={'#ffd700'} />
                </div>
                <button disabled={user?.email == product?.ownerEmail} className="btn btn-color mt-6">Submit</button>
            </form>
        </div>
    );
};

export default Details;