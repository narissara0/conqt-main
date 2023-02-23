import React, { useState, useEffect } from "react";
import HomePageMainBanner from "../../../Assets/Svg/MainBanner.svg";
import { Link } from "react-router-dom";
import ExportIcon from "../../../Assets/Svg/export.svg";
import FreeConIcon from "../../../Assets/Svg/freeCon.svg";
import getInstIcon from "../../../Assets/Svg/getIns.svg";
import MainBanner from "../../../Assets/Images/main-banner.png";
import "./homepageMainBanner.css";
import RoundedButton from "../../RoundedButton";
import { useNavigate } from "react-router-dom";

const HomepageMainBanner = () => {
    const navigate = useNavigate();
    const FindProduct = () => {
        navigate("/view-all-product");
    };

    return (
        <>
            <section
                className="homepage-banner d-none d-md-block"
            // style={{ backgroundImage: `url(${HomePageMainBanner})` }}
            >
                <div
                    className="d-flex flex-column align-items-center"
                    style={{ marginTop: "-100px" }}
                >
                    <h1 style={{ color: "#3EB489" }}>CONNECTING</h1>
                    <h2>CLIENTS WITH VENDORS</h2>
                </div>

                <div
                    className="d-flex align-items-center justify-content-center py-3"
                // onClick={FindProduct}
                >
                    {/* <RoundedButton
                        backgroundColor={"#3EB489"}
                        color={"#ffffff"}
                        buttonName={"Find Product"}
                        onClick={FindProduct}

                    /> */}
                    <button className="find-pro-btn px-4 py-2" onClick={FindProduct}>Find Product</button>
                </div>
                {/* <div className="Banner-Search-bar">
                    <input
                        className="HomePage-SearchBar"
                        type="search"
                        placeholder="Search by Category: Product or Keyword"
                    />
                    <button className="homepage-search-btn">Search</button>
                </div> */}
                <div>
                    {/* <p className="homePage-searchText">
                        Or{" "}
                        <Link className="banner-get-advice" to>
                            Get Instant Advice
                        </Link>
                    </p> */}
                </div>
                <div className="banner-footer">
                    <p className="svg-banner-text">
                        {/* <svg
                            width="34"
                            height="35"
                            viewBox="0 0 34 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect y="0.484375" width="34" height="34" rx="17" fill="#3EB489" />
                            <path
                                d="M16.3 22.4844V21.151H21.9V16.4177C21.9 15.7733 21.7717 15.1677 21.515 14.601C21.2583 14.0344 20.9083 13.5399 20.465 13.1177C20.0217 12.6955 19.5025 12.3622 18.9075 12.1177C18.3125 11.8733 17.6767 11.751 17 11.751C16.3233 11.751 15.6875 11.8733 15.0925 12.1177C14.4975 12.3622 13.9783 12.6955 13.535 13.1177C13.0917 13.5399 12.7417 14.0344 12.485 14.601C12.2283 15.1677 12.1 15.7733 12.1 16.4177V20.4844H11.4C11.015 20.4844 10.6855 20.3539 10.4116 20.093C10.1372 19.8317 10 19.5177 10 19.151V17.8177C10 17.5622 10.0642 17.337 10.1925 17.1424C10.3208 16.9482 10.49 16.7899 10.7 16.6677L10.7525 15.7844C10.8575 14.9733 11.0997 14.2399 11.4791 13.5844C11.858 12.9288 12.3305 12.3733 12.8966 11.9177C13.4622 11.4622 14.098 11.1093 14.8041 10.859C15.5097 10.6093 16.2417 10.4844 17 10.4844C17.77 10.4844 18.508 10.6093 19.2141 10.859C19.9197 11.1093 20.5525 11.4648 21.1125 11.9257C21.6725 12.387 22.1422 12.9426 22.5216 13.5924C22.9005 14.2426 23.1425 14.9677 23.2475 15.7677L23.3 16.6344C23.51 16.7344 23.6792 16.8815 23.8075 17.0757C23.9358 17.2704 24 17.4844 24 17.7177V19.251C24 19.4955 23.9358 19.7122 23.8075 19.901C23.6792 20.0899 23.51 20.2344 23.3 20.3344V21.151C23.3 21.5177 23.163 21.8317 22.8891 22.093C22.6147 22.3539 22.285 22.4844 21.9 22.4844H16.3ZM14.9 17.8177C14.7017 17.8177 14.5355 17.7537 14.4016 17.6257C14.2672 17.4982 14.2 17.3399 14.2 17.151C14.2 16.9622 14.2672 16.8037 14.4016 16.6757C14.5355 16.5482 14.7017 16.4844 14.9 16.4844C15.0983 16.4844 15.2647 16.5482 15.3991 16.6757C15.533 16.8037 15.6 16.9622 15.6 17.151C15.6 17.3399 15.533 17.4982 15.3991 17.6257C15.2647 17.7537 15.0983 17.8177 14.9 17.8177ZM19.1 17.8177C18.9017 17.8177 18.7355 17.7537 18.6016 17.6257C18.4672 17.4982 18.4 17.3399 18.4 17.151C18.4 16.9622 18.4672 16.8037 18.6016 16.6757C18.7355 16.5482 18.9017 16.4844 19.1 16.4844C19.2983 16.4844 19.4647 16.5482 19.5991 16.6757C19.733 16.8037 19.8 16.9622 19.8 17.151C19.8 17.3399 19.733 17.4982 19.5991 17.6257C19.4647 17.7537 19.2983 17.8177 19.1 17.8177ZM12.8175 16.7844C12.7708 16.1288 12.8672 15.5344 13.1066 15.001C13.3455 14.4677 13.6661 14.0148 14.0684 13.6424C14.4711 13.2704 14.935 12.9844 15.46 12.7844C15.985 12.5844 16.51 12.4844 17.035 12.4844C18.0967 12.4844 19.0155 12.8039 19.7916 13.443C20.5672 14.0817 21.0367 14.8788 21.2 15.8344C20.1033 15.8233 19.1117 15.5426 18.225 14.9924C17.3383 14.4426 16.6675 13.7288 16.2125 12.851C16.0258 13.751 15.6322 14.5482 15.0316 15.2424C14.4305 15.937 13.6925 16.451 12.8175 16.7844Z"
                                fill="white"
                            />
                        </svg>{" "} */}
                        <img src={FreeConIcon} alt="" className="px-2" />
                        Free Expert Consultation
                    </p>
                    <p className="svg-banner-text">
                        {/* <svg
                            width="34"
                            height="35"
                            viewBox="0 0 34 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="17" cy="17.4844" r="17" fill="#3EB489" />
                            <path
                                d="M24.875 9.48438H9.125C8.82663 9.48438 8.54048 9.60388 8.3295 9.81659C8.11853 10.0293 8 10.3178 8 10.6186V21.9611C8 22.2619 8.11853 22.5504 8.3295 22.7631C8.54048 22.9759 8.82663 23.0954 9.125 23.0954H17.5625L17.8831 22.6984L18.4062 22.0518L18.3556 21.9611H9.125V10.6186H24.875V15.4732C25.3023 15.7521 25.6822 16.0987 26 16.4997V10.6186C26 10.3178 25.8815 10.0293 25.6705 9.81659C25.4595 9.60388 25.1734 9.48438 24.875 9.48438Z"
                                fill="white"
                            />
                            <path
                                d="M10.8125 12.8867H20.375V13.7941H10.8125V12.8867Z"
                                fill="white"
                            />
                            <path
                                d="M10.8125 15.1562H17V16.0636H10.8125V15.1562Z"
                                fill="white"
                            />
                            <path
                                d="M10.8125 19.1289H16.4375V20.0363H10.8125V19.1289Z"
                                fill="white"
                            />
                            <path
                                d="M22.3208 15.8556C21.6009 15.8498 20.8961 16.0631 20.2985 16.4676C19.7008 16.8721 19.2381 17.449 18.9707 18.1228C18.7034 18.7967 18.6439 19.5361 18.8 20.2446C18.9561 20.9531 19.3206 21.5976 19.8458 22.0939L18.7545 23.438L19.2608 25.4854L21.3195 22.956C21.9712 23.1503 22.6647 23.1503 23.3164 22.956L25.3751 25.4854L25.8814 23.438L24.7901 22.0939C25.3153 21.5976 25.6798 20.9531 25.8359 20.2446C25.992 19.5361 25.9325 18.7967 25.6652 18.1228C25.3978 17.449 24.9351 16.8721 24.3374 16.4676C23.7397 16.0631 23.0349 15.8498 22.3151 15.8556H22.3208ZM22.3208 21.9125C21.8427 21.9058 21.3774 21.7567 20.9832 21.4841C20.5889 21.2115 20.2835 20.8274 20.1051 20.3802C19.9268 19.933 19.8836 19.4427 19.9809 18.9708C20.0782 18.4989 20.3117 18.0666 20.6521 17.7281C20.9925 17.3897 21.4245 17.1602 21.8938 17.0686C22.3631 16.977 22.8489 17.0274 23.2899 17.2134C23.7309 17.3993 24.1076 17.7126 24.3725 18.1138C24.6375 18.515 24.7788 18.9862 24.7789 19.4682C24.7729 20.1205 24.511 20.7439 24.0503 21.2019C23.5896 21.66 22.9678 21.9155 22.3208 21.9125Z"
                                fill="white"
                            />
                        </svg>{" "} */}
                        <img src={getInstIcon} alt="" className="px-2" />
                        Get Instant License
                    </p>
                    <p className="svg-banner-text">
                        {/* <svg
                            width="34"
                            height="35"
                            viewBox="0 0 34 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect y="0.484375" width="34" height="34" rx="17" fill="#3EB489" />
                            <path
                                d="M17.5652 15.6844L16.3478 14.4244L17.7174 12.9844H14.087V11.1844H17.7174L16.3261 9.74438L17.5652 8.48438L21.0435 12.0844L17.5652 15.6844ZM13.2174 26.4844C12.7391 26.4844 12.3299 26.3083 11.9896 25.9561C11.6487 25.6033 11.4783 25.1794 11.4783 24.6844C11.4783 24.1894 11.6487 23.7655 11.9896 23.4127C12.3299 23.0605 12.7391 22.8844 13.2174 22.8844C13.6957 22.8844 14.1049 23.0605 14.4452 23.4127C14.7861 23.7655 14.9565 24.1894 14.9565 24.6844C14.9565 25.1794 14.7861 25.6033 14.4452 25.9561C14.1049 26.3083 13.6957 26.4844 13.2174 26.4844ZM21.913 26.4844C21.4348 26.4844 21.0255 26.3083 20.6852 25.9561C20.3443 25.6033 20.1739 25.1794 20.1739 24.6844C20.1739 24.1894 20.3443 23.7655 20.6852 23.4127C21.0255 23.0605 21.4348 22.8844 21.913 22.8844C22.3913 22.8844 22.8009 23.0605 23.1417 23.4127C23.482 23.7655 23.6522 24.1894 23.6522 24.6844C23.6522 25.1794 23.482 25.6033 23.1417 25.9561C22.8009 26.3083 22.3913 26.4844 21.913 26.4844ZM8 10.2844V8.48438H10.8478L14.5435 16.5844H20.6304L24.0217 10.2844H26L22.1739 17.4394C22.0145 17.7394 21.8006 17.9719 21.5322 18.1369C21.2643 18.3019 20.971 18.3844 20.6522 18.3844H14.1739L13.2174 20.1844H23.6522V21.9844H13.2174C12.5652 21.9844 12.0687 21.6919 11.7278 21.1069C11.3875 20.5219 11.3768 19.9294 11.6957 19.3294L12.8696 17.1244L9.73913 10.2844H8Z"
                                fill="white"
                            />
                        </svg> {" "} */}
                        <img src={ExportIcon} alt="" className="px-2" />
                        Easy & Secure Checkout
                    </p>
                </div>
            </section>

            <section className="d-block d-sm-none">
                <div className="mbl-main-banner">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-4">
                        <h1 style={{ color: "#3EB489" }}>CONNECTING</h1>
                        <h3>CLIENTS WITH VENDORS</h3>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-center py-3"
                        onClick={FindProduct}
                    >
                        <RoundedButton
                            backgroundColor={"#3EB489"}
                            color={"#ffffff"}
                            buttonName={"Find Product"}
                        />
                    </div>
                    {/* <div className="d-flex align-items-center justify-content-center">
                        <input type="text"
                            className="search-mbl-input"
                        />
                        <span>
                            <button className="mbl-search">Search</button>
                        </span>
                    </div> */}

                    {/* <div className="d-flex align-items-center justify-content-center">
                        <p style={{ color: "black", paddingTop: "5px" }}>
                            Or
                            <span>
                                <li style={{ color: "black", textDecoration: "underline" }}>Get Instant Advice</li>
                            </span>
                        </p>
                    </div> */}
                    <div
                        className="d-flex flex-column align-items-start justify-content-center
                        mbl-view-main-banner-icons
                    "
                    >
                        <div className="d-flex align-items-center">
                            <img src={FreeConIcon} alt="" className="px-2" />
                            <h5>Free Expert Consultation</h5>
                        </div>
                        <div className="d-flex align-items-center py-2">
                            <img src={getInstIcon} alt="" className="px-2" />
                            <h5>Get Instant License</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src={ExportIcon} alt="" className="px-2" />
                            <h5>Easy & Secure Checkout</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomepageMainBanner;
