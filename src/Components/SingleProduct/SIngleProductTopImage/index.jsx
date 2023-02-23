import React, { useState } from "react";
import "./singleProductTopCompo.css";
import Icon from "../../../Assets/Svg/Circular Imagewith Icon.svg";
import CallIcon from "../../../Assets/Svg/cl.svg";
import Request from "../../../Assets/Images/request.png";
import gsafe from "../../../Assets/Images/gsafe.png";
import bestprice from "../../../Assets/Images/bestprice.png";
import callexpert from "../../../Assets/Images/callexpert.png";
import { useSelector } from "react-redux";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";
import ProductEnquiryPopup from "../../../Models/ProductEnquiryPopup/ProductEnquiryPopup";

const SingleProductTopImage = () => {
  const { SingleProduct } = useSelector((state) => state.singleProductDetails);
  const [popup, setPopup] = useState(false);

  const onClickCallNow = () => {
    setPopup(!popup);
    console.log("popup clicked");
  };

  return (
    <>
      <div className="container py-4">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-6" style={{ width: "45%" }}>
            <img
              src={SingleProduct[0].product_image_url}
              alt=""
              className="single-product-image"
            />
          </div>
          <div className="col-12 col-lg-6">
            <div className="single-page-des-res">
              <h2>{SingleProduct[0].product_name}</h2>
              <h5
                className="single-product-description"
                style={{ fontWeight: "400", color: "#828282" }}
              >
                {parse(SingleProduct[0].product_description)}
              </h5>
            </div>
            <div
              className="d-flex align-items-center justify-content-between my-4 request-quotation"
             
            >
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
                onClick={onClickCallNow}
              >
                <div>
                  <img src={Request} alt="" />
                </div>
                <div className="px-2 pt-3">
                  <h5>Request Quotation</h5>
                  <p>
                  
                    <span
                      style={{
                        backgroundColor: "#0F2B95",
                        color: "#fff",
                        padding: "2px 3px",
                      }}
                    >
                      Free
                    </span>{" "}
                  </p>
                </div>
              </div>
              {/* <div>
                  <img src={CallIcon} alt="" />
                 </div> */}
            </div>
            <div className="d-none d-md-block">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={callexpert} alt="" style={{ width: "40px" }} />
                  </div>
                  <div className="px-2 pt-3">
                    <p>Get Instant Expert Advice</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img src={gsafe} alt="" style={{ width: "40px" }} />
                  </div>
                  <div className="px-1 pt-3">
                    <p>GSafe & Secure Payment</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <img src={bestprice} alt="" style={{ width: "40px" }} />
                  </div>
                  <div className="px-2 pt-3">
                    <p>Assured Best Price Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {popup && <ProductEnquiryPopup closeModal={setPopup} />}
      </div>
    </>
  );
};

export default SingleProductTopImage;
