import React, { useState, useEffect } from "react";
import "./ProgressBar.css";
import {
  updateCallExpertData,
  clearCallExpertData
} from "../../../../Store/Reducer/CallExpertData";
import { useDispatch, useSelector } from "react-redux";


const PopupProgressBar = ({ page, onPageNumberClick }) => {
  const dispatch = useDispatch();
  const [accomplished, setAccomplished] = useState(false);
  const [progress, setProgress] = useState(0);
  const { CallExpertData } =
    useSelector((state) => state.callExpert);
    console.log(CallExpertData)
useEffect(() =>{
  if (page==='pageone') {
    setProgress(0);
  } else if (page ==='pagetwo') {
    setProgress(25);
  } else if (page==='pagethree') {
    setProgress(50)
  } else if (page==='pagefour') {
    setProgress(75)
  } else if (page ==='pagefive') {
    setProgress(100)
  }
});

  return (
    <>
      <div className="progressBar">
        <div
          className="progressBar-step"
          style={{ left: "0%", "transition-duration": "300ms" }}
        >
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => {
              if(CallExpertData.CompanyIndustry.length!==0){
              onPageNumberClick("1");
              setAccomplished(true);
              }
            }}
          >
            {progress >= 25 ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2 29.2L31.3 15.1L28.5 12.3L17.2 23.6L11.5 17.9L8.7 20.7L17.2 29.2ZM20 40C17.2333 40 14.6333 39.4747 12.2 38.424C9.76667 37.3747 7.65 35.95 5.85 34.15C4.05 32.35 2.62533 30.2333 1.576 27.8C0.525334 25.3667 0 22.7667 0 20C0 17.2333 0.525334 14.6333 1.576 12.2C2.62533 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.62467 12.2 1.574C14.6333 0.524667 17.2333 0 20 0C22.7667 0 25.3667 0.524667 27.8 1.574C30.2333 2.62467 32.35 4.05 34.15 5.85C35.95 7.65 37.3747 9.76667 38.424 12.2C39.4747 14.6333 40 17.2333 40 20C40 22.7667 39.4747 25.3667 38.424 27.8C37.3747 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.3747 27.8 38.424C25.3667 39.4747 22.7667 40 20 40Z"
                  fill="#3EB489"
                />
              </svg>
            ) : (
              1
            )}
          </div>
        </div>
        <div
          className="progressBar-step"
          style={{ left: "25%", "transition-duration": "300ms" }}
        >
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => {
              if(CallExpertData.CompanySize.length!==0){
              onPageNumberClick("2");
              setAccomplished(true);
              }
            }}
          >
            {progress >= 50 ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2 29.2L31.3 15.1L28.5 12.3L17.2 23.6L11.5 17.9L8.7 20.7L17.2 29.2ZM20 40C17.2333 40 14.6333 39.4747 12.2 38.424C9.76667 37.3747 7.65 35.95 5.85 34.15C4.05 32.35 2.62533 30.2333 1.576 27.8C0.525334 25.3667 0 22.7667 0 20C0 17.2333 0.525334 14.6333 1.576 12.2C2.62533 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.62467 12.2 1.574C14.6333 0.524667 17.2333 0 20 0C22.7667 0 25.3667 0.524667 27.8 1.574C30.2333 2.62467 32.35 4.05 34.15 5.85C35.95 7.65 37.3747 9.76667 38.424 12.2C39.4747 14.6333 40 17.2333 40 20C40 22.7667 39.4747 25.3667 38.424 27.8C37.3747 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.3747 27.8 38.424C25.3667 39.4747 22.7667 40 20 40Z"
                  fill="#3EB489"
                />
              </svg>
            ) : (
              2
            )}
          </div>
        </div>
        <div
          className="progressBar-step"
          style={{ left: "50%", "transition-duration": "300ms" }}
        >
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => {
              if(CallExpertData.Designation.length!==0){
              onPageNumberClick("3");
              setAccomplished(true);
              // nextPageNumber("3");
              }
            }}
          >
            {progress >= 75 ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2 29.2L31.3 15.1L28.5 12.3L17.2 23.6L11.5 17.9L8.7 20.7L17.2 29.2ZM20 40C17.2333 40 14.6333 39.4747 12.2 38.424C9.76667 37.3747 7.65 35.95 5.85 34.15C4.05 32.35 2.62533 30.2333 1.576 27.8C0.525334 25.3667 0 22.7667 0 20C0 17.2333 0.525334 14.6333 1.576 12.2C2.62533 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.62467 12.2 1.574C14.6333 0.524667 17.2333 0 20 0C22.7667 0 25.3667 0.524667 27.8 1.574C30.2333 2.62467 32.35 4.05 34.15 5.85C35.95 7.65 37.3747 9.76667 38.424 12.2C39.4747 14.6333 40 17.2333 40 20C40 22.7667 39.4747 25.3667 38.424 27.8C37.3747 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.3747 27.8 38.424C25.3667 39.4747 22.7667 40 20 40Z"
                  fill="#3EB489"
                />
              </svg>
            ) : (
              3
            )}
          </div>
        </div>
        <div
          className="progressBar-step"
          style={{ left: "75%", "transition-duration": "300ms" }}
        >
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => {
              if(CallExpertData.Query.length!==0){
              onPageNumberClick("4");
              setAccomplished(true);
              // nextPageNumber("4");
              }
            }}
          >
            {progress >= 100 ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2 29.2L31.3 15.1L28.5 12.3L17.2 23.6L11.5 17.9L8.7 20.7L17.2 29.2ZM20 40C17.2333 40 14.6333 39.4747 12.2 38.424C9.76667 37.3747 7.65 35.95 5.85 34.15C4.05 32.35 2.62533 30.2333 1.576 27.8C0.525334 25.3667 0 22.7667 0 20C0 17.2333 0.525334 14.6333 1.576 12.2C2.62533 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.62467 12.2 1.574C14.6333 0.524667 17.2333 0 20 0C22.7667 0 25.3667 0.524667 27.8 1.574C30.2333 2.62467 32.35 4.05 34.15 5.85C35.95 7.65 37.3747 9.76667 38.424 12.2C39.4747 14.6333 40 17.2333 40 20C40 22.7667 39.4747 25.3667 38.424 27.8C37.3747 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.3747 27.8 38.424C25.3667 39.4747 22.7667 40 20 40Z"
                  fill="#3EB489"
                />
              </svg>
            ) : (
              4
            )}
          </div>
        </div>
        <div
          className="progressBar-step"
          style={{ left: "100%", "transition-duration": "300ms" }}
        >
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => {
            const  prevData = {
                Designation: "Manager/DM",
                Query:"No Query",
                CompanyEmail:"",
                CompanySize: "1-100",
                CompanyIndustry: ["None","None"],
              }
              dispatch(updateCallExpertData(prevData));
              onPageNumberClick("5");
              setAccomplished(true);
              // nextPageNumber("5");
              
            }}
          >
            5{" "}
          </div>
        </div>
        <div className="progression" style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
};

export default PopupProgressBar;
