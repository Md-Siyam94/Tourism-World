import StoryCard from "../../components/StoryCard";
import useStories from "../../custom hooks/useStories";


const Community = () => {
    const [stories, refetch] = useStories()
    return (
        <div className='max-w-6xl mx-auto pt-20'>
        <h1 className='text-3xl font-semibold text-yellow-600'>All Trips</h1>
        <div  className="grid grid-cols-1 justify-center">
            {
                stories.map(story=> <StoryCard key={story._id} story={story}></StoryCard>)
            }
        </div>
    </div>
    );
};

export default Community;