import OverviewVideo from '../../assets/overview.mp4'

const Overview = () => {
    return (
        <div className="py-28 ">
            <h1 className="text-5xl text-emerald-600 text-center font-bold">Overview</h1>
            <div>
                <video src={OverviewVideo} className="h-[400px] w-full mt-20" autoPlay loop muted></video>
            </div>
        </div>
    );
};

export default Overview;