import React, { useState, useEffect } from "react";
import "./Navbar.css";
import HeaderLogo from "../../../Assets/Svg/logo2.0W.svg";
import { Link } from "react-router-dom";
import SignIcon from "../../../Assets/Svg/signIcon.svg";
import RoundedButton from "../../RoundedButton";
import CallIcon from "../../../Assets/Svg/callRing.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import HomePagePopup from "../Popup/HomePagePopup.jsx";
import MobileScreenPopup from "../../../Models/MobileScreenPopup/MobileScreenPopup";

const HomePageNavbar = () => {
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(false);
    const toggleLogout = () => {
        setLogout(!logout);
    };

    const handleClickAboutUs = () => {
        navigate("/about-us");
    };
    const handleClickContactUs = () => {
        navigate("/contact-us");
    };

    const handleClickAllProducts = () => {
        navigate('/view-all-product')
    }
    const onRequestClose = (close) => {
        setIsOpen(close);
    };

    const onClickLogo = () => {
        navigate("/");
    };

    const onClickSignIcon = () => {
        setPopup(true);
    };
    return (
        // <div className="home-page-header">
        //   <div className="home-page-header-div1">
        //     <img className="home-page-logo" src={HeaderLogo} alt="" />
        //     <button className="home-page-header-Vbtn ">Find Vendor</button>
        //     <button className="home-page-header-Cbtn">Find Customer</button>
        //     <button className="home-page-header-callbtn">
        //       <svg
        //         width="14"
        //         height="15"
        //         viewBox="0 0 14 15"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //       >
        //         <path
        //           d="M3.57201 1.13161C4.33401 1.68694 4.92735 2.44494 5.43401 3.17028L5.72868 3.59961L6.00668 4.00961C6.14574 4.21276 6.20519 4.45997 6.17372 4.70414C6.14225 4.94831 6.02204 5.17236 5.83602 5.33361L4.53535 6.29961C4.47251 6.34499 4.42828 6.41163 4.41087 6.48716C4.39345 6.56269 4.40405 6.64197 4.44068 6.71028C4.73535 7.24561 5.25935 8.04294 5.85935 8.64294C6.46002 9.24294 7.29468 9.80161 7.86735 10.1296C7.93915 10.1699 8.02367 10.1812 8.10352 10.1611C8.18337 10.141 8.2525 10.0911 8.29668 10.0216L9.14335 8.73294C9.29901 8.52617 9.52863 8.38765 9.78413 8.3464C10.0396 8.30514 10.3012 8.36434 10.514 8.51161L10.956 8.81761C11.782 9.39094 12.6693 10.0423 13.348 10.9109C13.4556 11.0495 13.5241 11.2144 13.5463 11.3884C13.5684 11.5624 13.5435 11.7392 13.474 11.9003C12.916 13.2023 11.504 14.3109 10.0353 14.2569L9.83535 14.2456L9.68001 14.2323L9.50801 14.2123L9.32068 14.1869L9.11735 14.1536C9.08175 14.1472 9.04619 14.1405 9.01068 14.1336L8.78668 14.0856C8.74751 14.077 8.7084 14.0681 8.66935 14.0589L8.42535 13.9963L8.16868 13.9229L7.90068 13.8363C6.67002 13.4189 5.10801 12.5989 3.50535 10.9963C1.90335 9.39428 1.08335 7.83227 0.666015 6.60161L0.579348 6.33361L0.506015 6.07694L0.443348 5.83294L0.391348 5.60228C0.376329 5.53003 0.362327 5.45758 0.349348 5.38494L0.316015 5.18161L0.289348 4.99428L0.270015 4.82228L0.256681 4.66694L0.246015 4.46694C0.192015 3.00294 1.31268 1.58094 2.60868 1.02561C2.76467 0.958253 2.93548 0.932609 3.10437 0.951192C3.27325 0.969776 3.43441 1.03195 3.57201 1.13161ZM8.99535 3.52828L9.07268 3.53694C9.55795 3.62254 10.0037 3.85957 10.3459 4.21406C10.6882 4.56855 10.9095 5.0223 10.978 5.51027C11.0024 5.67906 10.9613 5.85079 10.8629 5.99014C10.7646 6.12949 10.6166 6.22586 10.4494 6.25942C10.2822 6.29299 10.1085 6.26119 9.96401 6.17057C9.81953 6.07996 9.71527 5.93742 9.67268 5.77228L9.65735 5.69561C9.63053 5.50434 9.54889 5.32494 9.4223 5.17907C9.29572 5.0332 9.1296 4.9271 8.94402 4.87361L8.84068 4.85028C8.67328 4.8206 8.52354 4.7281 8.42208 4.59168C8.32063 4.45526 8.27512 4.28523 8.29488 4.11637C8.31464 3.94751 8.39816 3.79258 8.52836 3.68326C8.65857 3.57395 8.82562 3.5185 8.99535 3.52828ZM9.00068 1.50161C10.0615 1.50161 11.079 1.92304 11.8291 2.67318C12.5793 3.42333 13.0007 4.44074 13.0007 5.50161C13.0005 5.67153 12.9354 5.83496 12.8188 5.95852C12.7021 6.08208 12.5427 6.15643 12.3731 6.16639C12.2035 6.17635 12.0364 6.12116 11.9061 6.0121C11.7758 5.90304 11.6921 5.74834 11.672 5.57961L11.6673 5.50161C11.6676 4.82455 11.4102 4.17278 10.9473 3.67863C10.4845 3.18447 9.85097 2.88497 9.17535 2.84094L9.00068 2.83494C8.82387 2.83494 8.6543 2.7647 8.52928 2.63968C8.40425 2.51466 8.33401 2.34509 8.33401 2.16828C8.33401 1.99146 8.40425 1.82189 8.52928 1.69687C8.6543 1.57185 8.82387 1.50161 9.00068 1.50161Z"
        //           fill="white"
        //         />
        //       </svg>{" "}
        //       {"  "}
        //       Call Expert
        //     </button>
        //     <button className="home-page-header-menu">
        //       <svg
        //         width="20"
        //         height="17"
        //         viewBox="0 0 20 17"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //       >
        //         <path
        //           d="M0 16.5H20V13.8333H0V16.5ZM0 9.83333H20V7.16667H0V9.83333ZM0 0.5V3.16667H20V0.5H0Z"
        //           fill="white"
        //         />
        //       </svg>{" "}
        //       {"   "}
        //       <svg
        //         width="28"
        //         height="29"
        //         viewBox="0 0 28 29"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //       >
        //         <path
        //           d="M14 0.5C6.272 0.5 0 6.772 0 14.5C0 22.228 6.272 28.5 14 28.5C21.728 28.5 28 22.228 28 14.5C28 6.772 21.728 0.5 14 0.5ZM14 6.1C16.702 6.1 18.9 8.298 18.9 11C18.9 13.702 16.702 15.9 14 15.9C11.298 15.9 9.1 13.702 9.1 11C9.1 8.298 11.298 6.1 14 6.1ZM14 25.7C11.158 25.7 7.798 24.552 5.404 21.668C7.85625 19.744 10.8831 18.6983 14 18.6983C17.1169 18.6983 20.1438 19.744 22.596 21.668C20.202 24.552 16.842 25.7 14 25.7Z"
        //           fill="white"
        //         />
        //       </svg>
        //     </button>
        //   </div>
        //   <div className="home-page-header-div2">
        //     <ul

        //       style={{ listStyleType: "none" }}
        //     >
        //       <li>
        //         <Link classname="header-list-TextStyle" to>
        //           All Categories{" "}
        //           <svg
        //             width="9"
        //             height="6"
        //             viewBox="0 0 9 6"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //           >
        //             <path
        //               d="M1.0575 0.296875L4.5 3.64071L7.9425 0.296875L9 1.32631L4.5 5.70687L0 1.32631L1.0575 0.296875Z"
        //               fill="white"
        //             />
        //           </svg>
        //         </Link>
        //       </li>
        //       <li>
        //         <Link classname="header-list-TextStyle" to>
        //           By Industry{" "}
        //           <svg
        //             width="9"
        //             height="6"
        //             viewBox="0 0 9 6"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //           >
        //             <path
        //               d="M1.0575 0.296875L4.5 3.64071L7.9425 0.296875L9 1.32631L4.5 5.70687L0 1.32631L1.0575 0.296875Z"
        //               fill="white"
        //             />
        //           </svg>
        //         </Link>
        //       </li>
        //       <li >
        //         <Link classname="header-list-TextStyle" to>
        //           By Department{" "}
        //           <svg
        //             width="9"
        //             height="6"
        //             viewBox="0 0 9 6"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //           >
        //             <path
        //               d="M1.0575 0.296875L4.5 3.64071L7.9425 0.296875L9 1.32631L4.5 5.70687L0 1.32631L1.0575 0.296875Z"
        //               fill="white"
        //             />
        //           </svg>
        //         </Link>
        //       </li>
        //       <li >
        //         <Link classname="header-list-TextStyle" to>Compare Products</Link>
        //       </li>
        //       <li >
        //         <Link classname="header-list-TextStyle" to>Sell your Products</Link>
        //       </li>
        //       <li >
        //         <Link classname="header-list-TextStyle" to>Offer</Link>
        //       </li>
        //     </ul>
        //     <ul
        //       style={{ listStyleType: "none" }}
        //     >

        //       <li className="list2">
        //         <Link className="header-list-TextStyle2" to>Write Review</Link>
        //       </li>
        //       <li >
        //         <Link to>Need Help
        //           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M13.07 9.25L12.17 10.17C11.45 10.89 11 11.5 11 13H9V12.5C9 11.39 9.45 10.39 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7H6C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C13.9986 7.84324 13.6643 8.65183 13.07 9.25ZM11 17H9V15H11M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z" fill="white" />
        //           </svg>
        //         </Link>
        //       </li>
        //     </ul>
        //   </div>
        // </div>
        <>
            <section className="d-none d-md-block"
                style={{ position: "sticky", top: "0", zIndex: 1 }}
            >
                <div className="main-header-bg py-2">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <div onClick={onClickLogo}>
                                    <img src={HeaderLogo} alt="" style={{ width: "140px" }} />
                                </div>
                                {/* <div className="d-flex px-5">
                                    <div className="px-2">
                                        <RoundedButton
                                            backgroundColor={"white"}
                                            color={"black"}
                                            buttonName={"Find Vendor"}
                                        />
                                    </div>

                                    <div>
                                        <RoundedButton
                                            backgroundColor={"white"}
                                            color={"black"}
                                            buttonName={"Find Customer"}
                                        />
                                    </div>
                                </div> */}
                                {/* if you want find vendor and customer buttons uncomment above div */}
                            </div>
                            <div>
                                <div>
                                    {/* <RoundedButton
                                        backgroundColor={"#3EB489"}
                                        color={"white"}
                                        buttonName={"Call Expert"}
                                        image={CallIcon}
                                        onClickFunc={() => setIsOpen(true)}
                                    /> */}

                                    <button
                                        className="call-expt-btn px-4 py-2"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <img src={CallIcon} alt="" style={{ width: "15px" }} />
                                        <span style={{ marginLeft: "5px" }}>Call Expert</span>
                                    </button>

                                    <ReactModal
                                        isOpen={isOpen}
                                        contentLabel="Example Modal"
                                        onRequestClose={() => setIsOpen(false)}
                                    >
                                        <HomePagePopup close={onRequestClose} />
                                    </ReactModal>
                                    <img
                                        onClick={toggleLogout}
                                        style={{
                                            width: "68px",
                                            marginLeft: "15px",
                                            cursor: "pointer",
                                        }}
                                        src={SignIcon}
                                        alt=""
                                    />
                                    {logout && (
                                        <div className="header-logout">
                                            <p className="sign-card">
                                                <a
                                                    className="sign-card"
                                                    href="https://login.conqt.com/login" alt="">
                                                    Login
                                                </a>
                                            </p>
                                            <p className="sign-card">
                                                <a className="sign-card" href="https://login.conqt.com/register" alt="">
                                                    Sign Up
                                                </a>
                                            </p>
                                            {/* <p className="sign-card">My Profile</p>
                      <p className="sign-card">My Cart</p>
                      <p className="sign-card">Wishlist</p>
                      <p className="sign-card">Get Customer Pricing</p> */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            className="d-flex align-items-center justify-content-between"
                            style={{ paddingTop: "20px" }}
                        >
                            <div className="d-flex align-items-center">
                                {/* <div style={{ marginTop: "-15px" }}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="header-links"
                    >
                      All Products
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">CRM</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">ERP</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">VMS</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Server</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Google Suite
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Cloud</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Computers</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}

                                {/* <div style={{ marginTop: "-15px" }}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                                            className="header-links px-3"
                                        >
                                            By Industry
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Information technology</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Computer Science</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Manufacturing</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Education</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> */}

                                {/* <div style={{ marginTop: "-15px" }}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic"
                                            className="header-links"
                                        >
                                            By Department
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Development</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Sales</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Human Resources</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">Marketing</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Finance</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Project Management</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Accounting</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> */}
                                <p className="header-links" onClick={handleClickAllProducts}>
                                    All Products
                                </p>
                                <p className="header-links px-3">
                                    <a className="find-vendor" href="https://login.conqt.com/customer-registration">
                                        Find Vendor</a>
                                </p>
                                <p className="header-links">
                                    <a className="find-vendor" href="https://login.conqt.com/vendor-registration">
                                        Find Customer
                                    </a>
                                </p>
                                <p className="header-links px-3" onClick={handleClickAboutUs}>
                                    About Us
                                </p>
                                <p className="header-links" onClick={handleClickContactUs}>
                                    Contact Us
                                </p>



                                {/* <p className="header-links px-4">Find Solutions</p>
                <p className="header-links">Find Projects</p> */}

                                {/* <p className="header-links px-3">Offer</p> */}
                            </div>
                            {/* <div className="d-flex">
                <a href="#faq" className="need-help">
                 
                  <p className="header-links">Need Help ?</p>
                </a>
              </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="d-block d-sm-none">
                <div className="main-header-bg py-3">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div onClick={onClickLogo}>
                            <img style={{ width: "100px" }} src={HeaderLogo} alt="" />
                        </div>
                        <div onClick={onClickSignIcon}>
                            <img src={SignIcon} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {popup && <MobileScreenPopup isShow={setPopup} />}
        </>
    );
};

export default HomePageNavbar;
