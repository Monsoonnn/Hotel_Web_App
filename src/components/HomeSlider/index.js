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
import { Link } from 'react-router-dom';
const HomeSlider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }}
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
                                Khách sạn hàng đầu Việt Nam
                            </div>
                            <div className='sliderDesc'>
                                Cung cấp trải nghiệm khách sạn 5 sao kết hợp công nghệ đem lại trải nghiệm mới nhất
                            </div>
                            <Link to="/">
                                <div className='detail' style={{
                                    color:" #fff"
                                }}>
                                  Chi tiết về chúng tôi <FaAngleRight/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide_2}>
                    </img>
                    <div className='container bg-home-1'>
                        <div className='sliderContent'>
                            <div className='sliderTitle'>
                                Ưu đãi thành viên đặc biệt
                            </div>
                            <div className='sliderDesc'>
                                Chương trình tặng thưởng HOTEL REWARDS cho 1000 tài khoản đăng ký hội viên mới nhất từ ngày 10/5/2024
                            </div>
                            <Link to="member/sign-up">
                                <div className='detail' style={{
                                    color:" #fff"
                                }}>
                                    Đăng ký thành viên để hưởng thụ những quyền lợi tốt nhất <FaAngleRight/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeSlider;