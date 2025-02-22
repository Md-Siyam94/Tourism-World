import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../custom hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../custom hooks/useAuth";
import useAssignes from "../../../custom hooks/useAssignes";



const MyAssignedTours = () => {  
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const [myAssigns, refetch] = useAssignes()
    
// accept tour package
const handleAcceptTour=(booking)=>{
    console.log(booking);
    axiosPublic.put(`/bookings/${booking?._id}`, {status: "accepted"})
    .then(res=>{
        if(res.data?.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${booking?.packageName} has been accepted.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })  

}


    // delete tour package
    const handleRejectTour = (booking) => {
        // console.log(booking);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Reject"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.put(`/bookings/${booking?._id}`, {status: "rejected"})
                .then(res=>{
                    if(res.data?.modifiedCount > 0){
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${booking?.packageName} has been rejected.`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })   
            }
        });
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold mt-8 mb-4">My Assigned Bookings </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-warning">
                            <tr>
                                <th>#</th>
                                <th>Package Name</th>
                                <th>Booker Name</th>
                                <th>Tour Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Accept Tour</th>
                                <th>Cancel Tour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAssigns.map((booking, index) => <tr key={index} className="hover">
                                    <th className="opacity-70">{index + 1}</th>
                                    <td className="opacity-70 font-semibold">{booking?.packageName}</td>
                                    <td className="opacity-70">{booking?.bookerName}</td>
                                    <td className="opacity-70">{booking?.bookingDate}</td>
                                    <td className="opacity-70">{booking?.packagePrice} $</td>
                                    <td className="opacity-70">{booking?.status}</td>
                                    <td>
                                        <button onClick={()=> handleAcceptTour(booking)} className="btn text-white btn-success" disabled={booking?.status !== "in-review"}>Accept</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleRejectTour(booking)} className="btn text-white btn-error" disabled={booking?.status === "accepted"}>Reject</button>
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAssignedTours;