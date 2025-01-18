import { FaHome, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { MdOutlineAutoStories, MdOutlinePostAdd } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";


const Dashboard = () => {

    const isAdmin = false
    const isGuide = false

    return (
        <div>
            <div className="flex ">
                <div className="flex-1 px-14">
                    <Outlet></Outlet>
                </div>
                <div className="w-64 min-h-screen bg-teal-100 bg-opacity-60">
                    <ul className="menu">
                        {
                            isAdmin ? <>


                            </> : <>
                                {
                                    isGuide ? <>
                                        <li><Link to={"/dashboard/guide-profile"}><FaUser></FaUser> Manage Profile</Link></li>
                                        <li><Link> Tours</Link></li>
                                        <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl"/> Manage Stories</Link></li>
                                        <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                        <li><Link to={"/dashboard/join-tour-guide"}><RiUserAddLine className="text-xl" /> Join as Tour Guide</Link></li>
                                    </> : <>
                                                        <li><Link to={"/dashboard/tourist-profile"}><FaUser></FaUser> Manage Profile</Link></li>
                                                        <li><Link>My Assigned Tours</Link></li>
                                                        <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl"/> Manage Stories</Link></li>
                                                        <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                                        <li><Link to={"/dashboard/join-tour-guide"}><RiUserAddLine className="text-xl" /> Join as Tour Guide</Link></li>
                                                    </>
                                }
                            </>

                        }
                        <div className="divider"></div>
                        <li><Link to={"/"}><FaHome /> Back Home</Link></li>

                    </ul>
                </div>


            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );
};

export default Dashboard;