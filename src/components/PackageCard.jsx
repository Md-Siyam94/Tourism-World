import { Link } from "react-router-dom";


const PackageCard = ({ tourPackage }) => {
    const { photo, tourType, tripTitle, price, _id } = tourPackage || {}
    // console.log(tripTitle);
    return (
        <div className="grid">
            <div className="card bg-base-100 shadow-xl ">
                <figure>
                    <img
                    className="h-48 w-full  object-cover"
                        src={photo}
                        alt="Tour spot" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title  items-start">
                    {tripTitle}
                        <div className="badge badge-warning"> {tourType}</div>
                    </h2>
                    <p>Price: {price} $</p>
                    <div className="card-actions justify-end">

                        <div className="btn btn-info"><Link to={`/package-details/${_id}`}>View details</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;