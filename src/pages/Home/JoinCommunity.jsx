import JoinCoummunityImg from "../../assets/join-our-community.jpg"
import { motion } from "motion/react"
const JoinCommunity = () => {
    return (
        <div className="flex gap-16 items-center py-20">
            <div>
                <h1 className="text-6xl font-extralight text-info">Want To Know More About Us ?</h1>
                <p className="my-4 opacity-70">Be a part of a vibrant travel community where adventure meets connection! Whether you're a seasoned traveler or just starting your journey, our community is the perfect place to share experiences, discover hidden gems, and connect with like-minded explorers from around the world.</p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    className="mt-10 btn font-bold text-lg btn-warning">Join Our Community</motion.button>
            </div>
            <div>
                <img src={JoinCoummunityImg} alt="" />
            </div>
        </div>
    );
};

export default JoinCommunity;