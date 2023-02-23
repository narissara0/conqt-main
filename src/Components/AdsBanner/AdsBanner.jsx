import React from "react";
import "../../Styles/Styles.css";
import "./AdsBanner.css";
import LeftPatch from "../../Assets/Images/ads-left-patch.png";
import RightPatch from "../../Assets/Images/ads-right-patch.png";
import Effitrac from "../../Assets/Svg/effitrac.svg";
import SalesForce from "../../Assets/Svg/sales-force.svg";
import Adobe from "../../Assets/Svg/adobe.svg";
import ERP from "../../Assets/Images/erp.png";
import CRM from "../../Assets/Images/crm.png";
import WEBDESIGN from "../../Assets/Images/web-design.png";
import POS from "../../Assets/Images/pos.png";
import ANTI from "../../Assets/Images/anti-virus.png";
import MOBILE from "../../Assets/Images/mobile-app.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/swiper.min.css";

const AdsBanner = () => {
  return (
    <div className="ads-banner-main">
      <div className="ads-patches">
        <img className="ads-left-patch" src={LeftPatch} alt=""></img>
        <img className="ads-right-patch" src={RightPatch} alt=""></img>
      </div>
      <div className="ads-slider">
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
            <div className="ads-img-sliders-div">
              <img className="ads-images" src={WEBDESIGN} alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ads-img-sliders-div">
              <img className="ads-images" src={ERP} alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ads-img-sliders-div">
              <img className="ads-images" src={CRM} alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ads-img-sliders-div">
              <img className="ads-images" src={POS} alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ads-img-sliders-div">
              <img className="ads-images" src={MOBILE} alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ads-img-sliders-div">
              <img className="ads-images" src={ANTI} alt=""></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AdsBanner;
