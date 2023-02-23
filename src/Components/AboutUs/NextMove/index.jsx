import React from 'react';
import './nextmove.css';
import Stepper from '../../../Assets/Svg/stepper.svg'
import { NextMoveContent } from '../../../Content/NextMove.content';

const NextMove = () => {
    return (
        <>
            <section className='py-5' style={{ backgroundColor: "#F8F8F8", marginTop: "-15px" }}>
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-6'>
                            <h1>What is <br />the Next  Move ?</h1>
                            <div style={{ width: "70%", color: "#000000" }}>
                                <hr />
                            </div>
                        </div>

                        <div className='col-12 col-md-6 d-flex'>
                            <div>
                                <img src={Stepper} alt=""
                                    style={{ height: "400px" }}
                                />
                            </div>
                            <div className='px-4'>
                                <div>
                                    <h4 style={{ color: "#3EB489" }}>{NextMoveContent.HEADER1}</h4>
                                    <p>{NextMoveContent.PARA1}</p>
                                </div>
                                <div className='next-move-padding'>
                                    <h4 style={{ color: "#3EB489" }}>{NextMoveContent.HEADER2}</h4>
                                    <p>{NextMoveContent.PARA2}</p>
                                </div>
                                <div>
                                    <h4 style={{ color: "#3EB489" }}>{NextMoveContent.HEADER3}</h4>
                                    <p>{NextMoveContent.PARA3}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NextMove