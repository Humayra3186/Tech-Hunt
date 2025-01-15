import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Banner from './Banner/Banner';

const Home = () => {
  
    return (
        <div className='h-[80rem]'>
           <Banner></Banner>
        </div>
    );
};

export default Home;