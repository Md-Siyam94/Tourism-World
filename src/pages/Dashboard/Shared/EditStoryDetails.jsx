import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../custom hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const EditStoryDetails = () => {
    const storyDetails = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [uploading, setUploading] = useState(false)
    const {title, description, image, _id} = storyDetails || {}
    // console.log(storyDetails, params);
    // TODO: MAKE THIS PAGE

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        // console.log(data)
        setUploading(true)
        const imageFile = {image: data.image[0]}
        // console.log(imageFile);
        if(imageFile.image){
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            if(res.data?.success){
                setUploading(false)
                const updatedInfo = {
                    title: data?.title,
                    description: data?.description,
                    storyImage: res.data.data.display_url,
                }
                console.log(updatedInfo);
                axiosPublic.patch(`/stories/${_id}`,updatedInfo )
                .then(res=>{
                    if(res.data?.modifiedCount > 0){
                        navigate("/dashboard/manage-stories")
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "story has been updated",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
            }
        }
        else{
        
            const updatedInfo = {
                title: data?.title,
                description: data?.description, 
                storyImage: image   
            }
            axiosPublic.patch(`/stories/${_id}`,updatedInfo )
            .then(res=>{
                if(res.data?.modifiedCount > 0){
                    setUploading(false)
                    navigate("/dashboard/manage-stories")
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "story has been updated",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
    };
    return (
        <div>
            <div className="">
                <h1 className="text-2xl font-semibold mt-8 mb-2">Edit Your Story</h1>
                {/* title */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" defaultValue={title} {...register("title")} placeholder="Write title" className="input input-bordered w-[50%]" />
                        <div>
                            {errors.title?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Title is required !</p>}
                        </div>
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register("description")} defaultValue={description} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write description" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Description is required !</p>}
                        </div>
                    </label>
                    {/* image */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input  multiple type="file"  {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                        
                    </label>

                    <div>
                        <button className="btn btn-info text-white mt-8">{
                            uploading ? "Posting..." : "Post story"
                        }</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStoryDetails;