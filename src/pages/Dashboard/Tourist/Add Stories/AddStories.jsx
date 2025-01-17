import { useState } from "react";
import { useForm } from "react-hook-form";


const AddStories = () => {
    const [images, setImages] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                <h1 className="text-lg font-semibold my-2">Add your story</h1>
                {/* title */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title")} placeholder="Write title" className="input input-bordered w-[50%]" />
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register("description")} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write description" ></textarea>
                    </label>
                    {/* image */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input onChange={handleMultipleImg} multiple  type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full max-w-xs" />
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