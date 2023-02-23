import React from "react";
import "../../Styles/Styles.css";
import "./Mission.css";
import LeftPatch from "../../Assets/Images/ads-left-patch.png";
import RightPatch from "../../Assets/Images/ads-right-patch.png";
import MissionIcon from "../../Assets/Images/Mission.png";
import Values from "../../Assets/Images/Values.png";
import Vision from "../../Assets/Images/Vision.png";
import { AboutUsContent } from "../../Content/AboutUs.content";

const Mission = () => {
    return (
        <section className="mission-main-div">
            <div className="mission-patches">
                <img className="mission-left-patch" src={LeftPatch} alt=""></img>
                <img className="mission-right-patch" src={RightPatch} alt=""></img>
            </div>
            <div className="mission-images-text-div">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4  d-flex align-items-center flex-column">
                            <img
                                style={{ width: "150px", height: "150px" }}
                                src={MissionIcon}
                            ></img>
                            <h2 className="mission-header">MISSION</h2>
                            <p className="mission-text">{AboutUsContent.MISSIONCONTENT}</p>
                        </div>

                        <div className="col-12 col-lg-4 d-flex align-items-center flex-column mission-res">
                            <img style={{ width: "150px", height: "150px" }} src={Vision}></img>
                            <h2 className="mission-header">VISION</h2>
                            <p className="mission-text">{AboutUsContent.VISION}</p>
                        </div>

                        <div className="col-12 col-lg-4 d-flex align-items-center flex-column">
                            <img style={{ width: "150px", height: "150px" }} src={Values}></img>
                            <h2 className="mission-header">VALUES</h2>
                            <p className="mission-text">{AboutUsContent.VALUES}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
