import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../custom hooks/useAuth';
import useAxiosPublic from '../../../../custom hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const JoinAsGuide = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const applicationInfo = {
            name: user?.displayName,
            email: user?.email,
            title: data.title,
            description: data.description,
            cvLink: data.cvLink
        }
      
         axiosPublic.post("/joinAsGuide", applicationInfo)
         .then(res=>{
            if(res.data.insertedId){
                
            }
         })
                
                     
               
    };
    return (
        <div>
            {/* TODO: Complete the route */}
            <div className="pb-20">
                <h1 className="text-lg font-semibold mt-8 mb-2">Join as tour guide</h1>   
                <form onSubmit={handleSubmit(onSubmit)}>
                     {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title")} placeholder="Application title" className="input input-bordered w-[50%]" />
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea {...register("description")} className="textarea textarea-bordered h-24 w-[50%]" placeholder="Write why wants to be a Tour Guide" ></textarea>
                    </label>
                    {/* cv link */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">CV link</span>
                        </label>
                        <input type="url" {...register("cvLink")} placeholder="CV link" className="input input-bordered w-[50%]" />
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