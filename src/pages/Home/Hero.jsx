import { Swiper, SwiperSlide } from 'swiper/react';
import SliderImg1 from '../../assets/homepage-international.jpg'
import SliderImg2 from '../../assets/sliderImg2.jpeg'
import SliderImg3 from '../../assets/sliderImg3.jpeg'
import SliderImg4 from '../../assets/sliderImg4.jpeg'
import SliderImg5 from '../../assets/sliderImg5.jpeg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';



const Hero = () => {
    return (
        <div>
            <Swiper
                style={{ height: "full" }}
                cssMode={true}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                  }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination,Autoplay, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-screen object-cover"
                        style={{
                            backgroundImage: `url(${SliderImg1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Maldives Luxery Resorts</h1>
                                <p className="mb-5 px-10">
                                The Maldives is synonymous with luxury, offering some of the world's most breathtaking resorts that redefine indulgence and relaxation. Nestled in the heart of the Indian Ocean, these resorts provide an unparalleled escape, where pristine white sandy beaches, crystal-clear turquoise waters, and world-class hospitality come together to create the ultimate getaway.
                                </p>
                              
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen bg-object-cover"
                        style={{
                            backgroundImage: `url(${SliderImg2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Northwestern peninsula and panhandle of Florida</h1>
                                <p className="mb-5 px-10">
                                The northwestern region of Florida, encompassing the Panhandle and parts of the peninsula, is a hidden gem known for its stunning Gulf Coast beaches, charming coastal towns, and rich cultural heritage. This area offers a unique blend of Southern hospitality and coastal relaxation, making it an ideal destination for travelers seeking both adventure and tranquility.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${SliderImg3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">The Colosseum in Rome, Italy</h1>
                                <p className="mb-5 px-10">
                                The Colosseum, also known as the Flavian Amphitheatre, is one of the most iconic landmarks of ancient Rome and a masterpiece of Roman engineering. Located in the heart of Rome, Italy, this grand amphitheater was built between 70-80 AD under the rule of Emperor Vespasian and his successor, Titus.
                                </p>
                              
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${SliderImg4})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Kyoto, Japan. 
                                </h1>
                                <p className="mb-5 px-10">
                                Kyoto, the former imperial capital of Japan, is known for its rich history, traditional architecture, and numerous temples and shrines. 
                                </p>
                           
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${SliderImg5})`,
                        }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold">Mananggu Beach in Gorontalo, Indonesia.</h1>
                                <p className="mb-5 px-10">
                                Manangu Beach, located in Boalemo Regency, Gorontalo Province, Indonesia, is a serene coastal destination known for its soft white sands and tranquil ambiance. Visitors can enjoy peaceful walks along the shoreline, shaded by tall coconut trees that line the beach. The beach is particularly famous for its stunning sunsets, offering breathtaking views as the sun dips below the horizon.
                                </p>
                          
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Hero;