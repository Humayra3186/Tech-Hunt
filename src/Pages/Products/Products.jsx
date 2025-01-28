import React, { useEffect } from 'react';
import bg from "../../assets/img/probg.webp"
import { AiFillProduct } from "react-icons/ai";
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const Products = () => {
    
 

    const status = "Accepted"

  

   

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
                       <input type="text" placeholder='search according to tags' className='py-2 px-4 w-[80%] md:[w-] lg:w-[86%] rounded-tl-lg rounded-bl-lg  mx-auto' />
                       <button className='btn-color rounded-tr-lg rounded-br-lg py-[0.6rem] px-4'>Search</button>
                       </div>
                        
                        </div>
                      
                        
                       

                    </div>
            </div>

            {/* main part */}

            <div className='w-[85%] mx-auto '>


 
                
            </div>
            
        </div>
    );
};

export default Products;