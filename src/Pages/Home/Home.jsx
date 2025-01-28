import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Banner from './Banner/Banner';
import Feature from './Feature';
import Trending from './Trending';
import Coupon from './Coupon';


const Home = () => {

  


  
    return (
        <div >
           <Banner></Banner>
           <Feature></Feature>
           <Trending></Trending>
           <Coupon></Coupon>
        </div>
    );
};

export default Home;