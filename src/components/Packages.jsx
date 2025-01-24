import axios from "axios";
import { useEffect, useState } from "react";
import PackageCard from "./PackageCard";
import usePackages from "../custom hooks/usePackages";



const Packages = () => {
    const [tourPackages ] = usePackages()

   
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                tourPackages.slice(0,3).map(tourPackage=> <PackageCard key={tourPackage._id } tourPackage={tourPackage}></PackageCard>)
            }
        </div>
    );
};

export default Packages;