import { FaHome, FaUser } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { MdOutlineAutoStories, MdOutlinePostAdd } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import useAdmin from "../custom hooks/useAdmin";
import useIsGuide from "../custom hooks/useIsGuide";
import { SiStarship } from "react-icons/si";


const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isGuide] = useIsGuide()

    return (
        <div>
            <div className="flex ">
                
                <div className="w-64 p-4 overflow-y-auto min-h-screen  bg-teal-100 bg-opacity-60">
                    <Link to="/" className="flex gap-2 text-xl font-semibold mb-4"><SiStarship className="text-3xl  text-red-400" /> TourismWorld</Link>
                    <ul className="menu">
                        {
                            isAdmin ? <>
                                <li><Link to={"/dashboard"}><FaUser></FaUser> Manage Profile</Link></li>
                                <li><Link to={"/dashboard/add-package"}><MdOutlineAutoStories className="text-xl" /> Add Package</Link></li>
                                <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl" /> Manage Stories</Link></li>
                                <li><Link to={"/dashboard/all-users"}><MdOutlinePostAdd className="text-xl" />Manage Users</Link></li>
                                <li><Link to={"/dashboard/manage-candidates"}><RiUserAddLine className="text-xl" /> Manage Candidates
                                </Link></li>
                            </> : <>
                                {
                                    isGuide ? <>
                                        <li><Link to={"/dashboard"}><FaUser></FaUser> Manage Profile</Link></li>
                                        <li><Link to={"/dashboard/my-assigned-tours"}><FaBookBookmark className="text-md"></FaBookBookmark> My Assigned Tours</Link></li>
                                        <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-xl" />Add Stories</Link></li>
                                        <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl" /> Manage Stories</Link></li>

                                    </> : <>
                                        <li><Link to={"/dashboard"}><FaUser/> Manage Profile</Link></li>
                                        <li><Link to={"/dashboard/my-bookings"}><FaBookBookmark className="text-md"/> My Bookings</Link></li>
                                        <li><Link to={"/dashboard/add-stories"}><MdOutlinePostAdd className="text-lg" />Add Stories</Link></li>
                                        <li><Link to={"/dashboard/manage-stories"}><MdOutlineAutoStories className="text-xl" /> Manage Stories</Link></li>
                                        <li><Link to={"/dashboard/join-tour-guide"}><RiUserAddLine className="text-lg" /> Join as Tour Guide</Link></li>
                                    </>
                                }
                            </>

                        }
                        <div className="divider"></div>
                        <li><Link to={"/"}><FaHome className="text-lg" /> Back Home</Link></li>

                    </ul>
                </div>
                <div className="flex-1 px-14">
                    <Outlet></Outlet>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>

    );
};

export default Dashboard;