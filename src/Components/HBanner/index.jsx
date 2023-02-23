import React from 'react';
import './hbanner.css'

const HBanner = ({ title, spanName }) => {
    return (
        <>
            <section className='home-banner-contact-us'>
                <div className="d-flex align-items-center justify-content-center">
                    <div style={{ marginTop: "150px" }}>
                        <h1>{title} <span style={{ color: "#3EB489" }}>{spanName}</span></h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HBanner