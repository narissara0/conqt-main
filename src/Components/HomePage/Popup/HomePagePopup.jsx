import React, { useState, useEffect } from "react";
import "./Popup.css";
import PopupProgressBar from "./ProgessBar/ProgressBar.jsx";
import PageOne from "./Pages/PageOne"
import PageTwo from "./Pages/PageTwo"
import PageThree from "./Pages/PageThree"
import PageFour from "./Pages/PageFour"
import PageFive from "./Pages/PageFive"
import {
  clearCallExpertData
} from "../../../Store/Reducer/CallExpertData";
import { useDispatch, useSelector } from "react-redux";

const HomePagePopup = ({close}) => {
  const [page, setPage] = useState("pageone");
  const dispatch = useDispatch();
  const nextPageNumber = (pageNumber) => {
    console.log(pageNumber)
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        setPage("pagefive");
        break;
      default:
        setPage("1");
    }
  };

  const onSubmit = (submit) => {
    close(submit)
  }

  return (
    <>
        
      <div className="popup-content-callExpert">
        <div className="popup-header">
        <div className="popup-close-btn-div">
          <button onClick={() => {close(false) 
                                  dispatch(clearCallExpertData())
                                   console.log("clicked")}} className="popup-close-btn">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.64286 0 0 6.64286 0 15C0 23.3571 6.64286 30 15 30C23.3571 30 30 23.3571 30 15C30 6.64286 23.3571 0 15 0ZM20.7857 22.5L15 16.7143L9.21429 22.5L7.5 20.7857L13.2857 15L7.5 9.21429L9.21429 7.5L15 13.2857L20.7857 7.5L22.5 9.21429L16.7143 15L22.5 20.7857L20.7857 22.5Z"
                fill="#3EB489"
              />
            </svg>
          </button>
        </div>
          <h1 className="popup-title">
            Make a faster decision by sharing more details
          </h1>
        </div>
        <div className="popup-body">
          <div className="popup-progress-bar"><PopupProgressBar  page={page} onPageNumberClick={nextPageNumber} /></div>
          {
            {
              pageone: <PageOne onButtonClick={nextPageNumber} />,
              pagetwo: <PageTwo onButtonClick={nextPageNumber} />,
              pagethree: <PageThree onButtonClick={nextPageNumber} />,
              pagefour: <PageFour onButtonClick={nextPageNumber} />,
              pagefive: <PageFive onButtonClick={nextPageNumber} onSubmitForm={onSubmit} />,
            }[page]
          }
        </div>
      </div>
    </>
  );
};

export default HomePagePopup;
