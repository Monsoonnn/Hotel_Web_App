import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide_1 from "../../assets/images/230523-2000-rewards_main.webp"
import Slide_2 from "../../assets/images/231128-2000-main-APSG.webp"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';
import { FaAngleRight } from "react-icons/fa6";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HomeSlider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                // autoplay={{
                //     delay: 10000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper">
                <SwiperSlide>
                    <img src={Slide_1}>
                    </img>
                    <div className='container bg-home-1'>
                        <div className='sliderContent'>
                            <div className='sliderTitle'>
                                Local Stitch Creator Town Seogyo
                            </div>
                            <div className='sliderDesc'>
                                STAY, WORK, PLAY, INSPIRED LIKE A LOCAL!
                            </div>
                            <div className='detail'>
                                Xem chi tiết
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide_2}>
                    </img>
                    <div className='container bg-home-1'>
                        <div className='sliderContent'>
                            <div className='sliderTitle'>
                                LOTTE HOTEL REWARDS
                            </div>
                            <div className='sliderDesc'>
                                Nâng tầm hành trình của quý khách với các quyền lợi của Chương trình tặng thưởng LOTTE HOTEL REWARDS!
                            </div>
                            <div className='detail'>
                                Xem chi tiết
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeSlider;