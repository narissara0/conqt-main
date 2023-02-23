import React from 'react';
import './location.css';
import Sing from '../../../Assets/Svg/SIN.svg';
import Aus from '../../../Assets/Svg/AUS.svg';
import US from '../../../Assets/Svg/US.svg';
import UK from '../../../Assets/Svg/UK.svg';
import India from '../../../Assets/Svg/india.svg';
import Thai from '../../../Assets/Svg/Thai.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/swiper.min.css";

const Location = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center'
                style={{ paddingTop: "40px", paddingBottom: "25px" }}>
                <h1>Location</h1>
            </div>
            <div className="container">
                <Swiper
                    // navigation={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        240: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img
                                className="" src={US} alt=""></img>
                            <h5 className='py-3'>USA</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="" src={UK} alt=""></img><h5 className='py-3'>UK</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="" src={Aus} alt=""></img><h5 className='py-3'>Australia</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="" src={Sing} alt=""></img><h5 className='py-3'>Singapore</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="" src={India} alt=""></img><h5 className='py-3'>India</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img className="" src={Thai} alt=""></img><h5 className='py-3'>Thailand</h5>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}

export default Location