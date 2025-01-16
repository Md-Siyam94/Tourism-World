import { Swiper, SwiperSlide } from 'swiper/react';
import SliderImg1 from '../../assets/homepage-international.jpg'

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
                        className="hero min-h-screen"
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
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
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
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
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
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
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
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="hero min-h-screen"
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
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Hero;