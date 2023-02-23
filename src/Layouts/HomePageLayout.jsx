import React from 'react'
import Header from '../Components/HomePage/Navbar/Navbar';
import Footer from '../Components/Footer';

const HomePageLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    )
}

export default HomePageLayout