import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useAssignes = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic()
    const {data: myAssigns = [], refetch} = useQuery({
        queryKey: ["myAssigns", user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/bookings-by-guide/${user?.email}`)
            return res.data
        }
    })
    return [myAssigns, refetch]
};

export default useAssignes;