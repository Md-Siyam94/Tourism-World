import { FcGoogle } from "react-icons/fc";
import useAuth from "../../custom hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {loginWithGoogle} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result=>{
            navigate(location?.pathname ? location?.pathname : "/")
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex gap-2 items-center btn w-full"><FcGoogle  className="text-3xl"/> <span className="font-semibold">Login With Google</span></button>
        </div>
    );
};

export default SocialLogin;