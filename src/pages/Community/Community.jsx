import { Link, useLocation } from "react-router-dom";
import StoryCard from "../../components/StoryCard";
import useStories from "../../custom hooks/useStories";


const Community = () => {
    const [stories, refetch] = useStories()
    const location = useLocation()
    return (
        <div className='max-w-6xl mx-auto pt-20'>
            <h1 className='text-3xl font-semibold text-yellow-600'>Stories</h1>
            <div>
                {
                    location.pathname === "/" ? <div >
                        <div className="grid grid-cols-1 justify-center">
                        {
                            stories.slice(0,4).map(story => <StoryCard key={story._id} story={story}></StoryCard>)
                        }
                        </div>
                       <div className="flex justify-center mt-8"><button className="btn btn-info"><Link to={"/community"}>All Stories</Link></button></div>

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