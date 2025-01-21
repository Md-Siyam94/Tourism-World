import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../custom hooks/useAxiosSecure"

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()
    const {data: users = [], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    
    return (
        <div>
            <h1 className="text-2xl font-semibold mt-8 mb-4">All users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} >
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                            
                                            <div className="text-sm opacity-50">{user?.role}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="text-sm opacity-50">{user?.email}</div>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user?.description}</span>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs bg-success text-white hover:bg-success ">Accept</button>
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteApplication(user._id)} className="btn btn-ghost btn-xs bg-error text-white hover:bg-error">Reject</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;