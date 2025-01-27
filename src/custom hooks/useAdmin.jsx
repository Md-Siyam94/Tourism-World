import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure()

    const {data: isAdmin = []} = useQuery({
        queryKey: ["isAdmin",user?.email],
        enabled: !!user?.email && !loading ,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(res.data);
            return res.data?.admin
        }
    })
    return [isAdmin]
 
};

export default useAdmin;