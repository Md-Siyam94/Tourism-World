
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../custom hooks/useAuth";
import useAxiosPublic from "../../../custom hooks/useAxiosPublic";
import useStories from "../../../custom hooks/useStories";
import StoryCard from "../../../components/StoryCard";


const ManageStories = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();

    const {data: stories = [], refetch} = useQuery({
        queryKey: ["stories", user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/stories/${user?.email}`);
            return res.data;
        },
        
        
    })
    
    console.log(stories);
    return (
        <div>
            <h1 className="text-2xl m-6">Your added stories</h1>
            <div>
                {
                    stories.length === 0 ? <div className="text-2xl text-red-600 font-semibold flex justify-center my-44">You didn't post any story</div> :  <div className="grid grid-cols-1 justify-center">
                    {
                        stories.map(story=> <StoryCard key={story._id} story={story}></StoryCard>)
                    }
                </div>
                }
            </div>
           
        </div>
    );
};

export default ManageStories;