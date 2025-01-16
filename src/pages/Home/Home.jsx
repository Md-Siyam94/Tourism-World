import Hero from "./Hero";
import Overview from "./Overview";
import TravelGuide from "./TravelGuide";

const Home = () => {
    return (
        <div >
            
            <section className="min-h-screen">
                <Hero></Hero>
            </section>
            <section >
                <Overview></Overview>
            </section>
            <section className="max-w-6xl mx-auto">
                <TravelGuide></TravelGuide>
            </section>
        </div>
    );
};

export default Home;