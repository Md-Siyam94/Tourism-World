import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useStories = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();

    const {data: stories = [], refetch} = useQuery({
        queryKey: ["stories", user?.email],
        queryFn: async()=>{
            const res = axiosPublic.get(`/stories/${user?.email}`);
            return res.data;
        },
        
        
    })
    return [stories, refetch]
};

export default useStories;