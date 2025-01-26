import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGuide = () => {
    const axiosPublic = useAxiosPublic()
    const {data: guides = [], refetch} = useQuery({
        queryKey: ["guides"],
        queryFn: async()=>{
            const res = await axiosPublic.get("/users/guides")
            return res.data
        }
    })

    return [guides, refetch]
};

export default useGuide;