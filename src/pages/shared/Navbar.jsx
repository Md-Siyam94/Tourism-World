import { Link, NavLink } from "react-router-dom";
import useAuth from "../../custom hooks/useAuth";
import { SiStarship } from "react-icons/si";


const Navbar = () => {
    const { user, logOutUser } = useAuth()
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/community"}>Community</NavLink></li>
        <li><NavLink to={"/about-us"}>About Us</NavLink></li>
        <li><NavLink to={"/trips"}>Trips</NavLink></li>


    </>

    const handleLogOut = () => {
        logOutUser()
            .then(() => {

            })
            .catch(err => {
                console.log("error from log out", err);
            })
    }
    return (
        <div>
            <div className="navbar bg-info bg-opacity-20 px-16 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><SiStarship className="text-3xl text-red-400" /> TourismWorld</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex mr-3">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    {
                        user ? <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" > <img
                                className="h-10 w-10 rounded-full object-cover"
                                referrerPolicy="no-referrer"
                                src={user?.photoURL}
                                alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                                <div className="px-4 mb-4 opacity-70">
                                     {user?.displayName} <br />
                                    {user?.email}
                                </div>

                                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                                <li><button className="" onClick={handleLogOut}>Log Out</button></li>
                            </ul>
                        </div> : <div className="flex gap-2">
                            <button className="btn"> <Link to={"/login"}>Login </Link></button>
                            <button className="btn"> <Link to={"/sign-up"}>Sign up</Link></button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;