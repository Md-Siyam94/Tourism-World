import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../custom hooks/useAxiosPublic';

const stripPomise = loadStripe(import.meta.env.VITE_payment_getway_pk)
const Payment = () => {
    const params = useParams()
    const axiosPublic = useAxiosPublic()
    // console.log(params);
    // const booking = useLoaderData()
    const {data: booking= {}} = useQuery({
        queryKey: ["booking"],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/bookings-by-id/${params.id}`)
            return res.data
        }
    })
    // console.log(booking);
    return (
        <div>
           <h1 className="text-2xl font-semibold mt-8 mb-4">Payment </h1>
           <div className='mt-20'>
            <Elements stripe={stripPomise}>
            <CheckOutForm booking={booking}></CheckOutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;