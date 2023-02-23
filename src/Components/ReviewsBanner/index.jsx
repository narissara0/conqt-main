import React, { useState } from "react";
import "../../Styles/Styles.css";
import "./reviewsBanner.css";
import LeftPatch from "../../Assets/Images/ads-left-patch.png";
import RightPatch from "../../Assets/Images/ads-right-patch.png";
import Effitrac from "../../Assets/Svg/effitrac.svg";
import SalesForce from "../../Assets/Svg/sales-force.svg";
import Adobe from "../../Assets/Svg/adobe.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import Avtar from "../../Assets/Svg/reviewAvtar.svg";
import pharmareck from "../../Assets/Images/pharmareck.png";
import icanheal from "../../Assets/Images/icanheal.png";
import fycooher from "../../Assets/Images/fycooher.png";
import { appScreen } from "../../Content/app.content";

const Reviews = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="review-banner-main">
            <div className="review-patches">
                <img className="review-left-patch" src={LeftPatch} alt=""></img>
                <img className="review-right-patch" src={RightPatch} alt=""></img>
            </div>
            <div className="review-slider">
                <Swiper
                    // navigation={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        240: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img src={pharmareck} alt="" className="rev-sm-image" />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        We've been using this ConQT for all of our IT needs and have
                                        been extremely satisfied with the selection and prices. The
                                        customer service is also top notch, and they always go above
                                        and beyond to help us find the perfect solution for our
                                        business
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Backiwal</h4>
                                        <h6 className="review-aut-b">Pharmarack Technologies</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img src={icanheal} alt="" className="rev-sm-image" />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "ConQT has saved us so much time and money. The variety of
                                        products and services available is impressive and the
                                        ability to compare prices and negotiate deals with multiple
                                        vendors is a game changer.”
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Saurabh Vashistha</h4>
                                        <h6 className="review-aut-b">I Can Heal</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img src={fycooher} alt="" className="rev-sm-image" />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "As a small business owner, I appreciate the convenience and
                                        personal support provided by this IT marketplace. They take
                                        the time to understand our specific needs and always provide
                                        options that fit our budget."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Anjali Tiwari</h4>
                                        <h6 className="review-aut-b">Fyoocher Private Limited</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    {/* <img src={Avtar} alt="" className="rev-sm-image" /> */}
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">

                                        "I recently started using ConQT for my IT needs and I am
                                        thoroughly impressed with the platform. The marketplace
                                        offers a wide range of products and services from reputable
                                        suppliers, making it easy for me to find exactly what I need
                                        at competitive prices."
                                        {/* "I recently started using ConQT for my IT needs and I am
                    thoroughly impressed with the platform. The marketplace
                    offers a wide range of products and services from reputable
                    suppliers, making it easy for me to find exactly what I need
                    at competitive prices. What's even better is the fact that
                    the platform streamlines the purchasing process, allowing me
                    to make purchases quickly and efficiently. Before using the
                    ConQT, I struggled with high IT costs, as I often had to go
                    through multiple suppliers to find what I needed. But now,
                    with this platform, I can easily compare prices and find the
                    best deals, which has helped me reduce my IT costs
                    significantly. I highly recommend ConQT to anyone in need of
                    IT products and services. The platform has not only saved me
                    money, but it has also made the purchasing process much
                    easier and more convenient. Thank you ConQT for providing
                    such a valuable service! */}

                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">CBD MedSpot, Thailand</h4>
                                        <h6 className="review-aut-b">Jaya Sethi</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "I highly recommend this B2B IT marketplace to any company
                                        in need of IT products and services. The convenience, cost
                                        savings, and variety they offer is unmatched."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "The B2B IT marketplace is a great platform for finding IT
                                        products and services. It's easy to navigate, the prices are
                                        reasonable and the customer support is excellent."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "We've been using this B2B IT marketplace for a while now
                                        and it's been a great experience. The quality of products
                                        and services is great and the customer support is always
                                        there to help."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "This B2B IT marketplace offers a wide range of products and
                                        services that are perfect for our business. The integrated
                                        payment and delivery system is very secure and convenient."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "We've been very pleased with the service and selection
                                        provided by this B2B IT marketplace. The prices are
                                        competitive and the customer support is always responsive
                                        and helpful."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "I highly recommend this B2B IT marketplace to any company
                                        looking for IT products and services. The selection is vast
                                        and the prices are very reasonable."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "This B2B IT marketplace is a great resource for finding IT
                                        products and services. The customer support is friendly and
                                        knowledgeable, and the selection is impressive."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "We've been very satisfied with the products and services
                                        we've purchased through this B2B IT marketplace. The prices
                                        are fair and the customer support is excellent."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "This B2B IT marketplace is a one-stop-shop for all of our
                                        IT needs. The variety of products and services available is
                                        impressive, and the customer support is always helpful."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "We've been using this B2B IT marketplace for several months
                                        now and have been very pleased with the service. The prices
                                        are competitive, and the customer support is always
                                        responsive."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "This B2B IT marketplace is a great resource for finding IT
                                        products and services. The selection is vast and the prices
                                        are very reasonable."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "We've been very pleased with the service and selection
                                        provided by this B2B IT marketplace. The customer support is
                                        always responsive and helpful."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "This B2B IT marketplace is a great platform for finding IT
                                        products and services. The prices are reasonable and the
                                        customer support is excellent."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "We've been using this B2B IT marketplace for a while now
                                        and it's been a great experience. The quality of products
                                        and services is great and the customer support is always
                                        there to help."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container">
                            <div className="d-flex align-items-center justify-content-center">
                                <h1 className="review-top-name">REVIEW</h1>
                            </div>
                            <div className="row d-flex review-res-sm">
                                <div className="col-12 col-lg-3 ">
                                    <img
                                        src={Avtar}
                                        alt=""
                                        className="rev-sm-image"
                                    />
                                </div>
                                <div className="col-12 col-lg-9">
                                    <p className="review-content">
                                        "I highly recommend this B2B IT marketplace to any company
                                        in need of IT products and services. The convenience, cost
                                        savings, and variety they offer is unmatched."
                                    </p>
                                    <div className="review-aut">
                                        <h4 className="review-author">Amit Risus</h4>
                                        <h6 className="review-aut-b">Company name</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
