import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className=' min-h-screen w-full mt-[4rem]'>
        <div className='text-center flex flex-col justify-center items-center'>

        <img className='w-[20rem]' src="https://www.gvolts.com.br/novo/assets/img/shape/error-1-1.png" alt="" />
           
            <h2 className='mt-4 mb-2 text-[2rem] font-semibold'>404 - Page NOT Found</h2>
            <p className='mb-6 font-bold text-gray-600'>The page you are looking for might have been removed <br /> had it's name changed or is temporary unavailable.....</p>

            <Link to={"/"} className=' py-2 px-4 text-lg rounded-3xl btn text-black'>Back to home</Link>
        </div>
        
    </div>
        </div>
    );
};

export default ErrorPage;