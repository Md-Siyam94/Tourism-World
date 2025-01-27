import { Link } from "react-router-dom";
import useGuide from "../custom hooks/useGuide";


const GuideProfile = () => {
    const [guides] = useGuide()
    return (
        <div>
            <div className=" md:flex gap-8 "> 
            {
                guides.map((guide, index)=> <div key={index} className=" ">
                    
                    <img className="h-24 w-24 object-cover rounded-full border-2 border-warning" src={guide?.userImage} alt="" />
                    <h1 className="text-lg font-semibold mt-2 ">{guide?.name}</h1>
                    <button className="btn btn-sm btn-info my-2"><Link to={`/guideProfile/${guide?._id}`}>Details</Link></button>
                </div>)
            }
            </div>
        </div>
    );
};

export default GuideProfile;