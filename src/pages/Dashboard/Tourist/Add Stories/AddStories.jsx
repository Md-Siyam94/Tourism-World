import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../custom hooks/useAuth";


const AddStories = () => {
    const [images, setImages] = useState([])
    const {user} = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const story = {
            name: user?.displayName,
            email: user?.email,
            title: data.title,
            description: data.description,
            // TODO: post the img on imgbb
            image: data.image
        }
    };

    const handleMultipleImg =(e)=>{
       const selectedImages = (e.target.files);
       setImages(selectedImages)
    }
    console.log(images);
    return (
        <div>
            {/* TODO: Complete the route */}
            <div className="">
                <h1 className="text-2xl font-semibold mt-8 mb-2">Add Your Story</h1>
                {/* title */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title")} placeholder="Write title" className="input input-bordered w-[50%]" />
                        <div>
                            {errors.title?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Title is required !</p>}
                        </div>
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register("description")} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write description" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Title is required !</p>}
                        </div>
                    </label>
                    {/* image */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input onChange={handleMultipleImg} multiple  type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Title is required !</p>}
                        </div>
                    </label>

                    <div>
                        <button className="btn btn-info text-white mt-8">Post story</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStories;