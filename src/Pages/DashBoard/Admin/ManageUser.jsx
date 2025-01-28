import React, { useContext, useEffect, useState } from 'react';
import useUsers from '../../../Hooks/useUsers';
import { HiPencilSquare } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';
import useUser from '../../../Hooks/useUser';



const ManageUser = () => {
    const [users,refetch] = useUsers()

    const {logOut,user}= useContext(AuthContext)

    const axiosSecure = useAxiosSecure()

    const [userInfo]= useUser()

    const [isAdmin,setAdmin]= useState(false)



    



    //handle moderator

    const handleModerator = id =>{

      

        const newUpdate = {newRole : "moderator"}

        swal({
            title: "Are you sure to make him/her moderator?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

        .then((willDelete) => {
            if (willDelete) {
            
                axiosSecure.patch(`/updateRole/${id}` , newUpdate)
                .then(res =>{
                   
                    if( res.data?.modifiedCount>0){
                        refetch()
                        swal("Successfully Updated!", {
                            icon: "success",
                        });
                    }
                  
                   
                })
            }
        });

    



    }


     //handle moderator

     const handleAdmin = id =>{

      

        const newUpdate = {newRole : "admin"}

        swal({
            title: "Are you sure to make him/her Admin?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

        .then((willDelete) => {
            if (willDelete) {
            
                axiosSecure.patch(`/updateRole/${id}` , newUpdate)
                .then(res =>{
                    if( res.data?.modifiedCount>0){
                        refetch()
                        swal("Successfully Updated!", {
                            icon: "success",
                        });
                    }
                  
                   
                })
            }
        });

    



    }

    


    return (
        <div  className='  bg-center bg-no-repeat bg-cover min-h-screen'>

            {/* tittle */}

            <Zoom triggerOnce={false}>
                <h1 className='text-center  gap-3 flex items-center justify-center text-[1.5rem]  md:text-[2.2rem] pt-10 font-bold  '><span className='text-[#69a533]'>---</span>Manage Users <span className='text-[#69a533]'>---</span></h1>
            </Zoom>

            <p className='text-center text-[0.8rem] md:text-[0.9rem] text-[#232121c1] mb-9'>you can manage user status and make moderator or admin <br /> any  products</p>

            {/* table */}

            <div className="overflow-x-auto mt-16">
                <table className="table border ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-black text-[1rem]'>Name</th>
                            <th className='text-black text-[1rem]' >Email</th>

                           
                            
                            <th className='text-black text-[1rem]'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* row 1 */}

                        {users?.map((user, index) =>

                            <tr key={index} className="hover:bg-base-200">
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                               
                                
                                <td className='flex'>
                                     <button onClick={()=>{handleModerator(user?._id)}}  disabled={user?.role == "moderator" || userInfo?.role == "admin"&& user?.email == userInfo?.email}  className='btn-color px-2 py-1 rounded-2xl'>
                                        Moderator
                                    </button>
                                    <button onClick={()=>{handleAdmin(user?._id)}}  disabled={user?.role == "admin"} className='btn-color px-6 py-1 rounded-2xl ml-6'  >
                                       Admin
                                    </button>
                                </td>
                            </tr>
                        )}




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUser;