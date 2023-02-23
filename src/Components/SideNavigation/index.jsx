import React from 'react';
import './sidenavigation.css'
import ArrowIcon from '../../Assets/Svg/rightSignArrow.svg'
import PlusIcon from '../../Assets/Svg/plusVector.svg'
import { useNavigate } from "react-router-dom";


const SideNavigation = () => {

    const navigate = useNavigate();
    const onClickAllProducts = () => {
       navigate("/view-all-product")
    }
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 py-3 text-white sidenav-main">
                <div className="sidebar">
                <div className='d-flex align-items-center justify-content-between' onClick={onClickAllProducts}>
                        <p className='side-nav-links'>All Products</p>
                        <img src={ArrowIcon} alt="" />
                        </div>
                    {/* <div className='d-flex align-items-center justify-content-between'>
                        <p className='side-nav-links'>Software</p>
                        <img src={ArrowIcon} alt="" />
                    </div>
                    <div className='d-flex align-items-center justify-content-between py-2'>
                        <p className='side-nav-links'>Hardware</p>
                        <img src={ArrowIcon} alt="" />
                    </div> */}
                    {/* <div style={{ paddingTop: "200px" }} className="d-flex">
                        <span><img src={PlusIcon} alt="" /></span>
                        <p className='side-nav-links px-2'>More Categories</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SideNavigation