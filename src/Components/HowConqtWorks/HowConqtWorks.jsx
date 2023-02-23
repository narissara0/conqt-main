import React from "react";
import ConqtProcess from "../../Assets/Images/conqt-login-process.png";
import "../../Styles/Styles.css";
import "./HowConqtWorks.css";
import {
    HowConqtWorksContent,
    HowConqtWorksHeader,
} from "../../Content/homepage.content";
import MblHowConqt from '../../Assets/Images/sm-hw.svg';
import ConqtPro from '../../Assets/Svg/Newone.svg'


const HowConqtWorks = () => {
    return (
        <div className="how-conqt-works-main py-3">
            <h1 className="d-flex align-items-center justify-content-center how-conqt-header">{HowConqtWorksHeader.HEADER}</h1>
            <span className="how-conqt-works-header-two">
                {HowConqtWorksHeader.HEADERTWO}
            </span>
            <div className="how-conqt-works-content-div">
                <p style={{ width: '550px' }}>{HowConqtWorksContent.CONTENT}</p>
            </div>
            <div>
                <div className="d-none d-md-block" style={{
                    textAlign: "center",
                    marginBottom: "50px"
                }}>
                    <img className="conqt-process" src={ConqtProcess} alt=""></img>
                </div>
                <div className="d-block d-sm-none">
                    <img
                        className="hw-sm-image"
                        src={ConqtPro} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HowConqtWorks;
