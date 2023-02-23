import React from 'react'
// import Icon from '../../../Assets/Svg/digital-marketing-service.svg'
import './services-section.css'

const servicesImages = ({ image, title }) => {
    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center'
                style={{ textAlign: "center" }}>
                <img
                    className='sevices-image'
                    src={image} alt="" />
                <p className='services-name py-1'>{title}</p>
            </div>
        </>
    )
}

export default servicesImages