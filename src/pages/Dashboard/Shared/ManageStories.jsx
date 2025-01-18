import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../custom hooks/useAuth";
import useAxiosPublic from "../../../custom hooks/useAxiosPublic";
import useStories from "../../../custom hooks/useStories";


const ManageStories = () => {
    const [stories] = useStories()
    
    console.log(stories);
    return (
        <div>
            manage stories
        </div>
    );
};

export default ManageStories;