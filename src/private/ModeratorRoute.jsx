import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import useModerator from '../Hooks/useModerator';
import { AuthContext } from '../Provider/AuthProvider';

const ModeratorRoute = ({children}) => {
    const [isModerator , isPending] = useModerator()
    const { user, loader } = useContext(AuthContext)


    if (loader || isPending) {
        return (
            < div className='h-[20rem] flex justify-center items-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }

    if (user && isModerator?.isModerator) {
        return (
            children
        )
    }




    return (
        <Navigate to={'/login'}></Navigate>
    );

};

export default ModeratorRoute;