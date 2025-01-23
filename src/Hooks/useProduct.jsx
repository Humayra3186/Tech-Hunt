import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useProduct = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const email =user?.email
    const {data, isPending,refetch } = useQuery({
        queryKey: ['products',email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/products?email=${email}`)
            return res.data
        }
         
      })

      return [data , refetch , isPending]
};

export default useProduct;