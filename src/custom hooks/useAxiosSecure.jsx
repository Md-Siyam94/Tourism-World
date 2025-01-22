import axios from "axios";


const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_baseApi}`
})

const useAxiosSecure = () => {

    return axiosSecure
};

export default useAxiosSecure;