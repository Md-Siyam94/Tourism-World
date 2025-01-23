import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useStories = () => {
    
    const axiosPublic = useAxiosPublic();

    const {data: stories = [], refetch} = useQuery({
        queryKey: ["stories"],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/stories`);
            return res.data;
        },
        
        
    })
    return [stories, refetch]
};

export default useStories;