import React, { useContext, useEffect, useState } from 'react';
import bg from "../../assets/img/probg.webp"
import { AiFillProduct } from "react-icons/ai";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { BiSolidLike } from 'react-icons/bi';
import useVote from '../../Hooks/useVote';
import useAccept from '../../Hooks/useAccept';
import { FaLessThanEqual } from 'react-icons/fa6';


const Products = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    const [products, refetch, count] = useAccept()

    const [search , setSearch] = useState("")


    const navigate = useNavigate()



  

    /// pagiantion
    const accept = "Accepted"
    const perPage = 6
    const numberPages = Math.ceil(count / perPage)
    const [currentPage, setCurrentPage] = useState(0)
    let pages = []

    for (let i = 0; i < numberPages; i++) {
        pages.push(i)
    }


    // get data according to page 

    useEffect(() => {

       fetchData()
    }, [currentPage,search])

    const fetchData = () =>{

        setLoader(true)

        axiosPublic.get(`/page/products?accept=${accept}&page=${currentPage}&size=${perPage}&search=${search}`
        )
            .then(res => {
                setData(res.data)
                setLoader(false)
              
            })
    }


      //handle vote

      const handleVote = (_id) => {
        const id = _id
        const email = user?.email
        const data = { id, email }

        if (!user) {
            navigate("/login")
        }

        axiosSecure.post("/votes", data)
            .then(res => {
                if (res.data.insertedId) {
                    fetchData()
                    swal("successfully", "Voted the product", "success")

                }
                if (res.data.message) {
                    swal(`${res?.data?.message}`, "can vote on a product once only", "error")
                }
            })


    }


    return (
        <div>

            {/* banner section */}
            <div className="h-[16rem] w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>

                <div className='w-full h-full bg-[#1a1a1b92] '>
                    <div className='w-[85%] mx-auto pt-[10rem] flex justify-center'>
                        <div className='w-full lg:w-[60%]'>
                            <input onKeyUp={(e)=>{setSearch(e.target.value)}} type="text" placeholder='search according to tags' className='py-2 px-4 w-[80%] md:[w-] lg:w-[86%] rounded-tl-lg rounded-bl-lg  mx-auto' />
                            <button className='btn-color rounded-tr-lg rounded-br-lg py-[0.6rem] px-4'>Search</button>
                        </div>

                    </div>




                </div>
            </div>

            {/* main part */}

            <div className='w-[85%] mx-auto '>
                {loader ? <>< div className='h-[20rem] flex justify-center items-center'>
                    <span className="loading loading-ring loading-lg"></span>
                </div></> : <>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[5rem]'>

                        {
                            data?.map(product => <>
                                <div className='bg-base-200 border-0 border-b-4  border-[#a3cc43] hover:shadow-xl'>
                                    <div className='w-full h-[12rem]'>
                                        <Link to={`/product/${product._id}`}> <img className='w-full h-full' src={product?.proImg} alt="" /></Link>
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
                </>}



                <div className='flex justify-center gap-6 my-8'>

                    {
                        pages?.map(num => <button onClick={() => { setCurrentPage(num) }} className={currentPage === num ? "btn btn-color" : "btn"}>
                            {num + 1}
                        </button>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;