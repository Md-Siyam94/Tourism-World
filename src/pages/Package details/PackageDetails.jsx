import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import useGuide from "../../custom hooks/useGuide";
import useAuth from "../../custom hooks/useAuth";
// import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../custom hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const PackageDetails = () => {
    const tourPackages = useLoaderData()
    const [guides, refetch] = useGuide()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [error, setError] = useState("")
    // const [guideName, setGuideName] = useState("")
    const { photo, tripTitle, price, tourType, destinations, _id } = tourPackages || {}


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        // console.log(data);
        if (data.guideEmail === "Select Guide") {
            return setError("Please select a tour guide !")
        }
        axiosPublic.get(`/users/${data?.guideEmail}`)
            .then(res => {
                //   console.log(res.data?.name)
                setError("")
                const bookingInfo = {
                    bookerName: user?.displayName,
                    bookerEmail: user?.email,
                    bookerImage: user?.photoURL,
                    packageName: tripTitle,
                    packagePrice: price,
                    packageId: _id,
                    bookingDate: data.bookingTime,
                    guideEmail: data.guideEmail,
                    guideName: res.data?.name,
                    status: "pending"
                }
                axiosPublic.post("/bookings", bookingInfo)
                    .then(res => {
                        if (res.data?.insertedId) {
                            reset()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    })
                    .catch(err => {
                        console.log(err);
                    })
            })


    }
    return (
        <div className="max-w-7xl mx-auto pt-28 pb-28">

            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        className="h-[450px]"
                        src={photo}
                        alt="Tour place image" />
                </figure>
                <div className="card-body px-20">
                    <h2 className="card-title">
                        {tripTitle}
                        <div className="badge badge-warning">{tourType}</div>
                    </h2>
                    <p className="opacity-70">Price : {price} $</p>
                    <div className="my-4">
                        <h2 className="text-xl font-semibold">Tour plan</h2>
                        <div className="mt-2">

                            {
                                destinations.map((destination, index) => <div key={index} className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">Day {index + 1}</div>
                                    <div className="collapse-content">
                                        <p>{destination}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="my-4">
                        <h2 className="text-xl font-semibold">Guide List :</h2>
                        <div>
                            {
                                guides.map((guide, index) => <button className="py-2 px-5 border my-2 ml-10" key={index}><Link to={``}>{guide?.name}</Link></button>)
                            }
                        </div>
                    </div>
                    <div className="my-4">
                        <h2 className="text-2xl font-semibold underline text-info">Booking Now </h2>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                {/* name */}
                                <label className="form-control w-full max-w-md my-2">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input type="text" readOnly defaultValue={user?.displayName} placeholder="Write your name" className="input input-bordered w-full max-w-md" />
                                </label>
                                {/* email */}
                                <label className="form-control w-full max-w-md my-2">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input type="email" readOnly defaultValue={user?.email} placeholder="Write your email" className="input input-bordered w-full max-w-md" />
                                </label>
                                {/* image */}
                                <img className="my-4" src={user?.photoURL} alt="Preview" width="100" />
                                {/* price */}
                                <label className="form-control w-full max-w-md my-2">
                                    <div className="label">
                                        <span className="label-text">Price</span>
                                    </div>
                                    <input type="number" readOnly defaultValue={price} placeholder="Price" className="input input-bordered w-full max-w-md" />
                                </label>
                                {/* date */}
                                <label className="form-control w-full max-w-xs my-2">
                                    <div className="label">
                                        <span className="label-text">Select Tour Date<span className="text-red-600">*</span></span>
                                    </div>
                                    <input type="date" {...register("bookingTime", { required: true })} className="input input-bordered w-full max-w-md" />
                                    <div className='mt-2'>
                                        {errors.bookingTime?.type === 'required' && <p role="alert" className='text-red-600'>Please select a date!</p>}
                                    </div>
                                </label>
                                {/* select guide */}
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Select a Guide for your tour<span className="text-red-600">*</span></span>
                                    </div>
                                    <select {...register("guideEmail", { required: true })} defaultValue={"Select Guide"} className="select select-bordered">
                                        <option disabled >Select Guide</option>
                                        {
                                            guides.map((guide, index) => <option value={guide?.email} key={index}>{guide?.name}</option>)
                                        }
                                    </select>
                                    <div className='mt-2'>
                                        <p className='text-red-600'>{error}</p>
                                    </div>
                                </label>
                                <div className="card-actions justify-end">

                                    <button className="btn btn-info">Book Now</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageDetails;