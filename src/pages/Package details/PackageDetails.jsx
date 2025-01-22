import { useLoaderData } from "react-router-dom";


const PackageDetails = () => {
    const tourPackages = useLoaderData()
    const { photo, tripTitle, price, tourType, destinations  } = tourPackages || {}
   console.log(tourPackages);
    return (
        <div className="max-w-7xl mx-auto pt-28 pb-28">

            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                    className="h-[450px]"
                        src={photo}
                        alt="Tour place image" />
                </figure>
                <div className="card-body px-20">
                    <h2 className="card-title">
                        {tripTitle}
                        <div className="badge badge-warning">{tourType}</div>
                    </h2>
                    <p className="opacity-70">Price : {price} $</p>
                    <div className="my-4">
                        <h2 className="text-xl font-semibold">Tour plan</h2>
                        {/* <div>
                           
                            {
                                destinations.slice().map((destination, index) => <div key={index} className="collapse bg-base-200">
                                    <input type="checkbox" />
                                    <div className="collapse-title text-xl font-medium">Day {index}</div>
                                    <div className="collapse-content">
                                        <p>{destination}</p>
                                    </div>
                                </div>)
                            }
                        </div> */}
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetails;