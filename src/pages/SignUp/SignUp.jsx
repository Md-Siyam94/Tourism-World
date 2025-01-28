import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiImageAdd } from 'react-icons/bi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../custom hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../shared/SocialLogin';
import useAxiosPublic from '../../custom hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SignupAnimation from '../../../public/sign up.json'
import Lottie from 'lottie-react';




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const SignUp = () => {
    const [showPass, setShowPass] = useState(false)
    const { signUpUser, updateUserProfile } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('')



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        // console.log(data)
        setUploading(true)
        const name = data.name;
        const imageFile = { image: data.photoURL[0] };
        // console.log(imageFile);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            setUploading(false)
            signUpUser(data.email, data.password)
                .then(() => {
                    // update user profile
                    updateUserProfile({ displayName: name, photoURL: res.data.data.display_url })
                        .then((result) => {
                            //  save user data in database
                            const userInfo = {
                                name: name,
                                email: data.email,
                                userImage: res.data.data.display_url,
                                role: "Tourist"
                            }
                            axiosPublic.post("/users", userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        navigate("/")
                                        Swal.fire({
                                            title: "Successfully login",
                                            icon: "success",
                                        });
                                    }
                                })
                        })
                        .catch(err => {
                            console.log("error from updating profile", err);

                        })
                })
                .catch(err => {
                    console.log("error from sign up", err);
                })
        }
        console.log(res.data);

    };
    return (
        <div className="hero bg-base-200 min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                <Lottie
                animationData={SignupAnimation}
                loop={true}
                autoPlay={true}
                style={{width: "70%", height: "800px", margin: "auto"}}

                >

                </Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center mt-3 font-bold">Sign up now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered" />
                            <div className='mt-2'>
                                {errors.name?.type === 'required' && <p role="alert" className='text-red-600'>Type your name in this field !</p>}
                            </div>
                        </div>
                        {/* Email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            <div className='mt-2'>
                                {errors.email?.type === 'required' && <p role="alert" className='text-red-600'>Type your email in this field !</p>}
                            </div>
                        </div>
                        {/* Image field */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Add profile picture <br /> <BiImageAdd className='text-4xl mt-1 border-l-4 ' /></span>
                            </div>
                            <input type="file" {...register("photoURL", { required: true })} className=" hidden file-input file-input-bordered w-full max-w-xs" />
                            <div className=''>
                                {errors.photoURL?.type === 'required' && <p role="alert" className='text-red-600'>Choose an image from you gallery !</p>}
                            </div>
                        </label>
                        {/* Password field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} {...register("password", { required: true, minLength: 6, })} placeholder="password" className="input input-bordered relative" />
                            <button onClick={() => setShowPass(!showPass)} className='absolute mt-12 pt-1 ml-72'>
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                            <div className='mt-2'>
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-600'>Give your password to login!</p>}
                            </div>
                            <div className='mt-2'>
                                {errors.password?.type === 'minLength' && <p role="alert" className='text-red-600'>Password must be 6 characters!</p>}
                            </div>
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-600 hover:bg-teal-700 text-white">
                                {
                                    uploading ? 'Login...' : 'Sign up'
                            }</button>
                        </div>
                        <div>
                            <p className='text-center mt-2'>Don't have any account ? <Link to={"/login"} className='text-blue-800 font-semibold'>Login</Link></p>
                        </div>
                        <div className="divider"></div>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;