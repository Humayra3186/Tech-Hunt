import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const [isAdmin, isPending] = useAdmin()
    const { user, loader,logOut } = useContext(AuthContext)


    if (loader || isPending) {
        return (
            < div className='h-[20rem] flex justify-center items-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }

    if (user && isAdmin?.isAdmin) {
        return (
            children
        )
    }




    return (
        logOut()
        
    );
};

export default AdminRoute;