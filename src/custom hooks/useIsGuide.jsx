import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useIsGuide = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const {data: isGuide = []} = useQuery({
        queryKey: [ "isGuide",user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/guide/${user?.email}`)
            console.log(res.data);
            return res.data?.guide
        }
    })
    return [isGuide]
};

export default useIsGuide;