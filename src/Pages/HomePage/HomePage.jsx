import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updatedDataHomePage } from "../../Store/Reducer/HomePageReducer";
import '../../Styles/Styles.css';
import './HomePage.css'
import HowConqtWorks from "../../Components/HowConqtWorks/HowConqtWorks";
import FooterTop from "../../Components/FooterTop";
import Footer from "../../Components/FooterBody";
import FooterBottom from "../../Components/FooterBottom";
import HomeFAQ from "../../Components/HomeFAQ";
import GrowBusiness from "../../Components/GrowBusiness";
import GetCall from "../../Components/GetCall";
// import { COLORS } from "../../Styles/color";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import WriteReview from "../../Components/WriteReview/WriteReview";
import TrustedBy from "../../Components/TrustedBy/TrustedBy";
import AdsBanner from "../../Components/AdsBanner/AdsBanner";
import Reviews from "../../Components/ReviewsBanner";
import HomePageNavbar from "../../Components/HomePage/Navbar/Navbar"
import HomepageMainBanner from "../../Components/HomePage/MainBanner/HomepageMainBanner"
import HomepageIndustrySlider from "../../Components/HomePage/IndustrySlider/HomepageIndustrySlider"
import HomePageServicesSection from "../../Components/HomePage/Services/HomePageServicesSection"
import HomePageAllProducts from "../../Components/HomePage/AllProducts/AllProducts";


const HomePage = () => {

    return (
        <>
            <div className="home-page-main">
                <HomePageNavbar />
                <HomepageMainBanner />
                <HomepageIndustrySlider />
                <HomePageAllProducts />
                <HomePageServicesSection />
                <HowConqtWorks />
                <TrustedBy />
                <WhyChooseUs />
                <AdsBanner />
                <WriteReview />
                <GetCall />
                <GrowBusiness />
                <Reviews />
                <HomeFAQ />
                <FooterTop />
                <Footer />
                <FooterBottom />
            </div>

        </>


    );
};

export default HomePage;
