import axios from "axios";
import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";



const Packages = () => {
    const [packages, setPackages] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_baseApi}/packages`)
    .then(res=>{
        // console.log(res.data);
        setPackages(res.data)
    })
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                packages.splice(0,3).map(tourPackage=> <PackageCard key={tourPackage._id } tourPackage={tourPackage}></PackageCard>)
            }
        </div>
    );
};

export default Packages;