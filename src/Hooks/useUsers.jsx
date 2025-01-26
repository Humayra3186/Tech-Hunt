import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useUsers = () => {
    
    const axiosSecure = useAxiosSecure()
    const {logOut} = useContext(AuthContext)
    const {data:users, isPending,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get("/users")
        
            return res.data
        }
         
      })

      return [users , refetch , isPending]
};

export default useUsers;