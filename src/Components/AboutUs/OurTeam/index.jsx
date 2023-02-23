import React from "react";
import "./ourteam.css";
import LeftPatch from "../../../Assets/Images/ads-left-patch.png";
import RightPatch from "../../../Assets/Images/ads-right-patch.png";
import ImageCard from "./ImageCard";
import PopIcon from '../../../Assets/Svg/popp.png';
import SAIcon from '../../../Assets/Svg/SAim.png'
import amit from "../../../Assets/Images/Amit.png";
import gazal from "../../../Assets/Images/Gazal.png";
import naman from "../../../Assets/Images/Naman.png";

const OurTeam = () => {
    return (
        <>
            <section>
                <div className="our-team-banner-main py-5">
                    <div className="ads-patches">
                        <img className="ads-left-patch" src={LeftPatch} alt=""></img>
                        <img className="ads-right-patch" src={RightPatch} alt=""></img>
                    </div>
                    <div style={{ marginTop: "-300px" }}>
                        <div className="d-flex flex-column align-items-center justify-content-center skill-res">
                            <h2 style={{ color: "#3EB489" }}>Our Team</h2>
                            <h1 style={{ color: "white" }}>
                                Get To Know The Faces Behind ConQt{" "}
                                {/* <span style={{ color: "#3EB489" }}>Team</span>{" "} */}
                            </h1>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center skill-res-img">
                                    <ImageCard
                                        image={naman}
                                        name={"Naman Narayan"}
                                        role={"Founder"}
                                    />
                                </div>
                                <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center skill-res-img">
                                    <ImageCard
                                        image={gazal}
                                        name={"Gazal Papriwal"}
                                        role={"Co-Founder"}
                                    />
                                </div>
                                <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center skill-res-img">
                                    <ImageCard
                                        image={PopIcon}
                                        name={"Dr. Poppong"}
                                        role={"Advisor"}
                                    />
                                </div>
                                <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center skill-res-img">
                                    <ImageCard
                                        image={SAIcon}
                                        name={"Dr. Sontipee Aimmanee"}
                                        role={"Advisor"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurTeam;
