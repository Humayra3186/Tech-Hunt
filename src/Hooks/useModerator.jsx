import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useModerator = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const email = user?.email
    const { data:isModerator,isPending } = useQuery({
        queryKey: ['isModerator', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/moderator/${email}`)
            return res.data
        }

    })

    return [isModerator,isPending]
};

export default useModerator;