
import { useEffect, useState } from 'react';
import usePackages from '../../custom hooks/usePackages';
import axios from 'axios';
import PackageCard from '../../components/PackageCard';

const AllTrips = () => {
    // const [tourPackages]  = usePackages()
    // console.log(tourPackages);
    const [packages, setPackages] = useState([])
    const [sort, setSort] = useState(false)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_baseApi}/packages?sort=${sort}`)
            .then(res => {
                // console.log(res.data);
                setPackages(res.data)
            })
    }, [sort])
    return (
        <div className='max-w-7xl px-10 mx-auto pt-28'>
            <div className='flex justify-between items-center'>
                <h1 className='text-5xl  font-serif'>All Trips</h1>
                <button onClick={()=>setSort(!sort)} className="px-10 py-3 rounded-lg border-2 border-[#1a73e8] text-[#1a73e8] font-semibold hover:bg-[#1a73e8] hover:text-white">
                    {
                        sort ? "Sorted by Price" : "Sort by Price"
                    }
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
                {
                    packages.map(tourPackage => <PackageCard key={tourPackage._id} tourPackage={tourPackage}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default AllTrips;