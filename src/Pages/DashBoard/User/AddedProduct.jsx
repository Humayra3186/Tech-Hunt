import React, { useContext } from 'react';
import bg from "../../../assets/img/add bg.jpg"
import { Zoom } from 'react-awesome-reveal';
import useProduct from '../../../Hooks/useProduct';
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const AddedProduct = () => {
    const [data,isPending]= useProduct()
    const axiosSecure = useAxiosSecure()

    // delete

   const handleDelete = id =>{
     
    axiosSecure.delete(`product/${id}`)
    .then(res =>{
        console.log(res.data)
    })
    
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

                    {data?.map((product,index)=>

                        <tr className="hover:bg-base-200">
                        <th>{index+1}</th>
                        <td>{product?.proName}</td>
                        <td>{product?.vote}</td>
                        <td>{product?.status}</td>
                        <td className='flex'>
                           <button>
                           <HiPencilSquare className='text-[1.4rem]'></HiPencilSquare>
                           </button>
                           <button onClick={()=>{handleDelete(product._id)}} className='ml-6'>
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