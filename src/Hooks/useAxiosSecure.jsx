import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const {logOut} = useContext(AuthContext)
  

    //request interceptor

    axiosSecure.interceptors.request.use(function (config) {
       const token = localStorage.getItem("token")
       config.headers.authorization = token
        return config;
      }, function (error) {
        
        return Promise.reject(error);
      });

      //response interceptor


  axios.interceptors.response.use(function (response) {
    return response;
  },  async (error)=> {
    const status = error.response?.status
    if(status === 401 || status === 403){

         localStorage.removeItem("authToken");
         await logOut()
   

    }
    return Promise.reject(error);
  });




    return axiosSecure;
};

export default useAxiosSecure;