import React from "react";
import "./MobileScreenPopup.css";
import "../../Styles/Styles.css";
import HeaderLogo from "../../Assets/Images/conqt-logo.png";
import { useNavigate } from "react-router-dom";

const MobileScreenPopup = ({ isShow }) => {
  const navigate = useNavigate();
  const onClickAbout = () => {
    navigate("/about-us");
  };
  const onClickAllProducts = () => {
    navigate("/view-all-product");
  };
  const onClickContact = () => {
    navigate("/contact-us");
  };

  return (
    <>
      <div className="mobile-screen-popup">
        <div className="mobile-popup-close" onClick={() => isShow(false)}>
          X
        </div>
        <img className="mobile-popup-logo" src={HeaderLogo} alt=""></img>
        <p className="mobile-popup-text" onClick={onClickAllProducts}>
          All Products
        </p>
        <p className="mobile-popup-text" onClick={onClickAbout}>
          About Us
        </p>
        <p className="mobile-popup-text" onClick={onClickContact}>
          Contact Us
        </p>
        <div className="mobile-popup-btn-div">
          <a href="https://login.conqt.com/login" className="mobile-popup-btn-login">Login</a>
          <a href="https://login.conqt.com/register" className="mobile-popup-btn">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default MobileScreenPopup;
