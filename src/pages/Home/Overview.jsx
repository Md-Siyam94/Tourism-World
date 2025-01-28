import OverviewVideo from '../../assets/overview.mp4'

const Overview = () => {
    return (
        <div className="py-20 md:flex  gap-16 items-center ">
            <div className='md:flex-1 w-[95%] text-center lg:text-start mx-auto'>
                <h1 className="text-6xl font-bold text-info">Overview</h1>
                <p className='mt-4 opacity-70'>From discovering top destinations to managing your itinerary and finding the best local experiences, our platform offers personalized recommendations tailored just for you. With user-friendly tools and expert insights, planning your next trip has never been easier.</p>
            </div>
            <div className='md:flex-1'>
                <video src={OverviewVideo} className="h-[400px] w-full mt-20" autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Overview;