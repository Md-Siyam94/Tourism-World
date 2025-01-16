import { useLoaderData } from "react-router-dom";


const PackageDetails = () => {
    const tourPackage = useLoaderData()
    console.log(tourPackage);
    return (
        <div>
           <h1 className="text-5xl"> package details</h1>
        </div>
    );
};

export default PackageDetails;