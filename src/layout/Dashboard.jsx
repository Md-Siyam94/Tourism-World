import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {


    const isTourist = true
    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-yellow-700 bg-opacity-60">
                <ul className="menu">
                    {
                        isTourist && <>
                            <li><Link to={"/dashboard/tourist-profile"}>Profile</Link></li>
                            <li><Link>My Assigned Tours</Link></li>
                            <li><Link>Add  Stories</Link></li>
                            <li><Link>Manage Stories</Link></li>

                        </>
                    }

                </ul>
            </div>
            <div className="flex-1 px-14">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;