import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useAccept = () => {
    const accept = true
    const axiosPublic = useAxiosPublic()

    const [count , setCount] = useState(1)

  const {data:products,isPending,refetch } = useQuery({
         queryKey: ['allProducts',accept],
         queryFn: async () =>{
             const res = await axiosPublic.get(`/products?accept=${accept}`)
             return res.data
             
         }
 
          
       })

       useEffect(()=>{
            setCount(products?.length)
       },products)

     

       return[products , refetch,count]
};

export default useAccept;