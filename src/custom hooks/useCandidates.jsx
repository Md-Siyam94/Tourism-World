import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCandidates = () => {
    const axiosSecure = useAxiosSecure()
    const { data: candidates = [], refetch } = useQuery({
        queryKey: ["candidates"],
        queryFn: async () => {
            const res = await axiosSecure.get("/joinAsGuide")
            return res.data
        }
    })
    return [candidates, refetch]
};

export default useCandidates;