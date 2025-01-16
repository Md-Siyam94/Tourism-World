import axios from "axios";


const axiosPublic = axios.create({
    // baseURL: `http://localhost:5000`
    baseURL: `${import.meta.env.VITE_baseApi}`
})
 
// console.log(axiosPublic);
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;