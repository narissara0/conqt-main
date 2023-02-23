import React, { useState } from 'react'
import './getcall.css'
import Avtar from '../../Assets/Svg/callAvtar.svg'
import callIcon from '../../Assets/Svg/call.svg';
import ReactModal from "react-modal";
// import HomePagePopup from "../Popup/HomePagePopup.jsx";
import HomePagePopup from '../HomePage/Popup/HomePagePopup';

const GetCall = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [popup, setPopup] = useState(false);

    const onClickSignIcon = () => {
        setPopup(true);
    };

    const onRequestClose = (close) => {
        setIsOpen(close);
    };
    return (
        <>
            {/* <div className='getcal-main-page'>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className=' d-flex align-items-center justify-content-center'>
                            <div>
                                <img src={Avtar} alt=""
                                    style={{ width: "70px" }}
                                />
                            </div>
                            <div>
                                <p>We love taking your call! <br />
                                    <span>Get Advice from Our  Software Experts</span>
                                </p>
                            </div>
                        </div>
                        <div className=''
                            style={{}}
                        >
                            <button className='call-btn'>
                                <img src={callIcon} alt="" /> <span>Get Expert Call</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='getcal-main-page py-3'>
                <div className="container get-call-sm">
                    <div className=' row align-items-center justify-content-between'>
                        <div className="col-12 col-lg-6 responsive-get-call">
                            <div className='d-flex align-items-center justify-content-center'>
                                <div>
                                    <img src={Avtar} alt=""
                                        style={{ width: "70px" }}
                                    />
                                </div>
                                <div className='' style={{ paddingLeft: "15px" }}>
                                    <div>
                                        <p className='pt-3 get-call-header'>We love taking your call! <br />
                                            <span className='get-call-sub-header'>
                                                Get Advice from Our  Software Experts
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className="res-get-btn">
                                    <button className='call-btn px-4 py-2' onClick={() => setIsOpen(true)}>
                                        <img src={callIcon} alt=""
                                            style={{ width: "15px" }}
                                        />
                                        <span style={{ marginLeft: "5px" }}> Get Expert Call</span>
                                    </button>
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
                </div>
            </div>
        </>
    )
}

export default GetCall