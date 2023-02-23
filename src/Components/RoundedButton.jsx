import React from 'react'

const RoundedButton = ({ backgroundColor, color, buttonName, image, onClick }) => {
    return (
        <>
            <button style={{
                color: `${color}`,
                backgroundColor: `${backgroundColor}`,
                padding: "6px 25px",
                borderRadius: "20px",
            }}
                onClick={onClick}
            >
                <img
                    style={{ color: `${color}` }}
                    src={image} alt="" />
                {buttonName}
            </button>
        </>
    )
}

export default RoundedButton