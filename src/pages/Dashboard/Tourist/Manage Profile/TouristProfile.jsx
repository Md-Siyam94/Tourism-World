import { Link } from "react-router-dom";
import useAuth from "../../../../custom hooks/useAuth";


const TouristProfile = () => {
    const { user } = useAuth()


    return (
        <div>
            <h2 className="text-lg my-4">Welcome <span className=" font-semibold">{user?.displayName} !</span></h2>
            <div >
                <img className="h-32 w-32 rounded-full object-cover p-1 " src={user?.photoURL} alt="Profile Image" />
                <div >
                    <h2 className="text-lg font-semibold mt-2 ">{user?.displayName}</h2>
                    <p className="opacity-70">{user?.email}</p>
                    <p>Role : </p>
                </div>

            </div>
            <div>
                <button className="btn mt-20 btn-accent"><Link to={"/dashboard/join-tour-guide"}>Apply For Tour Guide </Link></button>
            </div>
        </div>
    );
};

export default TouristProfile;