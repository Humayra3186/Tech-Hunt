import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const [data, isPending] = useAdmin()
    const { user, loader } = useContext(AuthContext)


    if (loader || isPending) {
        return (
            < div className='h-[20rem] flex justify-center items-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }

    if (user && data?.isAdmin) {
        return (
            children
        )
    }




    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default AdminRoute;