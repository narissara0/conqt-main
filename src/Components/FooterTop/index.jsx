import React from 'react'
import './footertop.css'
import MailIcon from '../../Assets/Svg/mailFT.svg'
import LinkedinIcon from '../../Assets/Svg/FTLinkedin.svg'

const FooterTop = () => {
    return (
        <>
            <div className='top-footer py-2'>
                <div className="container">
                    <div className=' row d-flex align-items-center justify-content-between'>
                        <div className="col-12 col-lg-6 col-md-12">
                            <div className='d-flex align-items-center justify-content-center'>
                                <div>
                                    <img src={MailIcon} alt="" />
                                </div>
                                <div className='' style={{ paddingLeft: "15px" }}>
                                    <div>
                                        <p className='pt-3 sign-footer-top-name'>Signup For The Newsletter <br />
                                            <span className='sign-footer-top-name-b'>
                                                We’ll never share your email address with a third party.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className='d-flex align-items-center'>
                                    <div
                                        className='col-sm-12'
                                        style={{ paddingRight: "30px", }}
                                    >
                                        <input type="text"
                                            // placeholder='Your Email Address'
                                            style={{
                                                border: "0.5px solid gray",
                                                height: "36px",
                                            }}
                                        />
                                        <span>
                                            <button className='footer-subscribe'
                                                style={{ height: "36px", }}
                                            >Subscribe</button>
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className="col-sm-12">
                                            <img src={LinkedinIcon} alt=""
                                                style={{ paddingRight: "10px", width: "36px" }}
                                            />
                                            <span className='footer-top-linkedin'>LinkedIn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-12 col-lg-4 input-div">
                            <input type="text"
                                className='input-subscribe'
                            />
                            <span>
                                <button className='footer-subscribe'>Subscribe</button>
                            </span>
                        </div> */}
                        <div className="col-12 col-lg-2 footer-top-linkedin">
                            <img
                                className=''
                                src={LinkedinIcon} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterTop
