import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            hi
            <Outlet></Outlet>
        </div>
    );
};

export default Main;