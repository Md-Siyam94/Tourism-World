import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePackages = () => {
    const axiosPublic = useAxiosPublic();
    const {data: tourPackage = [], refetch}= useQuery({
        queryKey: ['tourPackage'],
        queryFn: async()=>{
            const res = axiosPublic.get("/packages")
            return res.data
        }
    })
    // console.log(tourPackage);
    return [tourPackage, refetch]
  
};

export default usePackages;