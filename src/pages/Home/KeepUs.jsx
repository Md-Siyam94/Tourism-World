import KeepusImage from "../../assets/about-collage.jpg"
import { motion } from "motion/react"
const KeepUs = () => {
    return (
        <div className="py-20 bg-slate-800 text-white px-10">
            <div className="md:flex w-[95%] mx-auto text-center lg:text-start gap-16  items-center">
            <div className="flex-1 ">
                <img
                 className="h-72  lg:h-96 w-full object-cover"
                 src={KeepusImage} alt="" />
            </div>
            <div className="flex-1 sm:mt-6">
                <h1 className="text-5xl font-serif ">Go Exotic Palces!</h1>
                <p className="my-4 opacity-70">Planning your next adventure? Let us be your guide! Whether you're dreaming of serene beaches, bustling cities, or breathtaking mountains, we are here to help you explore the destinations that excite you the most. Save your favorite locations, track your travel plans, and receive personalized recommendations to make every trip unforgettable.</p>
                <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.8 }}
                 className="px-10 py-3 rounded-full border-2 border-[#1a73e8] text-[#1a73e8] font-semibold hover:bg-[#1a73e8] hover:text-white">Book Now !</motion.button>
            </div>           
        </div>
        </div>
    );
};

export default KeepUs;