
import { useEffect, useState } from 'react';
import usePackages from '../../custom hooks/usePackages';
import axios from 'axios';
import PackageCard from '../../components/PackageCard';

const AllTrips = () => {
    // const [tourPackages]  = usePackages()
    // console.log(tourPackages);
    const [packages, setPackages] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_baseApi}/packages`)
    .then(res=>{
        // console.log(res.data);
        setPackages(res.data)
    })
    },[])
    return (
        <div className='max-w-6xl mx-auto '>
            <h1 className='text-3xl font-semibold text-yellow-600'>All Trips</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
                {
                    packages.map(tourPackage=> <PackageCard key={tourPackage._id} tourPackage={tourPackage}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default AllTrips;