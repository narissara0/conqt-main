import React from 'react';
import './topCompo.css'
import LeftPatch from '../../../Assets/Images/ads-left-patch.png'
import RightPatch from '../../../Assets/Images/ads-right-patch.png'
import Location from '../../../Assets/Svg/location.svg';
import MailIcon from '../../../Assets/Svg/MailG.svg';
import Headset from '../../../Assets/Svg/headset.svg';
import ContactCard from './ContactCard';

const ContactTop = () => {
    return (
        <>
            <section>
                <div className="contact-banner-main">
                    <div className="ads-patches">
                        <img className="ads-left-patch" src={LeftPatch} alt=""></img>
                        <img className="ads-right-patch" src={RightPatch} alt=""></img>
                    </div>
                    <div className="container" style={{ marginTop: "-240px" }}>
                        <div className='d-flex align-items-center justify-content-between contact-top-cards'>
                            <div className='col-12 col-lg-4' style={{ width: "250px", textAlign: "center", height: "160px" }}>
                                <ContactCard
                                    image={Location}
                                    title={"Visit Location"}
                                    content={"ConQt Technology Pte 11 Collyer Quay #17-00, The Arcade Singapore – 049317"}
                                    size={"40px"}
                                />
                            </div>

                            <div className='col-12 col-lg-4 contact-top-card' style={{ width: "200px", textAlign: "center", height: "160px" }}>
                                <ContactCard
                                    image={Headset}
                                    title={"Quick Call Us"}
                                    content={"+66 98 865 6621"}
                                    size={"40px"}
                                />
                            </div>

                            <div className='col-12 col-lg-4' style={{ width: "200px", textAlign: "center", height: "160px" }}>
                                <ContactCard
                                    image={MailIcon}
                                    title={"Mail Us On"}
                                    content={"info@conqt.com"}
                                    size={"40px"}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactTop