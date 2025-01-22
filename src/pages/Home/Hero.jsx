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
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
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
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
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
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
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
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
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
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
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