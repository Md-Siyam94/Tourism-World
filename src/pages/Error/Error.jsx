import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Lottie from "lottie-react";
import ErrorAnimation from "../../../public/errorAnimation.json"

const Error = () => {
    return (
        <div className="flex flex-col w-10/12  mx-auto   ">
            <div>
                <Lottie
                animationData={ErrorAnimation}
                loop={true}
                autoPlay={true}
                style={{width: "70%", height: "300px", margin: "auto"}}

                >

                </Lottie>
            </div>
            <div>
                <h1 className="text-center text-error text-3xl md:text-6xl  my-2">404</h1>
                <h3 className="md:text-3xl text-2xl text-center font-semibold mb-4">Opps! Page not Found</h3>
                <p className="font-semibold text-center pb-8">The page you are searching, it's maybe not available or something else</p>
                
               <button className="btn flex flex-col justify-center w-44 btn-info  mx-auto ">
               <Link className="flex gap-2  items-center py-3  justify-center font-semibold rounded-lg  bg-orange" to={"/"} ><FaArrowLeft />
               Back To Home</Link>
               </button>
            </div>

        </div>
    );
};

export default Error;