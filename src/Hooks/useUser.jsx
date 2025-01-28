import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const email = user?.email 

    const [userInfo , setuserInfo] = useState([])
    const [loader,setLoader] = useState(false)

   useEffect(()=>{
    setLoader(true)
    axiosSecure.get(`/user?email=${email}`)
    .then(res =>{
        setuserInfo(res.data[0])
        setLoader(false)
    })
   },[user])

    return [userInfo,loader] ;
};

export default useUser;