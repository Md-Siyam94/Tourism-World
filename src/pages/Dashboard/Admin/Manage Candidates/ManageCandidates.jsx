import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../custom hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCandidates from "../../../../custom hooks/useCandidates";

const ManageCandidates = () => {
    const axiosSecure = useAxiosSecure()
   const [candidates, refetch] = useCandidates()
    // console.log(candidates);
    
    // Accept candidate func
    const handleUpdateRole =(id)=>{
        axiosSecure.update("/users")
    }


    // Reject candidate func
    const handleDeleteApplication = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Reject"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/joinAsGuide/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Application has been deleted.",
                                icon: "success"
                            });
                        }
                    })
              
            }
        });
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold mt-8 mb-4">Applied candidates </h1>
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
                            candidates.map((candidate, index) => <tr key={candidate._id} >
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
                                            <div className="font-bold">{candidate?.name}</div>
                                            <div className="text-sm opacity-50">{candidate?.email}</div>
                                            <div className="text-sm opacity-50">{candidate?.role}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {candidate?.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{candidate?.description}</span>
                                </td>
                                <td>
                                    <button onClick={()=>handleUpdateRole(candidate?._id)} className="btn btn-ghost btn-xs bg-success text-white hover:bg-success ">Accept</button>
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteApplication(candidate?._id)} className="btn btn-ghost btn-xs bg-error text-white hover:bg-error">Reject</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCandidates;