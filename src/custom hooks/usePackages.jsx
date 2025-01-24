import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePackages = () => {
    const axiosPublic = useAxiosPublic();
    const {data: tourPackages = [], refetch}= useQuery({
        queryKey: ['tourPackage'],
        queryFn: async()=>{
            const res = await axiosPublic.get("/packages")
            return res.data
        }
    })
    // console.log(tourPackage);
    return [tourPackages, refetch]
  
};

export default usePackages;