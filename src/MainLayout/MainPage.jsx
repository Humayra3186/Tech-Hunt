import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Nav/Navbar';
import Footer from '../shared/Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const MainPage = () => {
    const{ setOpen} = useContext(AuthContext)
    const handleMenu =()=>{
        setOpen(false)
    }
    return (
        <div>
           <Navbar></Navbar>
            <div onClick={handleMenu}>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;