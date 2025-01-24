import React from 'react';
import useUsers from '../../../Hooks/useUsers';

const ManageUser = () => {
    const [data] = useUsers()
    console.log(data)
    return (
        <div>
            manage user
        </div>
    );
};

export default ManageUser;