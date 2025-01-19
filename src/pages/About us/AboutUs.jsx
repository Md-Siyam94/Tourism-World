import { Link } from "react-router-dom";
import DevImg from "../../assets/WhatsApp Image 2024-10-29 at 23.24.11_a5b649bc.jpg"


const AboutUs = () => {
    // TODO: customise this section
    return (
        <div className="max-w-7xl mx-auto  pt-14">
           
            <div className="lg:w-[70%] w-full border mx-auto my-6 rounded-2xl">
                <div className="h-32  w-full bg-blue-100 rounded-tr-2xl rounded-tl-2xl">

                </div>
                <img
                className="h-40 w-40 -mt-24 mx-auto rounded-full  border-4 border-warning object-cover"
                 src={DevImg} alt="Developer Image" />
                <div className="text-center">
                    <h3 className="text-lg font-semibold my-3">Md Siyam</h3>
                    <p className="text-start  font-semibold px-5 mt-6 mb-3 "><span className="text-lg ">Assalamu alaikum.</span> <br />
                     I'm <span className="font-semibold">Siyam</span>. My home town is Barishal, Bangladesh. I have learn HTML, CSS, JavaScript, React js, Express js and Mongodb etc.   </p>
                </div>
                <div className="px-5">
                    <h3 className="font-semibold text-xl my-4">total projects : 6</h3>
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