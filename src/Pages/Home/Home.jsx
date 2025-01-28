import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Banner from './Banner/Banner';
import Feature from './Feature';
import Trending from './Trending';


const Home = () => {

  


  
    return (
        <div >
           <Banner></Banner>
           <Feature></Feature>
           <Trending></Trending>
        </div>
    );
};

export default Home;