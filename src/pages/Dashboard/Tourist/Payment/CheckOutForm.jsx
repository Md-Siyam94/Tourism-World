import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";
import useAuth from "../../../../custom hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";



const CheckOutForm = ({params}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError ] = useState("")
    const {user} = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const {data: booking= {}} = useQuery({
        queryKey: ["booking"],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/bookings-by-id/${params.id}`)
            return res.data
        }
    })

    const totalPrice = booking?.packagePrice;
    console.log(totalPrice);

useEffect( ()=>{
    if(totalPrice > 0){
        axiosPublic.post("/create-payment-intent", {price: totalPrice})
        .then(res=>{
            console.log(res.data?.clientSecret);
            setClientSecret(res.data?.clientSecret)
        })
    }
   
},[])

    const handleSubmit = async(event) => {
        event.preventDefault()


        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if(error){
            console.log("error from payment",error);
            setError(error.message)
        }
        else{
            console.log('payment method',paymentMethod);
            setError("")
        }

        // payment 
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymus",
                    name: user?.displayName || "anonymus",
                }
            }
        })
        if(confirmError){
            console.log("confirm error", confirmError);
        }
        else{
            console.log("successful payment", paymentIntent);
            if(paymentIntent?.status === "succeeded"){
                const payment = {
                    userName: user?.displayName,
                    userEmail: user?.email,
                   transacitonId: paymentIntent.id,
                    paymentDate: new Date(),
                    packagePrice: booking?.packagePrice,
                    packageId: booking?.packageId,
                    status: "success",
                }
                axiosPublic.post("/payments", payment)
                .then(res=>{
                    if(res.data?.insertedId){
                        axiosPublic.put(`/bookings/${booking?._id}`, {status: "in-review"})
                        .then(res=>{
                            if(res.data?.modifiedCount > 0){
                                navigate("/dashboard/my-bookings")
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Payment Successfull",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                            }
                        })
                    }
                })
                
               
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-info mt-8 text-white" type="submit" disabled={!stripe || !clientSecret}>
                    Pay 
                </button>
                <p className="mt-2 text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;