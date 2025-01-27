
import { useLoaderData, useParams } from "react-router-dom";


const Profile = () => {

    const params = useParams()
    const guide = useLoaderData()

    // console.log(guide, params);
    return (
        <div className='max-w-6xl mx-auto pt-20'>
            <h1 className='text-3xl font-semibold text-yellow-600'>Guide Profile</h1>
            <div className=" py-10 ">
                <img className="h-32 w-32 rounded-full object-cover p-1 " src={guide?.userImage} alt="Profile Image" />
                <div className="flex items-start gap-9 ">
                    <div>
                        <h2 className="text-lg font-semibold mt-2 ">{guide?.name}</h2>
                        <p className="opacity-70">{guide?.email}</p>
                        <p className="opacity-70">Role : {guide?.role}</p>
                    </div>
                 
                </div>

            </div>
        </div>
    );
};

export default Profile;