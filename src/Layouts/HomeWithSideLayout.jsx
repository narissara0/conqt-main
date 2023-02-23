import React from 'react'
import { Grid } from '@mui/material'
import Footer from '../Components/Footer'
import Header from '../Components/HomePage/Navbar/Navbar'
import SideNavigation from '../Components/SideNavigation'

const HomePageWithSideNav = ({ children }) => {
    return (
        <>
            <Grid>
                <Header />
            </Grid>
            <Grid container spacing={2} className="">
                <Grid item xs={12} md={3} lg={2}>
                    <div className='d-none d-lg-block'>
                        <SideNavigation />
                    </div>
                </Grid>
                <Grid item xs={12} md={9} lg={10}>
                    {children}
                </Grid>
            </Grid>
            <Grid>
                <Footer />
            </Grid>
        </>
    )
}

export default HomePageWithSideNav