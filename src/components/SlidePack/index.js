
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Selection from "../Selection";

import Buasang from "../../assets/images/buasang.jpg";
import Spa from "../../assets/images/spa.jpg";
import Event from "../../assets/images/event.jpg";
import Family from "../../assets/images/family.jpg";
import Discovery from "../../assets/images/ld.jpg";

const SlidePack = () => {
    return (
        <>
            <Header></Header>

            <div className="hoteloffers">
                <div className="container">
                    <div className="row">
                        <div className="hoteloffers__title col-xxl-12">
                            Gói Nghỉ Dưỡng & Ưu Đãi Phòng
                            <div className="aa" >
                                Khám phá các khuyến mại phòng khách sạn đặc biệt chỉ có tại LOTTE HOTELS & RESORTS.
                            </div>
                        </div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            loop={true}
                            className="SlidePack"
                            pagination={{
                                clickable: true,
                            }}
                        >
                            <SwiperSlide>
                                <div className='Slider'>
                                    <img src={Buasang}>
                                    </img>
                                </div>
                                <div className="item__title">
                                    BED & BREAKFAST
                                </div>
                                <div className="item__desc">
                                    #Bữa ăn sáng
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='Slider'>
                                    <img src={Spa}>
                                    </img>
                                </div>
                                <div className="item__title">
                                    RELAXTION
                                </div>
                                <div className="item__desc">
                                    #Ăn uống #Spa
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='Slider'>
                                    <img src={Event}>
                                    </img>
                                </div>
                                <div className="item__title">
                                    EVENT & SEASON
                                </div>
                                <div className="item__desc">
                                    #Mùa lễ - Kì nghỉ #Tuần trăng mật
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='Slider'>
                                    <img src={Family}>
                                    </img>
                                </div>
                                <div className="item__title">
                                    FAMILY & KID
                                </div>
                                <div className="item__desc">
                                    #Trẻ em #Hoạt động
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='Slider'>
                                    <img src={Discovery}>
                                    </img>
                                </div>
                                <div className="item__title">
                                    LOCAL DISCOVERY
                                </div>
                                <div className="item__desc">
                                    #Hoạt động #Ô tô - Chuyến bay
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <Selection></Selection>
        </>

    )
}

export default SlidePack;