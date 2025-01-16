import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Packages from '../../components/Packages';

const TravelGuide = () => {
    return (
        <div className='pb-20 '>
            <div>
                <h1 className='text-5xl text-center my-2'>Tourism and Travel Guide</h1>
                <p className='w-[70%] text-center mx-auto my-4'>Tourism and travel have become integral aspects of modern life, providing people with opportunities to explore new cultures, unwind in beautiful destinations, and create lifelong memories.</p>
            </div>
            <div className='mt-16'>
            <Tabs>
                <TabList >
                    <Tab> Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <Packages></Packages>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default TravelGuide;