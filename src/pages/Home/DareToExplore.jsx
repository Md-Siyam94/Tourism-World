import { Link } from 'react-router-dom';
import Image from '../../assets/man-covering-his-face-with-ukulele-guitar.jpg'

const DareToExplore = () => {
    return (
        <div className='lg:flex items-center my-20'>
            <div className='flex-1 pl-16 lg:h-[473px] h-[350px] flex flex-col justify-center bg-slate-700 text-white'>
                <h1 className="text-5xl font-serif ">Dare To Explore</h1>
                <p className='opacity-70 my-3 w-[90%]'>The world is vast, waiting to be discovered. Beyond the familiar streets and well-known landmarks lie hidden wonders, thrilling adventures, and cultures rich with history. Are you ready to step out of your comfort zone and embrace the unknown?</p>
                <Link to="https://www.dominiquedebaydmc.com/dare-to-explore-south-africa">
                <button  className="px-10 py-3 w-44 rounded-full border-2 border-[#1a73e8] text-[#1a73e8] font-semibold hover:bg-[#1a73e8] hover:text-white">See More</button>
                </Link>
            
            </div>
            <div className='flex-1'>
                <img className='lg:h-[473px]' src={Image} alt="" />
            </div>
        </div>
    );
};

export default DareToExplore;