import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ProductEnquiryPopup.css";
import Consultation from "../../Assets/Images/consultation.jpg";
import { BaseUrl } from "../../ApiBaseUrl/Api";
import axios from "axios";
import { AiOutlineCloseSquare } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ProductEnquiryPopup = ({ closeModal }) => {
  const { SingleProduct } = useSelector((state) => state.singleProductDetails);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      client_name: data.client_name,
      phone_number: data.phone_number,
      email_id: data.email_id,
      category_id: SingleProduct[0].category_id.toString(),
      product_id: SingleProduct[0].product_id.toString(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${BaseUrl}product/Add-Product-Enquiry`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          toast("Your Product Enquiry Added Successfully");
          closeModal(false);
        } else {
          toast("error");
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <section className="product-enquiry-popup-main">
      {/* <div>
        <div>
        <img className="enquiry-popup-image" src={Consultation} alt=""></img>
        </div>
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modalContainer modalbodycontainer">
          <div className="closebtn" onClick={() => closeModal(false)}>
            <AiOutlineCloseSquare className="close" />
          </div>

          <div className="modalbody">
            <div className="inquirydetails">
              <h3>Book A Free Consultation with our Software Expert</h3>
              <img className="enquiry-popup-image" src={Consultation} alt="" />
            </div>
            <div className="inquiryForm">
              <p>Please Enter Your Details Below</p>
              <input
                type="text"
                name="client_name"
                placeholder="Enter Your Name *" 
                className="inputfield"
                pattern="[A-Za-z\s]{3,50}"
                {...register("client_name", {
                  required: true,
                })}
              />
              {errors.client_name && (
                <span className="error-msg">Please enter the name</span>
              )}
              <input
                type="number"
                name="phone_number"
                placeholder="Enter Your Contact Number *"
                className="inputfield"
                {...register("phone_number", {
                  required: true,
                  maxLength: 15,
                  minLength: 10,
                })}
              />
              {errors.phone_number && (
                <span className="error-msg">Please enter the phone number</span>
              )}
              <input
                type="email"
                name="email_id"
                placeholder="Enter Your mail *"
                className="inputfield"
                {...register("email_id", {
                  required: true,
                })}
              />
              {errors.email_id && (
                <span className="error-msg">Please enter the email</span>
              )}
              <p className="productNote">
                By clicking Get Free Call you agree to our Privacy Policy and
                Terms and Conditions
              </p>
              <button className="getcallbtn">Get Free Call</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProductEnquiryPopup;
