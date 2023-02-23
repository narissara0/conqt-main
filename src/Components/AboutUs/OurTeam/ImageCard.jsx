import React from 'react';
import Hero from '../../../Assets/Svg/hero.svg';
import './ourteam.css'

const ImageCard = ({ image, name, role }) => {
    return (
        <>
            <div className='my-2'>
                <img src={image} alt=""
                    className='our-img'
                />
                <div className='team-card-name'>
                    <h4>{name}</h4>
                    <p style={{ color: "#3EB489" }}>{role}</p>
                </div>
            </div>

        </>
    )
}

export default ImageCard