import React, { useState, useEffect } from "react";
import "./PageOne.css";
import {
  updateCallExpertData,
  clearCallExpertData
} from "../../../../Store/Reducer/CallExpertData";
import { useDispatch, useSelector } from "react-redux";

const PageTwo = ({ onButtonClick }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.checked == true) {
      setData(e.target.value);
    } else if (e.target.checked == false) {
      if (data.length !== 0) {
        data = setData("");
      }
    }
  };
  const { CallExpertData } =
    useSelector((state) => state.callExpert);

    const prevData = {
      Designation: CallExpertData.Designation,
      Query:CallExpertData.Query,
      Phone: CallExpertData.Phone,
      CompanyEmail:CallExpertData.CompanyEmail,
      Name: CallExpertData.Name,
      CompanySize: "",
      CompanyIndustry: CallExpertData.CompanyIndustry,
      Solution:CallExpertData.Solution,
    }

    const onSubmit = (data) => {
      if (data.length === 0) {
        setError(true)
     }
     else{
      prevData.CompanySize = data;
      console.log(prevData)
      dispatch(updateCallExpertData(prevData));
      onButtonClick("3");
     }
      
    };
    
  const skipChange = () => {
      const defaultValues = {
         Designation: "Manager/DM",
         Query:"No Query",
         CompanySize: "1-100",
       }
       dispatch(updateCallExpertData(defaultValues));
       onButtonClick('5')
     }
  console.log(data);



  return (
    <>
      <div className="popup-page1-header">
        <h1 className="popup-page1-title">Choose Your Company Size</h1>
      </div>
      {error?<p className="err-message">Company Size is required</p>:<></>}
      <div className="popup-page1-checkbox">
        <div className="checkbox-label">
          {data.length == 0 ? (
            <input
              className="checkbox-input"
              id="checkbox-input-1"
              type="checkbox"
              value="Individual"
              onChange={(e) => handleChange(e)}
            />
          ) : data == "Individual" ? (
            <input
              className="checkbox-input"
              id="checkbox-input-1"
              type="checkbox"
              value="Individual"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              className="checkbox-input"
              id="checkbox-input-1"
              type="checkbox"
              value="Individual"
              disabled
            />
          )}
          <label className="checkbox-label-text" for="checkbox-input-1">
            Individual
          </label>
        </div>

        <div className="checkbox-label">
          {data.length == 0 ? (
            <input
              className="checkbox-input"
              id="checkbox-input-2"
              type="checkbox"
              value="1-100"
              onChange={(e) => handleChange(e)}
            />
          ) : data == "1-100" ? (
            <input
              className="checkbox-input"
              id="checkbox-input-2"
              type="checkbox"
              value="1-100"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              className="checkbox-input"
              id="checkbox-input-2"
              type="checkbox"
              value="1-100"
              disabled
            />
          )}
          <label className="checkbox-label-text" for="checkbox-input-2">
            1-100
          </label>
        </div>

        <div className="checkbox-label">
          {data.length == 0 ? (
            <input
              className="checkbox-input"
              id="checkbox-input-3"
              type="checkbox"
              value="100-500"
              onChange={(e) => handleChange(e)}
            />
          ) : data == "100-500" ? (
            <input
              className="checkbox-input"
              id="checkbox-input-3"
              type="checkbox"
              value="100-500"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              className="checkbox-input"
              id="checkbox-input-3"
              type="checkbox"
              value="100-500"
              disabled
            />
          )}
          <label className="checkbox-label-text" for="checkbox-input-3">
            100-500
          </label>
        </div>

        <div className="checkbox-label">
          {data.length === 0 ? (
            <input
              className="checkbox-input"
              id="checkbox-input-4"
              type="checkbox"
              value="500-1000"
              onChange={(e) => handleChange(e)}
            />
          ) : data === "500-1000" ? (
            <input
              className="checkbox-input"
              id="checkbox-input-4"
              type="checkbox"
              value="500-1000"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <input
              className="checkbox-input"
              id="checkbox-input-4"
              type="checkbox"
              value="500-1000"
              disabled
            />
          )}
          <label className="checkbox-label-text" for="checkbox-input-4">
            500-1000
          </label>
        </div>

        <div className="checkbox-label">
          {data.length === 0 ? (
            <input
              className="checkbox-input"
              id="checkbox-input-5"
              type="checkbox"
              value=">1000"
              onChange={(e) => handleChange(e)}
            />
          ) : (
            (data === ">1000" ? (
              <input
                className="checkbox-input"
                id="checkbox-input-5"
                type="checkbox"
                value=">1000"
                onChange={(e) => handleChange(e)}
              />
            ) : (
              <input
                className="checkbox-input"
                id="checkbox-input-5"
                type="checkbox"
                value=">1000"
                disabled
              />
            ))
          )}
          <label className="checkbox-label-text" for="checkbox-input-5">
            {">1000"}
          </label>
        </div>
      </div>
      <div className="popup-page1-footer">
        <button
          onClick={() => {
            onButtonClick("1");
          }}
          className="page1-back-btn"
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0.5C16.0444 0.5 12.1776 1.67298 8.8886 3.87061C5.59962 6.06823 3.03617 9.19181 1.52242 12.8463C0.00866572 16.5009 -0.387401 20.5222 0.384303 24.4018C1.15601 28.2814 3.06082 31.8451 5.85787 34.6421C8.65492 37.4392 12.2186 39.344 16.0982 40.1157C19.9778 40.8874 23.9992 40.4913 27.6537 38.9776C31.3082 37.4638 34.4318 34.9004 36.6294 31.6114C38.827 28.3224 40 24.4556 40 20.5C39.9898 15.1988 37.8794 10.1176 34.1309 6.36909C30.3824 2.62057 25.3012 0.510165 20 0.5ZM27.6923 22.0385H16.0192L19.9231 25.9423C20.2108 26.2307 20.3724 26.6215 20.3724 27.0288C20.3724 27.4362 20.2108 27.827 19.9231 28.1154C19.7799 28.2595 19.6088 28.373 19.4204 28.4491C19.232 28.5251 19.0301 28.562 18.8269 28.5577C18.6267 28.5617 18.4278 28.5245 18.2425 28.4484C18.0573 28.3723 17.8896 28.259 17.75 28.1154L11.2308 21.5961C11.0858 21.452 10.9685 21.2826 10.8846 21.0962C10.7306 20.7136 10.7306 20.2864 10.8846 19.9038C10.9685 19.7174 11.0858 19.548 11.2308 19.4038L17.75 12.8846C18.0427 12.6194 18.4261 12.477 18.8209 12.4867C19.2157 12.4964 19.5916 12.6576 19.8709 12.9368C20.1501 13.2161 20.3113 13.592 20.321 13.9868C20.3307 14.3816 20.1883 14.765 19.9231 15.0577L16.0192 18.9615H27.6923C28.1003 18.9615 28.4917 19.1236 28.7802 19.4121C29.0687 19.7007 29.2308 20.092 29.2308 20.5C29.2308 20.908 29.0687 21.2993 28.7802 21.5879C28.4917 21.8764 28.1003 22.0385 27.6923 22.0385Z"
              fill="#403D39"
            />
          </svg>
        </button>
        <button
          className="skip-schedule-call-btn"
          onClick={() => {
            skipChange()
          }}
        >
          Skip & Schedule Call
        </button>
        <button
          className="page1-continue-btn"
          onClick={() => {
            onSubmit(data)
          }}
        >
          Continue
        </button>
        {/* <div className="page1-timer">
          <svg
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.9693 13V24.3021L35.3613 29.9531C35.7388 30.184 36.0332 30.5377 36.1992 30.96C36.3652 31.3822 36.3936 31.8495 36.2801 32.2902C36.1666 32.7309 35.9175 33.1206 35.571 33.3993C35.2245 33.6781 34.7999 33.8306 34.3622 33.8333C34.0092 33.8437 33.6613 33.7439 33.363 33.5469L22.9718 27.2969H22.9218L22.8219 27.2188L22.747 27.1667L22.672 27.1146L22.5971 27.0365L22.5471 26.9844C22.4972 26.9583 22.4722 26.9063 22.4472 26.8802L22.3973 26.8281L22.3473 26.724L22.2973 26.6458L22.2474 26.5677C22.2319 26.5556 22.2193 26.5399 22.2106 26.5218C22.2019 26.5037 22.1974 26.4838 22.1974 26.4635L22.1475 26.3854C22.1475 26.3594 22.1225 26.3333 22.1225 26.2813C22.1135 26.2707 22.1066 26.2583 22.1023 26.2449C22.098 26.2314 22.0964 26.2172 22.0975 26.2031L22.0476 26.099C22.0487 26.0849 22.0471 26.0706 22.0428 26.0572C22.0385 26.0438 22.0316 26.0314 22.0226 26.0208C22.0226 25.9688 22.0226 25.9427 21.9976 25.9167V25.8125C21.9976 25.7604 21.9726 25.7344 21.9726 25.7083V13C21.9726 12.4475 22.1832 11.9176 22.5579 11.5269C22.9327 11.1362 23.4409 10.9167 23.9709 10.9167C24.5009 10.9167 25.0092 11.1362 25.384 11.5269C25.7587 11.9176 25.9693 12.4475 25.9693 13V13ZM49.6493 19.3021C49.6743 19.25 49.6993 19.224 49.6993 19.1979L49.7492 19.1198C49.7742 19.0938 49.7742 19.0417 49.7992 19.0156L49.8491 18.9375C49.8454 18.9008 49.8543 18.8639 49.8741 18.8333C49.8741 18.8073 49.8991 18.7813 49.8991 18.7292C49.9081 18.7186 49.915 18.7062 49.9193 18.6928C49.9236 18.6794 49.9252 18.6652 49.9241 18.651C49.9241 18.599 49.9491 18.5729 49.9491 18.5469C49.9491 18.5208 49.974 18.4688 49.974 18.4427V18.3385C49.9946 18.2713 50.0031 18.2007 49.999 18.1302V7.71355C49.999 7.16102 49.7885 6.63111 49.4137 6.24041C49.039 5.84971 48.5307 5.63022 48.0007 5.63022C47.4707 5.63022 46.9624 5.84971 46.5877 6.24041C46.2129 6.63111 46.0024 7.16102 46.0024 7.71355V13.1042L40.9316 7.81772C37.5775 4.32271 33.3047 1.94299 28.6534 0.979423C24.0021 0.0158525 19.1812 0.511699 14.8002 2.40427C10.4192 4.29685 6.67483 7.50117 4.04045 11.6121C1.40607 15.7231 0 20.556 0 25.5C0 30.444 1.40607 35.277 4.04045 39.3879C6.67483 43.4988 10.4192 46.7032 14.8002 48.5957C19.1812 50.4883 24.0021 50.9841 28.6534 50.0206C33.3047 49.057 37.5775 46.6773 40.9316 43.1823C41.3054 42.7917 41.5152 42.2626 41.5152 41.7109C41.5152 41.1593 41.3054 40.6301 40.9316 40.2396C40.7479 40.0435 40.5283 39.8877 40.286 39.7814C40.0436 39.675 39.7833 39.6202 39.5203 39.6202C39.2574 39.6202 38.9971 39.675 38.7547 39.7814C38.5123 39.8877 38.2928 40.0435 38.109 40.2396C35.3134 43.1509 31.7527 45.1327 27.877 45.9347C24.0013 46.7367 19.9844 46.3228 16.3343 44.7453C12.6841 43.1678 9.56451 40.4975 7.36971 37.072C5.17492 33.6464 4.00348 29.6195 4.00348 25.5C4.00348 21.3805 5.17492 17.3536 7.36971 13.928C9.56451 10.5025 12.6841 7.83224 16.3343 6.25474C19.9844 4.67723 24.0013 4.26331 27.877 5.06529C31.7527 5.86727 35.3134 7.84915 38.109 10.7604L43.1798 16.0469H38.0091C37.4791 16.0469 36.9708 16.2664 36.5961 16.6571C36.2213 17.0478 36.0108 17.5777 36.0108 18.1302C36.0108 18.6827 36.2213 19.2127 36.5961 19.6034C36.9708 19.9941 37.4791 20.2135 38.0091 20.2135H48.5752L48.6751 20.1615H48.7501L48.85 20.1094H48.9249L49.0248 20.0573L49.0998 20.0052L49.1997 19.9271L49.2496 19.875L49.5494 19.5885L49.5993 19.5104L49.6493 19.3021Z"
              fill="#3EB489"
            />
          </svg>
          <p className="page1-time-text">
            20Seconds
            <br />
            left...
          </p>
        </div> */}
      </div>
    </>
  );
};

export default PageTwo;
