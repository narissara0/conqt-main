import React from 'react'
import './footerbottom.css'
import { appScreen } from '../../Content/app.content'

const FooterBottom = () => {
    return (
        <>
            <div className='bottom-footer'>
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='footer-bottom-content pt-3'>
                        {appScreen.BOTTOMCONTENT}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FooterBottom