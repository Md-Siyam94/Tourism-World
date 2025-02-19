import { Link, useLocation } from "react-router-dom";
import StoryCard from "../../components/StoryCard";
import useStories from "../../custom hooks/useStories";


const Community = () => {
    const [stories, refetch] = useStories()
    const location = useLocation()
    return (
        <div className='max-w-6xl mx-auto pt-20'>
            <h1 className='text-5xl font-serif text-center'>Stories</h1>
            <p className="opacity-70 my-3 w-[95%] lg:w-[70%] mx-auto text-center">Every journey has a story, and every traveler has an experience worth sharing. At Tourism World, we bring together voices from across the globe—stories of adventure, discovery, and unforgettable moments.</p>
            <div>
                {
                    location.pathname === "/" ? <div >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  justify-center">
                        {
                            stories.slice(0,3).map(story => <StoryCard key={story._id} story={story}></StoryCard>)
                        }
                        </div>
                       <div className="flex justify-center my-8"><button  className="px-10 py-3 rounded-full border-2 border-[#1a73e8] text-[#1a73e8] font-semibold hover:bg-[#1a73e8] hover:text-white"><Link to={"/community"}>All Stories</Link></button></div>

                    </div> : <div className="grid grid-cols-1 justify-center">
                        {
                            stories.map(story => <StoryCard key={story._id} story={story}></StoryCard>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Community;