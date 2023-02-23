import React from "react";
import "./growbus.css";
import GrowBusIcon from "../../Assets/Svg/growBusIcon.svg";
import { GrowBusinessContent } from "../../Content/homepage.content";
import Button from "../Button";

const GrowBusiness = () => {
    return (
        <>
            <div className="container py-4">
                <div className="row align-items-center justify-content-between my-5">
                    <div className="col-12 col-md-6 res-sm">
                        <img src={GrowBusIcon} alt="" className="growBusIcon" />
                    </div>
                    <div className="col-12 col-md-6 grow-bus-sm">
                        <h1 className="grow-header">{GrowBusinessContent.HEADER}</h1>
                        <p className="grow-para">{GrowBusinessContent.PARAGRAPGH}</p>
                        {/* <button className='grow-btn'>Start Selling</button> */}
                        <div>
                            <a href="https://login.conqt.com/login">
                            <Button
                                backgroundColor={"#3EB489"}
                                buttonName={"Start Selling"}
                                color={"white"}
                            />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GrowBusiness;
