// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import HomePageIndustriesBG from "../../../Assets/Svg/HomePageIndustriesBG.svg"
// import SilderImage1 from "../../../Assets/Svg/SliderImage1.svg"
// import SilderImage2 from "../../../Assets/Svg/SliderImage2.svg"
// import SilderImage3 from "../../../Assets/Svg/SliderImage3.svg"
// import SilderImage4 from "../../../Assets/Svg/SliderImage4.svg"
// import { Navigation, EffectCoverflow, A11y, Autoplay} from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "./industrySlider.css"
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


// const HomepageIndustrySlider = () => {
//     return (
// <div className="homepage-industry" style={{ backgroundImage: `url(${HomePageIndustriesBG})`}}>
//     <div className="title-Product-setion">
//           <h1 className="homepage-industry-title">Industries</h1>
//         </div>
//         <div className="industry-slider">
//         <Swiper
//       // install Swiper modules
//       modules={[Navigation, A11y, Autoplay
//         ,EffectCoverflow]}
//       autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//       // effect={"coverflow"}
//       spaceBetween={30}
//       slidesPerView={4}
//       navigation
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage1})` }}>e-commerce</SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage2})` }}>Education & Learning </SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage3})` }}>Banking & Finance</SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage4})` }}>Manufacturing</SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage1})` }}>e-commerce</SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage2})` }}>Education & Learning </SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage3})` }}>Banking & Finance</SwiperSlide>
//       <SwiperSlide className="slider-images" style={{ backgroundImage: `url(${SilderImage4})` }}>Manufacturing</SwiperSlide>
//     </Swiper>
//     <div class="swiper-button-prev-unique"></div>
//     <div class="swiper-button-next-unique"></div>
//         </div>
//    </div>
//      );
//     };
// export default HomepageIndustrySlider;    


import React from "react";
import "../../../Styles/Styles.css";
import "./industrySlider.css";
import LeftPatch from "../../../Assets/Images/ads-left-patch.png"
import RightPatch from "../../../Assets/Images/ads-right-patch.png";
import Ecommerce from "../../../Assets/Images/e-commerce.png"
import Education from "../../../Assets/Images/Education-Learning.png"
import Manufacturing from "../../../Assets/Images/Manufacturing.png"
import Banking from "../../../Assets/Images/Banking-Finance.png"
import Retail from "../../../Assets/Images/retail.png";
import Sports from "../../../Assets/Images/sports.png";
import tours from "../../../Assets/Images/tours.png";
import Oil from "../../../Assets/Images/oil.png";
import manfacture from "../../../Assets/Images/manfacturing.png";
import Pharma from "../../../Assets/Images/pharma.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/swiper.min.css";


const HomepageIndustrySlider = () => {


    return (
        <div className="industry-banner-main">
            <div className="ads-patches">
                <img className="ads-left-patch" src={LeftPatch} alt=""></img>
                <img className="ads-right-patch" src={RightPatch} alt=""></img>

            </div>
            <div className="industry-slider">
                <div className="d-flex align-items-center justify-content-center py-3">
                    <h1 style={{ color: "white" }}>INDUSTRIES</h1>
                </div>
                <Swiper
                    // navigation={true}
                    slidesPerView={4}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        240: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            {/* <div className="industry-card"> <h4 className="industry-titles">ecommerce </h4> */}
                            <img
                                className="industry-images" src={Ecommerce} alt=""></img>
                            {/* </div> */}
                            {/* need to check */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={Education} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={Manufacturing} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={Banking} alt=""></img>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={Retail} alt=""></img>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={Sports} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={tours} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={Oil} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={ manfacture} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="industry-img-sliders-div">
                            <img className="industry-images" src={ Pharma} alt=""></img>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    );
};

export default HomepageIndustrySlider;

