import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../custom hooks/useAuth"
import useAxiosSecure from "../../../../custom hooks/useAxiosSecure";
import { FaEdit, FaUsers, FaUsersCog } from "react-icons/fa";
import { MdAddBusiness, MdOutlineAutoStories } from "react-icons/md";
import useGetUsers from "../../../../custom hooks/useGetUsers";
import useAdmin from '../../../../custom hooks/useAdmin'
import useIsGuide from '../../../../custom hooks/useIsGuide'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";

const AdminProfile = () => {
    const { user } = useAuth()
    const [users] = useGetUsers()
    const [isAdmin] = useAdmin()
    const [isGuide] = useIsGuide()
    const [uploading, setUploading] = useState(false)
    const axiosPublic = useAxiosPublic()

    const axiosSecure = useAxiosSecure()
    const { data: state = [] } = useQuery({
        queryKey: ["state"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin-state`)
            return res.data
        }
    })

   

    return (
        <div className="py-6">
            <h2 className="text-lg my-4">Welcome <span className=" font-semibold">{user?.displayName} !</span></h2>
            <div>
                {
                    isAdmin && <div className="stats shadow my-8">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUsers className="text-2xl" />

                            </div>
                            <div className="stat-title">Tourists</div>
                            <div className="stat-value">{state?.tourists}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUsersCog className="text-2xl" />
                            </div>
                            <div className="stat-title">Guides</div>
                            <div className="stat-value">{state?.guides}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <MdOutlineAutoStories className="text-2xl "></MdOutlineAutoStories>
                            </div>
                            <div className="stat-title">Stories</div>
                            <div className="stat-value">{state?.stories}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <MdAddBusiness className="text-2xl" />
                            </div>
                            <div className="stat-title">Packages</div>
                            <div className="stat-value">{state?.packages}</div>
                        </div>


                    </div>
                }
            </div>
            <div >
                <img className="h-32 w-32 rounded-full object-cover p-1 " src={user?.photoURL} alt="Profile Image" />
                <div className="flex gap-9 ">
                    <div>
                        <h2 className="text-lg font-semibold mt-2 ">{user?.displayName}</h2>
                        <p className="opacity-70">{user?.email}</p>
                        <p className="opacity-70">Role : {users?.role}</p>
                    </div>
                    <button  className=""><FaEdit className="text-xl"></FaEdit></button>
                </div>

            </div>
            <div>
                {
                    !isAdmin && !isGuide && <button className="btn mt-20 btn-accent"><Link to={"/dashboard/join-tour-guide"}>Apply For Tour Guide </Link></button>
                }
            </div>

            
        </div>
    );
};

export default AdminProfile;