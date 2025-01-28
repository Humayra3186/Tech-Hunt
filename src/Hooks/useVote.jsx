import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from './useAxiosSecure';


const useVote = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    

    

    const handleVote =( _id,reload) =>{
        const id = _id
        const email = user?.email
        const data = {id,email}

        if(!user){
          return  navigate("login")
        }

        axiosSecure.post("/votes" , data)
        .then(res =>{
            if(res.data.insertedId){
                reload()
                swal("successfully","Voted the product" , "success")
                
            }
            if(res.data.message){
                swal(`${res?.data?.message}`,"can vote on a product once only" , "error") 
            }
        })
         

    }

    return[handleVote]
};

export default useVote;