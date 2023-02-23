import React from 'react'

const Button = ({ backgroundColor, buttonName, color }) => {
  return (
    <>
      <button style={{
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
        padding: "8px 15px",
        borderRadius: "5px"
      }}>
        {buttonName}
      </button>
    </>
  )
}

export default Button