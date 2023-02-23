import React from "react";
import "../../Styles/Styles.css";
import "./WhyChooseUs.css";
import { WhyChooseUseContent } from "../../Content/homepage.content";
import WhyChooseUsLaptop from "../../Assets/Images/Why-choose-us.png";
const WhyChooseUs = () => {
    return (
        <div className="why-choose-us-main">
            <div className="d-flex align-items-center justify-content-center mbl-res-sm">
                <h1>{WhyChooseUseContent.HEADER}</h1>
            </div>
            <div className="why-choose-us-all-content-main">
                <div className="why-choose-use-content-and-header-left">
                    <h4 style={{ textAlign: "center" }}>
                        {WhyChooseUseContent.CONTENTHEADERONE}
                    </h4>
                    <p className="py-2">{WhyChooseUseContent.CONTENTONE}</p>

                    <h4 style={{ textAlign: "center" }}>
                        {WhyChooseUseContent.CONTENTHEADERTWO}
                    </h4>
                    <p className="py-2">{WhyChooseUseContent.CONTENTTWO}</p>

                    <h4 style={{ textAlign: "center" }}>
                        {WhyChooseUseContent.CONTENTHEADERTHREE}
                    </h4>
                    <p className="py-2">{WhyChooseUseContent.CONTENTTHREE}</p>
                </div>
                <div className="why-choose-us-header-img">
                    <img className="why-choose-us-img" src={WhyChooseUsLaptop} alt=""></img>
                </div>
                <div className="why-choose-use-content-and-header-right">
                    <h4 style={{ textAlign: "center" }}>
                        {WhyChooseUseContent.CONTENTHEADERFOUR}
                    </h4>
                    <p className="py-2">{WhyChooseUseContent.CONTENTFOUR}</p>

                    <h4 style={{ textAlign: "center" }}>
                        {WhyChooseUseContent.CONTENTHEADERFIVE}
                    </h4>
                    <p className="py-2">{WhyChooseUseContent.CONTENTFIVE}</p>

                    <h4 style={{ textAlign: "center" }}>
                        {WhyChooseUseContent.CONTENTHEADERSIX}
                    </h4>
                    <p className="py-2">{WhyChooseUseContent.CONTENTSIX}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
