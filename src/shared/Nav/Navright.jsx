import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navright = () => {

    const{loader} = useContext(AuthContext)

   if(loader){
    return (
        <span className="loading loading-dots loading-md"></span>
    )
   }
    return (
        <div>
             <Link to={"register"}><button className='btn-color py-2 px-4 mr-5'>SignUp</button></Link>
            <Link to={"login"}><button className='btn-color py-2 px-4'>SignIn</button></Link>
        </div>
    );
};

export default Navright;