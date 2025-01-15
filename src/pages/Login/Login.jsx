import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../custom hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import SocialLogin from '../shared/SocialLogin';

const Login = () => {
    const { loginUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [showPass, setShowPass] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        loginUser(data.email, data.password)
            .then(result => {
                navigate(location?.pathname ? location?.pathname : "/")
            })
            .catch(err => {
                console.log("Error from login page", err)
            })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center mt-2">Login now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            <div className='mt-2'>
                                {errors.email?.type === 'required' && <p role="alert" className='text-red-600'>Please fill the email field!</p>}
                            </div>
                        </div>
                        {/* password field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} {...register("password", { required: true })} placeholder="password" className="input input-bordered relative" />
                            <button onClick={() => setShowPass(!showPass)} className='absolute mt-12 pt-1 ml-72'>
                                {
                                    showPass ? <FaEye /> : <FaEyeSlash />
                                }
                            </button>
                            <div className='mt-2'>
                                {errors.password?.type === 'required' && <p role="alert" className='text-red-600'>Give your password to login!</p>}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-600 hover:bg-teal-700 text-white">Login</button>
                        </div>
                        <div>
                            <p className='text-center mt-2'>Don't have any account ? <Link to={"/sign-up"} className='text-blue-800 font-semibold'>Sign up</Link></p>
                        </div>
                        <div className="divider"></div>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;