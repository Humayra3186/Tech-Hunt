import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const email = user?.email 

    const [userInfo , setuserInfo] = useState([])

   useEffect(()=>{
    axiosSecure.get(`/users?email=${email}`)
    .then(res =>{
        setuserInfo(res.data[0])
    })
   },[user])

    return (userInfo) ;
};

export default useUser;