import { useForm } from "react-hook-form";

const AddPackage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="mb-20">
            <h1 className="text-2xl font-semibold mt-8 mb-2">Add package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* price title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tripe title</span>
                    </label>
                    <input type="text" {...register("tripTitle")} placeholder="Write tripe title" className="input input-bordered w-[50%]" />
                    <div>
                        {errors.tripTitle?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                    </div>
                </div>
                {/* Tour type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tour type</span>
                    </label>
                    <input type="text" {...register("tourType")} placeholder="Write tour type" className="input input-bordered w-[50%]" />
                    <div>
                        {errors.tourType?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                    </div>
                </div>
                {/* price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register("price")} placeholder="Write package price" className="input input-bordered w-[50%]" />
                    <div>
                        {errors.price?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This filed is required !</p>}
                    </div>
                </div>
                {/* description */}
                <label className="form-control my-2">
                    <div className="label">
                        <span className="label-text">Destination</span>
                    </div>
                    <textarea {...register("destinations")} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write destinations" ></textarea>
                    <div>
                        {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                    </div>
                </label>
                {/* image */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Add image</span>
                    </div>
                    <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    <div>
                        {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                    </div>
                </label>

                <div>
                    <button className="btn btn-info text-white mt-8">Post story</button>
                </div>
            </form>
        </div>
    );
};

export default AddPackage;