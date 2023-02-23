import React from "react";
import { AboutUsContent } from "../../Content/AboutUs.content";
import QuestionMark from "../../Assets/Images/Question-mark.png";
import "./WhatIsConqt.css";
import "../../Styles/Styles.css";

const WhatIsConqt = () => {
    return (
        <>
            <div className="">
                <div className="my-5 what-is-conqt-main">
                    <div className="col-12 col-md-6 res-content" style={{ padding: "50px" }}>
                        <h1 className="write-review-header">
                            {AboutUsContent.WHATISCONQTHEADER}
                        </h1>
                        <hr className="what-is-conqt-line d-none d-md-block"></hr>

                       <p className="write-review-para ">
                            {AboutUsContent.WHATISCONQTDESCRIPITON1}
                        </p>
                        <p className="write-review-para ">
                            {AboutUsContent.WHATISCONQTDESCRIPITON2}
                        </p>
                    </div>

                    <div className="col-12 col-md-6 res-sm">
                        <img
                            src={QuestionMark}
                            alt=""
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatIsConqt;
