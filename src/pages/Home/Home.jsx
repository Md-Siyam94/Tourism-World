import JoinCommunity from "./JoinCommunity";
import KeepUs from "./KeepUs";
import Hero from "./Hero";
import Overview from "./Overview";
import TravelGuide from "./TravelGuide";
import ManageStories from "../Dashboard/Shared/ManageStories";
import Community from "../Community/Community";
import DareToExplore from "./DareToExplore";
import Latest from "./Latest";

const Home = () => {
    return (
        <div >
            
            <section className="">
                <Hero></Hero>
            </section>
            <section className="max-w-6xl mx-auto">
                <Overview></Overview>
            </section>
            <section className="max-w-6xl mx-auto">
                <TravelGuide></TravelGuide>
            </section>
            <section className="max-w-screen-2xl mx-auto ">
                <KeepUs></KeepUs>
            </section>
            <section className="max-w-6xl mx-auto">
                <Community></Community>
            </section>
            <section className="max-w-6xl mx-auto">
                <JoinCommunity></JoinCommunity>
            </section>
            <section className="max-w-screen-2xl mx-auto ">
                <DareToExplore></DareToExplore>
            </section>
            <section className="max-w-screen-2xl mx-auto ">
                <Latest></Latest>
            </section>
        </div>
    );
};

export default Home;