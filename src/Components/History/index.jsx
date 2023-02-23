import React from "react";
import { AboutUsContent } from "../../Content/AboutUs.content";
import "../../Styles/Styles.css";
import HistoryIcon from "../../Assets/Images/HistoryIcon.png";
import './history.css'

const History = () => {
    return (
        <>
            <div className="">
                <div className="our-history-main my-5">

                    <div className="col-12 col-md-6 history-res-sm ">
                        <img
                            style={{ width: "100%" }}
                            src={HistoryIcon}
                            alt=""

                        />
                    </div>
                    <div
                        className="col-12 col-md-6 history-content-res-sm"
                        style={{ padding: "50px" }}
                    >
                        {/* <h1 className="write-review-header">
                            {AboutUsContent.HISTORYHEADER}
                        </h1> */}
                        {/* <hr className="what-is-conqt-line d-none d-md-block"></hr> */}
                        <p className="write-review-para ">It's Easy with ConQt,</p>
                        <p className="write-review-para ">

                            {AboutUsContent.HISTORYCONTENT}
                        </p>
                    </div>

                </div>
            </div>
            {/* <div className="d-flex align-items-center justify-content-between">
                <div className="col-12 col-md-6 ">
                    <img src={HistoryIcon} alt=""

                    />
                </div>
                <div className="col-12 col-md-6">
                    <h1> hello</h1>
                </div>
            </div> */}
        </>
    );
};

export default History;
