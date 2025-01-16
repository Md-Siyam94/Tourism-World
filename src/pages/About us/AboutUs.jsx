import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto border">
            <h1 className="text-3xl">About us</h1>
            <div>
                <img src="" alt="" />
                <div>
                    <h3>name</h3>
                    <p>about myself</p>
                </div>
                <div>
                    <h3>total projects : </h3>
                    <Link to={"/"}>projects link</Link>
                    <Link to={"/"}>projects link</Link>
                    <Link to={"/"}>projects link</Link>
                    <Link to={"/"}>projects link</Link>
                    <Link to={"/"}>projects link</Link>
                    <Link to={"/"}>projects link</Link>
                    <Link to={"/"}>projects link</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;