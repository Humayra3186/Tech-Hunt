import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const email = user?.email
    const { data,isPending } = useQuery({
        queryKey: ['isAdmin', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/${email}`)
            
            return res.data
        }

    })

    return [data,isPending]

};

export default useAdmin;