import { Link } from "react-router-dom";
import JoinCoummunityImg from "../../assets/join-our-community.jpg"
import { motion } from "motion/react"
const JoinCommunity = () => {
    return (
        <div className="lg:flex gap-16 items-center pt-20 w-[95%] mx-auto">
            <div className=" text-center lg:text-start">
                <h1 className="text-3xl  lg:text-5xl font-serif">Want To Know More About Us ?</h1>
                <p className="my-4 opacity-70">Be a part of a vibrant travel community where adventure meets connection! Whether you're a seasoned traveler or just starting your journey, our community is the perfect place to share experiences, discover hidden gems, and connect with like-minded explorers from around the world.</p>
                <Link to="https://www.linkedin.com/in/md-siyam-d942404/">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                    className="px-10 py-3 rounded-full border-2 border-[#1a73e8] text-[#1a73e8] font-semibold hover:bg-[#1a73e8] hover:text-white">Join Our Community</motion.button></Link>
               
            </div>
            <div>
                <img className="w-96 lg:w-full mx-auto" src={JoinCoummunityImg} alt="" />
            </div>
        </div>
    );
};

export default JoinCommunity;