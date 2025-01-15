import { Link, NavLink } from "react-router-dom";
import useAuth from "../../custom hooks/useAuth";


const Navbar = () => {
    const {name} = useAuth()
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/community"}>Community</NavLink></li>
        <li><NavLink to={"/about-us"}>About Us</NavLink></li>
        <li><NavLink to={"/trips"}>Trips</NavLink></li>

       
    </>

    const handleLogOut =()=>{
        // TODO: log out the user
    }
    return (
        <div>
            <div className="navbar bg-base-100 px-16">
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
                    <a className="btn btn-ghost text-xl">TourismWorld</a>
                </div>
                
                <div className="navbar-end">
                <div className="navbar-center hidden lg:flex mr-3">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
               <div>
                {
                    name
                }
               </div>
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="">Click</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><button >
                                {/* TODO: user email */}
                                Email
                                </button></li>
                            <li><button>
                                {/* TODO: user name */}
                                Name
                                </button></li>            
                            <li><Link>Dashboard</Link></li>
                            <li><button onClick={handleLogOut}>Log Out</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;