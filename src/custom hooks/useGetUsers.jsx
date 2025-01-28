
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useGetUsers = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return [users]
};

export default useGetUsers;