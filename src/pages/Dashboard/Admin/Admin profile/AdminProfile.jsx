import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../custom hooks/useAuth"
import useAxiosSecure from "../../../../custom hooks/useAxiosSecure";
import { FaBook, FaEdit, FaHistory } from "react-icons/fa";
import { MdAddBusiness, MdOutlineAutoStories } from "react-icons/md";

const AdminProfile = () => {
    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()
    const { data: users = [] } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return (
        <div className="py-6">
            <h2 className="text-xl">Welcome <span className="font-semibold text-2xl">{user?.displayName} !</span></h2>
            <div className="stats shadow my-8">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <MdOutlineAutoStories className="text-2xl "></MdOutlineAutoStories>
                    </div>
                    <div className="stat-title">Stories</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <MdAddBusiness className="text-2xl" />
                    </div>
                    <div className="stat-title">Packages</div>
                    <div className="stat-value">4,200</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                </div>
            </div>
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
        </div>
    );
};

export default AdminProfile;