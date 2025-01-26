import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../custom hooks/useAxiosSecure"


const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}` 
                }
            })
            return res.data
        }
    })


    return (
        <div>
            <h1 className="text-2xl font-semibold mt-8 mb-4">All users</h1>
            {/* TODO: make search dynamic */}
            <div className="flex gap-6 my-4 ">
                <label className="input input-bordered flex items-center gap-2 flex-1">
                    <input type="text" className="grow" placeholder="Search by name or email" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <select defaultValue={"Filter by role"} className="select select-bordered w-full max-w-xs">
                    <option disabled defaultValue={"Filter by role"}>Filter by role</option>
                    <option value={"Tourist"}>Tourist</option>
                    <option value={"Guide"}>Guide</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>

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
                                                    src={user?.userImage}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>


                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm opacity-50">{user?.email}</div>
                                    <br />

                                </td>
                                <td>
                                    <div className="text-sm opacity-50">{user?.role}</div>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;