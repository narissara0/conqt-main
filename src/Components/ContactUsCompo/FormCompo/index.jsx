import React from "react";
import "./formCompo.css";
import Map from "../../../Assets/Svg/map.svg";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import { BaseUrl } from "../../../ApiBaseUrl/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormCompo = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data, "onSubmit on contact us");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      designation: "contact-us",
      query: data.query,
      phone: data.phone,
      company_email: data.company_email,
      name: data.first_name + data.last_name,
      company_size: "100",
      company: data.company,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${BaseUrl}expert/Add-Expert`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        if (result.status === 200) {
          toast("Thank you for getting in touch!");
          navigate("/");
        } else {
          toast("error");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <section className="d-flex align-items-center justify-content-center contact-us">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-form">
            <div className="d-flex align-items-center justify-content-between contact-us-form">
              <div className="contact-us-left-div">
                <div>
                  <p>
                    Write us a few words about your project and we’ll prepare a
                    proposal for you within 24 hours.
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between contact-us-input-div">
                  <div>
                    <label htmlFor="">
                      First Name <span className="error-msg">*</span>
                    </label>{" "}
                    <br />
                    <input
                      autocomplete="off"
                      type="text"
                      className="input-cls"
                      {...register("first_name", {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                      })}
                    />
                    {errors.first_name && (
                      <span className="error-msg">
                        Please enter the first name
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">
                      Last Name <span className="error-msg">*</span>
                    </label>{" "}
                    <br />
                    <input
                      autocomplete="off"
                      type="text"
                      placeholder=""
                      className="input-cls"
                      {...register("last_name", {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                      })}
                    />
                    {errors.last_name && (
                      <span className="error-msg">
                        Please enter the last name
                      </span>
                    )}
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between py-3 contact-us-input-div">
                  <div>
                    <label htmlFor="">
                      Company <span className="error-msg">*</span>
                    </label>{" "}
                    <br />
                    <input
                      autocomplete="off"
                      type="text"
                      className="input-cls"
                      {...register("company", {
                        required: true,
                        minLength: 3,
                        maxLength: 40,
                      })}
                    />
                    {errors.company && (
                      <span className="error-msg">
                        Please enter the company name
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="">
                      Phone Number <span className="error-msg">*</span>
                    </label>{" "}
                    <br />
                    <input
                      autocomplete="off"
                      type="number"
                      className="input-cls"
                      {...register("phone", {
                        required: true,
                        minLength: 10,
                        maxLength: 15,
                      })}
                    />
                    {errors.phone && (
                      <span className="error-msg">
                        Please enter the phone number
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="">
                    Email <span className="error-msg">*</span>
                  </label>{" "}
                  <br />
                  <input
                    autocomplete="off"
                    type="email"
                    className="input-cls"
                    style={{ width: "100%" }}
                    {...register("company_email", {
                      required: true,
                    })}
                  />
                  {errors.company_email && (
                    <span className="error-msg">Please enter the email</span>
                  )}
                </div>
                <div className="py-3">
                  <label htmlFor="">
                    Description <span className="error-msg">*</span>
                  </label>{" "}
                  <br />
                  <textarea
                    type="text"
                    className="input-cls"
                    style={{ width: "100%", height: "124px" }}
                    {...register("query", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.query && (
                    <span className="error-msg">
                      Please enter the description
                    </span>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  {/* <Button
                                backgroundColor={"#3EB489"}
                                buttonName={"Send"}
                                color={"#ffffff"}
                            /> */}

                  <button className="contact-send-btn">Send</button>
                </div>
              </div>
              <div>
                {/* <img
                  src={Map}
                  alt=""
                  style={{ width: "540px", height: "520px" }}
                /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817387782365!2d103.84982971475397!3d1.2834310990639126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19fd5f12fcb7%3A0xbf4048791bd63865!2sConQt%20Technologies%20Pte!5e0!3m2!1sen!2sin!4v1675063322921!5m2!1sen!2sin"
                  // width="540"
                  // height="520"
                  className="map-contact-us"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormCompo;
