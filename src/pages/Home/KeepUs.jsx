import KeepusImage from "../../assets/about-collage.jpg"
import { motion } from "motion/react"
const KeepUs = () => {
    return (
        <div className="flex gap-16 py-20 items-center">
            <div className="flex-1">
                <img
                 className="h-96 w-full object-cover"
                 src={KeepusImage} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-6xl font-extralight text-info">Keep Us Were You Want To Go!</h1>
                <p className="mt-4 opacity-70">Planning your next adventure? Let us be your guide! Whether you're dreaming of serene beaches, bustling cities, or breathtaking mountains, we are here to help you explore the destinations that excite you the most. Save your favorite locations, track your travel plans, and receive personalized recommendations to make every trip unforgettable.</p>
                <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.8 }}
                className="btn mt-8 text-lg font-bold btn-warning">Book Now !</motion.button>
            </div>           
        </div>
    );
};

export default KeepUs;