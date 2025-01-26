import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useBookings from "../../../../custom hooks/useBookings";
import useAxiosPublic from "../../../../custom hooks/useAxiosPublic";
import useAuth from "../../../../custom hooks/useAuth";
import Swal from "sweetalert2";


const CheckOutForm = ({booking}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError ] = useState("")
    const [myBookings] = useBookings()
    const {user} = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxiosPublic()

useEffect(()=>{
    axiosPublic.post("/create-payment-intent", {price:`${ booking?.packagePrice}`})
    .then(res=>{
        console.log(res.data?.clientSecret);
        setClientSecret(res.data?.clientSecret)
    })
},[axiosPublic, booking?.packagePrice])
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
                    Pay {booking?.packagePrice} $
                </button>
                <p className="mt-2 text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;