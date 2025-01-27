import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../custom hooks/useAuth";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddStories = () => {
    // const [images, setImages] = useState([])
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [uploading, setUploading] = useState(false)
    const { user } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        // console.log(data)
        setUploading(true)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            setUploading(false)
            const storyData = {
                name: user?.displayName,
                email: user?.email,
                posterImage: user?.photoURL,
                title: data.title,
                createdAt: new Date(),
                description: data.description,
                image: res.data.data.display_url
                
            }
            axiosPublic.post("/stories", storyData)
            .then(res=>{
                if(res.data.insertedId){
                    navigate("/dashboard/manage-stories")
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your story has been posted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            })
            // console.log(story);
        }


    };

    // const handleFileChange = (e) => {
    //     const files = Array.from(e.target.files);
    //     setImages(files)
    // }
    // console.log(images);
    return (
        <div>
            <div className="">
                <h1 className="text-2xl font-semibold mt-8 mb-2">Add Your Story</h1>
                {/* title */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} placeholder="Write title" className="input input-bordered w-[50%]" />
                        <div>
                            {errors.title?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Title is required !</p>}
                        </div>
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write description" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Description is required !</p>}
                        </div>
                    </label>
                    {/* image */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input  multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select a photo to post</p>}
                        </div>
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

export default AddStories;