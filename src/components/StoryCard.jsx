import { HiDotsVertical } from "react-icons/hi";
import useAxiosPublic from "../custom hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import { FacebookIcon, FacebookShareButton } from "react-share";


const StoryCard = ({ story, refetch }) => {
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const { name, title, image, description, posterImage, createdAt, _id } = story || {}

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
    const shareUrl = 'https://www.pakkamarwadi.tk/';
    return (
        <div>
            <div className=" bg-base-100 w-[60%] mx-auto shadow-xl pt-6">
                <div className="flex justify-between items-start mx-6">
                    <div className="flex gap-3 mb-8 items-center ">
                        <img className="h-10 w-10 rounded-full object-cover" src={posterImage} alt="" />
                        <div className="">
                            <h2 className="font-semibold">{name}</h2>

                            <h3 className="opacity-60">{moment(createdAt).format("MMM Do YY")}</h3>
                        </div>
                    </div>
                    <button><HiDotsVertical className="text-xl" /></button>
                </div>
                <figure>
                    <img
                        className="h-72 w-full object-cover"
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
                                location.pathname === "/dashboard/manage-stories" ? <div className="card-actions justify-end items-center mt-4">
                                    <Link to={`/dashboard/edit-story/${_id}`}><button className="badge badge-success text-white">Edit</button></Link>
                                    <button onClick={() => handleDeleteStory(_id)} className="badge badge-error text-white">Delete</button>
                                </div> : <div className="card-actions justify-end items-center mt-4">
                                    <h3 className="opacity-70 font-semibold">Share with</h3>
                                    <FacebookShareButton url={shareUrl}>
                                       <FacebookIcon size={30}></FacebookIcon>
                                    </FacebookShareButton>
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