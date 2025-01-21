import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user , loader} = useContext(AuthContext)

    if(loader){
        return (
            < div className='h-[20rem] flex justify-center items-center'>
        <span className="loading loading-ring loading-lg"></span> 
        </div>
        )
    }

    if (user){
        return (
            children
        )
    }
       



    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivetRoute;