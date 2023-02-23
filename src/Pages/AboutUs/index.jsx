import React, { useEffect, useRef } from "react";
import "./aboutUs.css";
import HomePageLayout from "../../Layouts/HomePageLayout";
import WhatIsConqt from "../../Components/WhatIsConqt/WhatIsConqt";
import Mission from "../../Components/Mission/Mission";
import HBanner from "./../../Components/HBanner/index";
import History from "../../Components/History";
import OurTeam from "../../Components/AboutUs/OurTeam";
import Location from "../../Components/AboutUs/Location";
import NextMove from "../../Components/AboutUs/NextMove";

const AboutUs = () => {
    // const usa = useRef<HTMLInputElement>(null);
    const usa = React.createRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HomePageLayout>
            <div ref={usa}>
                <HBanner title={"ABOUT"} spanName={"US"} />
            </div>

            <WhatIsConqt />
            <Mission />
            <History />
            <div className="py-3">
                <OurTeam />
            </div>
            <div>
                <NextMove />
            </div>
            <div>
                <Location />
            </div>
        </HomePageLayout>
    );
};

export default AboutUs;
