import JoinCommunity from "./JoinCommunity";
import KeepUs from "./KeepUs";
import Hero from "./Hero";
import Overview from "./Overview";
import TravelGuide from "./TravelGuide";
import ManageStories from "../Dashboard/Shared/ManageStories";
import Community from "../Community/Community";

const Home = () => {
    return (
        <div >
            
            <section className="min-h-screen">
                <Hero></Hero>
            </section>
            <section className="max-w-6xl mx-auto">
                <Overview></Overview>
            </section>
            <section className="max-w-6xl mx-auto">
                <TravelGuide></TravelGuide>
            </section>
            <section className="max-w-6xl mx-auto">
                <Community></Community>
            </section>
            <section className="max-w-6xl mx-auto">
                <KeepUs></KeepUs>
            </section>
            <section className="max-w-6xl mx-auto">
                <JoinCommunity></JoinCommunity>
            </section>
        </div>
    );
};

export default Home;