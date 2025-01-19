import { HiDotsVertical } from "react-icons/hi";
import useAuth from "../custom hooks/useAuth";
import useAxiosPublic from "../custom hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";


const StoryCard = ({ story, refetch }) => {
    // TODO: Take user photo and name from db
    const { user } = useAuth()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const { title, image, description, _id } = story || {}
    console.log(location);
    // TODO: make story edit func


    // story delete func
    const handleDeleteStory = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/stories/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your story has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className=" bg-base-100 w-[60%] mx-auto shadow-xl pt-6">
                <div className="flex justify-between items-start mx-6">
                    <div className="flex gap-3 mb-8 items-center ">
                        <img className="h-10 w-10 rounded-full object-cover" src={user?.photoURL} alt="" />
                        <div className="">
                            <h2 className="font-semibold">{user?.displayName}</h2>
                            {/* TODO: give here the created time */}
                            <h3 className="opacity-60">posted time</h3>
                        </div>
                    </div>
                    <button><HiDotsVertical className="text-xl" /></button>
                </div>
                <figure>
                    <img
                        className="h-64 w-full"
                        src={image}
                        alt="Story image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{description}</p>
                    <div >
                        <div>
                            {
                                location.pathname === "/dashboard/manage-stories" && <div className="card-actions justify-end mt-4">
                                    <button className="badge badge-success text-white">Edit</button>
                                    <button onClick={() => handleDeleteStory(_id)} className="badge badge-error text-white">Delete</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default StoryCard;