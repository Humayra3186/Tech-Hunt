import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useReviews = () => {
    const axiosPublic = useAxiosPublic()
    const {data:reviews, isPending,refetch } = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () =>{
            const res = await axiosPublic.get("/reviews")
            return res.data
        }
         
      })

      return [reviews , refetch , isPending]
};

export default useReviews;