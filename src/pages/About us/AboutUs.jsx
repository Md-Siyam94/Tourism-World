import { Link } from "react-router-dom";
import DevImg from "../../assets/WhatsApp Image 2024-10-29 at 23.24.11_a5b649bc.jpg"

const AboutUs = () => {
    return (
        <div className="max-w-7xl px-10 mx-auto pb-20  pt-14">

            <div className=" w-full border mx-auto my-6 pb-6 rounded-2xl">
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
                    <h3 className="font-semibold text-2xl my-4 underline ">total projects</h3>
                    <div className="flex flex-col">
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/Bistro-boss-restaurant-client"}>Bristo Boss Restaurant client</Link></button>
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/Bristo-boss-restaurant-server"}>Bristo Boss Restaurant server</Link></button>
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/Job-portal-"}>Job portal client</Link></button>
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/Job-portal-server"}>Job portal server</Link></button>
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/coffee-store-client"}>Coffee house client</Link></button>
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/Dragon-News-React"}>Dragon News</Link></button>
                        <button className="underline text-blue-500 hover:text-blue-600"> <Link to={"https://github.com/Md-Siyam94/Knowledge-Cafe"}>Knowledge cafe</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;