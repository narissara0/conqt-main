import { Link } from "react-router-dom";
import HomePageIndustriesBG from "../../../Assets/Svg/HomePageIndustriesBG.svg";
import DigitalMarketing from "../../../Assets/Svg/digital-marketing-service.svg";
import Websitedevelopment from "../../../Assets/Svg/webdevelopment-service.svg";
import WordPress from "../../../Assets/Svg/wordpress-service.svg";
import Ecommerce from "../../../Assets/Svg/ecommerce-service.svg";
import Androiddevelopment from "../../../Assets/Svg/android-development-service.svg";
import iOSdevelopment from "../../../Assets/Svg/iosdevelopment-service.svg";
import Outsource from "../../../Assets/Svg/outsource-service.svg";
import ITService from "../../../Assets/Images/technical-support-service.png";
import "./services-section.css"
import LeftPatch from "../../../Assets/Images/ads-left-patch.png";
import RightPatch from "../../../Assets/Images/ads-right-patch.png";
import ServicesImages from "./servicesImages";
import Analysis from '../../../Assets/Svg/Analysis.svg';
import Analytics from '../../../Assets/Svg/Analytics.svg';
import Maintenance from '../../../Assets/Svg/Maintenance.svg';
import Search from '../../../Assets/Svg/Search.svg';
import Users from '../../../Assets/Svg/Users.svg'

const HomePageServicesSection = () => {
    return (
        <>
            <div className="home-service-main-page py-3">
                <div className='d-flex align-items-center justify-content-center py-3'>
                    <h1 style={{ color: "white" }}>Services</h1>
                </div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-6 col-md-3 col-sm-6">

                            <ServicesImages
                                image={DigitalMarketing}
                                title={"Digital Marketing"}
                            />

                        </div>
                        <div className="col-6 col-md-3 col-sm-6">
                            <ServicesImages
                                image={Websitedevelopment}
                                title={"Website development"}
                            />
                        </div>
                        <div className="col-6 col-md-3 col-sm-6">
                            <ServicesImages
                                image={WordPress}
                                title={"WordPress website development"}
                            />
                        </div>
                        <div className="col-6 col-md-3 col-sm-6">
                            <ServicesImages
                                image={Ecommerce}
                                title={"E-commerce development"}
                            />
                        </div>
                    </div>
                    <div className="d-none d-sm-block">
                        <div className="row d-flex align-items-center justify-content-center py-2">
                            <div className="col-6 col-md-3 col-sm-6">

                                <ServicesImages
                                    image={Androiddevelopment}
                                    title={"Android application development"}
                                />

                            </div>
                            <div className="col-6 col-md-3 col-sm-6">
                                <ServicesImages
                                    image={iOSdevelopment}
                                    title={"IOS application development"}
                                />
                            </div>
                            <div className="col-6 col-md-3 col-sm-6">
                                <ServicesImages
                                    image={Outsource}
                                    title={"Outsourcing"}
                                />
                            </div>
                            <div className="col-6 col-md-3 col-sm-6">
                                <ServicesImages
                                    image={ITService}
                                    title={"IT staffing"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block">
                        <div className="row d-flex align-items-center justify-content-center py-2">
                            <div className="col-6 col-md-3 col-sm-6">

                                <ServicesImages
                                    image={Maintenance}
                                    title={"Predictive Maintenance"}
                                />

                            </div>
                            <div className="col-6 col-md-3 col-sm-6">
                                <ServicesImages
                                    image={Search}
                                    title={"FEA Analysis Services"}
                                />
                            </div>
                            <div className="col-6 col-md-3 col-sm-6">
                                <ServicesImages
                                    image={Analysis}
                                    title={"CFD Analysis Services"}
                                />
                            </div>
                            <div className="col-6 col-md-3 col-sm-6">
                                <ServicesImages
                                    image={Analytics}
                                    title={"Data Analytics"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-sm-block">
                        <div className="row d-flex align-items-start py-2">
                            <div className="col-6 col-md-3 col-sm-6">

                                <ServicesImages
                                    image={Users}
                                    title={"Cloud Services"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container py-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="home-services-view-btn">View more</button>
                    </div>
                </div> */}
            </div>

        </>
    );
};

export default HomePageServicesSection;