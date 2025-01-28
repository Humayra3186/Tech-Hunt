import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
const axiosPublic = useAxiosPublic()
    const {data:products, isPending,refetch } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async () =>{
            const res = await axiosPublic.get("/products")
            return res.data
        }
         
      })

      return [products , refetch , isPending]
};

export default useProducts;