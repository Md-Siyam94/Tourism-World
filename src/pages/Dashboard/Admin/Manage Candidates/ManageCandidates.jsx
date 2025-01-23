
import useAxiosSecure from "../../../../custom hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCandidates from "../../../../custom hooks/useCandidates";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";

const ManageCandidates = () => {
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const [candidates, refetch] = useCandidates()

    // Accept candidate func

    const handleMakeGuide = (candidate) => {
        Swal.fire({
            title: "Are you sure want to make tuor guide?",
           
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Tour Guide"
        }).then((result) => {
            if (result.isConfirmed) {
                const updateData = {
                    role: "Guide"
                }
                axiosSecure.put(`/users/${candidate?._id}`, updateData)
                .then(res => {
                    console.log(res.data);
                    if (res.data?.modifiedCount > 0) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${candidate?.name} is a Tour Guide now`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

            }
        });
       
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
                                                    src={candidate?.candidateImage}
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
                                    <button onClick={() => handleMakeGuide(candidate)} className="btn btn-ghost btn-xs bg-success text-white hover:bg-success ">Accept</button>
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