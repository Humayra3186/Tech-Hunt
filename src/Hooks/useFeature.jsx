import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useFeature = (feature) => {
    const axiosPublic = useAxiosPublic()
    const {data:products,isPending,refetch:reload } = useQuery({
        queryKey: ['products',feature],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/products?feature=${feature}`)
            return res.data
        }
         
      })

      return [products , reload , isPending]
};

export default useFeature;