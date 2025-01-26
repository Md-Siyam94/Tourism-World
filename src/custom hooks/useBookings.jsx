import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useBookings = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: myBookings = [], refetch} = useQuery({
        queryKey: ["myBookings", user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/bookings/${user?.email}`)
            return res.data
        }
    })
    return [myBookings, refetch]
};

export default useBookings;