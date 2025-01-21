import { FaHome, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { MdOutlineAutoStories, MdOutlinePostAdd } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";


const Dashboard = () => {

    const isAdmin = true
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
                                <li><Link to={"/dashboard/admin-profile"}><FaUser></FaUser> Manage Profile</Link></li>
                                <li><Link to={"/dashboard/add-package"}><MdOutlineAutoStories className="text-xl" /> Add Package</Link></li>
                                <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                <li><Link to={"/dashboard/manage-users"}><MdOutlinePostAdd className="text-xl" />Manage Users</Link></li>
                                <li><Link to={"/dashboard/manage-candidates"}><RiUserAddLine className="text-xl" /> Manage Candidates
                                </Link></li>
                                <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl" /> Manage Stories</Link></li>
                            </> : <>
                                {
                                    isGuide ? <>
                                        <li><Link to={"/dashboard/guide-profile"}><FaUser></FaUser> Manage Profile</Link></li>
                                        <li><Link>My Assigned Tours</Link></li>
                                        <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                        <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl" /> Manage Stories</Link></li>
                                       
                                    </> : <>
                                        <li><Link to={"/dashboard/tourist-profile"}><FaUser></FaUser> Manage Profile</Link></li>
                                        <li><Link>My Assigned Tours</Link></li>
                                        <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl" /> Manage Stories</Link></li>
                                        <li><Link to={"/dashboard/join-tour-guide"}><RiUserAddLine className="text-xl" /> Join as Tour Guide</Link></li>
                                        <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                    </>
                                }
                            </>

                        }
                        <div className="divider"></div>
                        <li><Link to={"/"}><FaHome className="text-lg"/> Back Home</Link></li>

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