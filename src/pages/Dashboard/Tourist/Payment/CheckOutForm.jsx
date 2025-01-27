import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useBookings from "../../../../custom hooks/useBookings";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";
import useAuth from "../../../../custom hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAssignes from "../../../../custom hooks/useAssignes";


const CheckOutForm = ({params}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError ] = useState("")
    const {user} = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxiosPublic()
    const [price, setPrice] = useState(400)
    const [myAssigns, refetch] = useAssignes()
    const assigned = myAssigns.map(myAssign=>   params.id === myAssign?._id)
    console.log(assigned);

//    const res = axiosPublic.get(`/bookings-by-id/${params.id}`)
//     setPrice(res.data?.packagePrice)
   

    // const {data: booking= {}} = useQuery({
    //     queryKey: ["booking"],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get(`/bookings-by-id/${params.id}`)
    //         return res.data
    //     }
    // })

    // const totalPrice = booking?.packagePrice;

useEffect( ()=>{
    axiosPublic.post("/create-payment-intent", {price: price})
    .then(res=>{
        console.log(res.data?.clientSecret);
        setClientSecret(res.data?.clientSecret)
    })
},[axiosPublic, price])

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
            if(paymentIntent?.status === " success"){
                // TODO: SAVE PAYMENT INFO AND SET STATUS IN-REVIEW
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
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