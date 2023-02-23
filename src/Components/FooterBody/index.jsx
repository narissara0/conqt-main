import React, { useRef, useState } from 'react'
import Styles from '../../Styles/Styles.css'
import './footer.css'
import Logo from '../../Assets/Svg/logo2.0B.svg'
import LocationIcon from '../../Assets/Svg/con-location.svg'
import MailIcon from '../../Assets/Svg/con-mail.svg'
import TimerIcom from '../../Assets/Svg/con-timer.svg'
import ContactIcon from '../../Assets/Svg/con-contact.svg'
import DiscoverIcon from '../../Assets/Svg/discover.svg'
import DoubleCircleIcon from '../../Assets/Svg/doubleCircle.svg'
import JcbIcon from '../../Assets/Svg/jcb.svg'
import PaypalIcon from '../../Assets/Svg/paypal.svg'
import VisaIcon from '../../Assets/Svg/visa.svg'
import DotIcon from '../../Assets/Svg/dot.svg';
import { useNavigate } from 'react-router-dom'
import ReactModal from "react-modal";
import HomePagePopup from '../HomePage/Popup/HomePagePopup'

const FooterBody = () => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(false);

    const onClickSignIcon = () => {
        setPopup(true);
    };

    const onRequestClose = (close) => {
        setIsOpen(close);
    };

    const handleClickHomePage = () => {
        navigate('/')

    }

    const handleClickAbout = () => {
        navigate('/about-us')
    }

    const handleClickContact = () => {
        navigate('/contact-us')
    }
    return (
        <>
            <div className='container'>
                <div className=""
                >
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-3 col-md-6">
                            <div className='sm-log-res'>
                                <div className='footer-abt-height' onClick={handleClickHomePage}>
                                    <img src={Logo} alt="" style={{ width: "140px" }} />
                                </div>
                                <div>
                                    <div className='d-flex'>
                                        <span><img src={LocationIcon} alt="" /></span>
                                        <p className='footer-log-link-names px-2'>ConQt Technology Pte 11 Collyer Quay #17-00, The Arcade Singapore – 049317​</p>
                                    </div>

                                    <div className='d-flex'>
                                        <span><img src={ContactIcon} alt="" /></span>
                                        <p className='footer-log-link-names px-2'>+66 98 865 6621</p>
                                    </div>
                                    <div className='d-flex'>
                                        <span><img src={MailIcon} alt="" /></span>
                                        <p className='footer-log-link-names px-2'>info@conqt.com</p>
                                    </div>
                                    <div className='d-flex'>
                                        <span><img src={TimerIcom} alt="" /></span>
                                        <p className='footer-log-link-names px-2'>Timing (Monday- Friday) <br /> 9:00AM - 6:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 ">
                            <div>
                                <div>
                                    <div className='footer-abt-height'>
                                        <h4 className='footer-headers-name-abt'
                                        >ABOUT CONQT</h4>
                                    </div>
                                    <div className='footer-res'>
                                        <p onClick={handleClickAbout} style={{ cursor: "pointer" }}>About Us</p>
                                        <p onClick={handleClickContact} style={{ cursor: "pointer" }}>Contact Us</p>
                                        {/* <p>Find Vendor</p>
                                        <p>Find Customer</p> */}
                                        {/* <p>ConQt University</p> */}
                                        <p><a className='university-link' href='https://login.conqt.com/conqt-university'>ConQt University</a></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6">
                            <div>
                                <div className='footer-abt-height'>
                                    <h4 className='footer-headers-name-business'
                                    >FOR Businesses</h4>
                                </div>
                                <div className='footer-res'>
                                    <p>FAQ's</p>
                                    {/* <p>Write with Us</p> */}
                                    <p>Sell with Us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6">
                            <div className='d-flex flex-column'>
                                <div className='footer-abt-height'>
                                    <h4 className='footer-headers-name-services'
                                    >SERVICES</h4>
                                </div>
                                <div className='footer-res'>
                                    <p onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>Call Expert</p>
                                    <p>Customer Services</p>
                                </div>
                                <ReactModal
                                    isOpen={isOpen}
                                    contentLabel="Example Modal"
                                    onRequestClose={() => setIsOpen(false)}
                                >
                                    <HomePagePopup close={onRequestClose} />
                                </ReactModal>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                </div>
                <div className='d-flex align-items-center justify-content-center mb-3'>
                    <div>
                        <img src={DoubleCircleIcon} alt="" />
                    </div>
                    <div className='px-3'>
                        <img src={VisaIcon} alt="" />
                    </div>
                    <div>
                        <img src={PaypalIcon} alt="" />
                    </div>
                    <div className='px-3'>
                        <img src={JcbIcon} alt="" />
                    </div>
                    <div>
                        <img src={DiscoverIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterBody