import { Link } from "react-router-dom";
import useBookings from "../../../../custom hooks/useBookings";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";


const MyBookings = () => {
    const [myBookings, refetch] = useBookings()
    const axiosPublic = useAxiosPublic()
    console.log(myBookings);



    // delete tour package
    const handleDeleteTour = (booking) => {
        // console.log(booking);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/bookings/${booking?._id}`)
                .then(res=>{
                    if(res.data?.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: `${booking?.packageName} has been deleted.`,
                            icon: "success"
                        });
                    }
                })   
            }
        });
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold mt-8 mb-4">My Bookings </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-warning">
                            <tr>
                                <th>#</th>
                                <th>Package Name</th>
                                <th>Guide</th>
                                <th>Tour Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Payment</th>
                                <th>Cancel Tour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBookings.map((booking, index) => <tr key={index} className="hover">
                                    <th className="opacity-70">{index + 1}</th>
                                    <td className="opacity-70 font-semibold">{booking?.packageName}</td>
                                    <td className="opacity-70">{booking?.guideName}</td>
                                    <td className="opacity-70">{booking?.bookingDate}</td>
                                    <td className="opacity-70">{booking?.packagePrice} $</td>
                                    <td className="opacity-70">{booking?.status}</td>
                                    <td>
                                        <button className="btn text-white btn-info" disabled={booking?.status === "in-review"}><Link to={`/dashboard/payment/${booking?._id}`}>Pay</Link></button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteTour(booking)} className="btn text-white btn-error" disabled={booking?.status !== "pending" && booking?.status !== "rejected" }>Cancel</button>
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

export default MyBookings;