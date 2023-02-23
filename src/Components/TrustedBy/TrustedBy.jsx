import React from "react";
import "../../Styles/Styles.css";
import "./TrustedBy.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import Msc from "../../Assets/Images/MSC.png";
import Ptt from "../../Assets/Images/PTT.png";
import Scg from "../../Assets/Images/Scg.png";
import Seeq from "../../Assets/Images/Seeq.png";
import Techcurve from "../../Assets/Images/Tech-Curve.png";
import Tridiagonal from "../../Assets/Images/tridiagonal.png";
const TrustedBy = () => {
    return (
        <div className="trusted-by-main">
            <div className="trusted-by-header-div">
                <div className="d-none d-md-block">
                    <h1 className="trusted-by-header vl">Trusted by</h1>
                </div>
                <div className="d-block d-sm-none">
                    <h1 className="res-sm-trustedby">TRUSTED BY</h1>
                </div>
            </div>
            <div className="trusted-by-swiper py-2">
                <Swiper
                    //   navigation={true}
                    slidesPerView={4}
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
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="sliders">
                            <img className="techcurve-img" src={Techcurve} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sliders">
                            <img src={Seeq} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sliders">
                            <img src={Scg} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sliders">
                            <img src={Msc} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sliders">
                            <img src={Tridiagonal} alt=""></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sliders">
                            <img src={Ptt} alt=""></img>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TrustedBy;
