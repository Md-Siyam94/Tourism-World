import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../custom hooks/useAuth';
import useAxiosPublic from '../../../../custom hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const JoinAsGuide = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: loginUser = {} } =  useQuery({
        queryKey: ["loginUser", user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        }
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const applicationInfo = {
            name: user?.displayName,
            email: user?.email,
            candidateImage: user?.photoURL,
            role: loginUser?.role,
            userId: loginUser?._id,
            title: data.title,
            description: data.description,
            cvLink: data.cvLink
        }

        axiosPublic.post("/joinAsGuide", applicationInfo)
            .then(res => {
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        title: "The application is successfull !",
                        icon: "success",

                    });
                }
            })
    };
    return (
        <div>
            
            <div className="pb-20">
                <h1 className="text-2xl font-semibold mt-8 mb-2">Join as Tour Guide</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} placeholder="Application title" className="input input-bordered w-[50%]" />
                        <div>
                            {errors.title?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Title is required !</p>}
                        </div>
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write why wants to be a Tour Guide" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Description is required !</p>}
                        </div>
                    </label>
                    {/* cv link */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">CV link</span>
                        </label>
                        <input type="url" {...register("cvLink", { required: true })} placeholder="CV link" className="input input-bordered w-[50%]" />
                        <div>
                            {errors.cvLink?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>CV link is required !</p>}
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-info text-white mt-8">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JoinAsGuide;