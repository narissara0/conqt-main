import React from 'react'

const ContactCard = ({ image, title, content, size }) => {
    return (
        <>
            <div>
                <img src={image} alt=""
                    style={{ width: `${size} `,height:"40px" }}
                />
                <h4 style={{ color: "white", lineHeight: "40px" }}>{title}</h4>
                <p style={{ color: "white", lineHeight: "30px" }}>{content}</p>
            </div>
        </>
    )
}

export default ContactCard