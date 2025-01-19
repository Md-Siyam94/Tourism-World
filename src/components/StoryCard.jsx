import useAuth from "../custom hooks/useAuth";


const StoryCard = ({ story }) => {
    const {user} = useAuth()
    const { title, image, description, } = story || {}
    return (
        <div>
            <div className="card bg-base-100 w-[60%] mx-auto shadow-xl">
                <div className="flex gap-3 mb-8 items-center ml-6">
                    <img className="h-10 w-10 rounded-full object-cover" src={user?.photoURL} alt="" />
                    <div className="">
                        <h2 className="font-semibold">{user?.displayName}</h2>
                        {/* TODO: give here the created time */}
                        <h3 className="opacity-60">posted time</h3>
                    </div>
                </div>
                <figure>
                    <img
                        className="h-64 w-full"
                        src={image}
                        alt="Story image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;