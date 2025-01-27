import { FcGoogle } from "react-icons/fc";
import useAuth from "../../custom hooks/useAuth";
import useAxiosPublic from "../../custom hooks/useAxiosPublic"
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const {loginWithGoogle, } = useAuth()
    const axiosPublic = useAxiosPublic()
    
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email: result.user?.email,
                name: result.user?.displayName,
                userImage: result.user?.photoURL,
                role: "Tourist"
            }
            axiosPublic.post("/users", userInfo)
            .then(res=>{
                // console.log(userInfo);
                console.log(res.data);
                navigate("/")
                Swal.fire({
                    title: "Successfully login",
                    icon: "success",
                  });             
            })    
        })
        .catch(err=>{
            console.log("error from google login", err);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex gap-2 items-center btn w-full"><FcGoogle  className="text-3xl"/> <span className="font-semibold">Login With Google</span></button>
        </div>
    );
};

export default SocialLogin;