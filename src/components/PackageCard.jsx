import { Link } from "react-router-dom";
import { motion } from "motion/react"

const PackageCard = ({ tourPackage }) => {
    const { photo, tourType, tripTitle, price, _id } = tourPackage || {}
    // console.log(tripTitle);
    return (
        <motion.div
        whileHover={{ scale: 1.04 }}
        // whileTap={{ scale: 0.8 }}
       
        className="grid">
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
        </motion.div>
    );
};

export default PackageCard;