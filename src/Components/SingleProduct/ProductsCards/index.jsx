import React from 'react'
import './productscards.css'
import MS365 from '../../../Assets/Svg/ms365.svg';

const ProductsCards = () => {
    return (
        <>
            <div className='container'>

                <div className="pro-card">
                    <div className='d-flex align-items-center justify-content-center'
                        style={{ height: "220px" }}
                    >
                        <img src={MS365} alt="" />
                    </div>
                    <div className='p-3'>
                        <h4>Microsoft Office 365 Enterprise E5</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCards