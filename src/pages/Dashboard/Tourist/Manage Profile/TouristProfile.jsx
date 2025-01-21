import { Link } from "react-router-dom";
import useAuth from "../../../../custom hooks/useAuth";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";


const TouristProfile = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data : users =[]} = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        }
    })

    // TODO: update user info


    return (
        <div>
            <h2 className="text-lg my-4">Welcome <span className=" font-semibold">{user?.displayName} !</span></h2>
            <div >
                <img className="h-32 w-32 rounded-full object-cover p-1 " src={user?.photoURL} alt="Profile Image" />
                <div className="flex gap-9 ">
                    <div>
                    <h2 className="text-lg font-semibold mt-2 ">{user?.displayName}</h2>
                    <p className="opacity-70">{user?.email}</p>
                    <p className="opacity-70">Role : {users?.role}</p>
                    </div>
                    <FaEdit className="text-xl"></FaEdit>
                </div>

            </div>
            <div>
                <button className="btn mt-20 btn-accent"><Link to={"/dashboard/join-tour-guide"}>Apply For Tour Guide </Link></button>
            </div>
        </div>
    );
};

export default TouristProfile;