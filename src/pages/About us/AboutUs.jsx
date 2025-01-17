import { Link } from "react-router-dom";
import DevImg from "../../assets/WhatsApp Image 2024-10-29 at 23.24.11_a5b649bc.jpg"


const AboutUs = () => {
    // TODO: customise this section
    return (
        <div className="max-w-7xl mx-auto border">
           
            <div className="lg:w-[70%] w-full border mx-auto my-6">
                <img
                className="h-40 w-40 mx-auto rounded-full p-1 border-2 border-warning object-cover"
                 src={DevImg} alt="Developer Image" />
                <div className="text-center">
                    <h3 className="text-lg font-semibold my-3">Md Siyam</h3>
                    <p className="text-start">Assalamu alaikum. <br />
                     I'm Siyam. </p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">total projects : 6</h3>
                   <button> <Link to={"/"}>projects link</Link></button>
                   <button> <Link to={"/"}>projects link</Link></button>
                   <button> <Link to={"/"}>projects link</Link></button>
                   <button> <Link to={"/"}>projects link</Link></button>
                   <button> <Link to={"/"}>projects link</Link></button>
                   <button> <Link to={"/"}>projects link</Link></button>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;