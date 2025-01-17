import { BarLoader } from "react-spinners";
import useAuth from "../custom hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <div className="flex flex-col h-full my-56 items-center ">
            Loading...
            <BarLoader color="#185476"></BarLoader>
        </div>
    }
    if(user){
        return children
    }
    return (
      <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivetRoute;