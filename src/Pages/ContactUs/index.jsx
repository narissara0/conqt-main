import React ,{useEffect}from 'react';
import FormCompo from '../../Components/ContactUsCompo/FormCompo';
import ContactTop from '../../Components/ContactUsCompo/TopCompo';
import HBanner from '../../Components/HBanner';
import HomePageLayout from '../../Layouts/HomePageLayout';
import './contactUs.css'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <HomePageLayout>
            <HBanner
                title={"CONTACT"}
                spanName={"US"}
            />
            <ContactTop />
            <div>
                <FormCompo />
            </div>
        </HomePageLayout>
    )
}

export default ContactUs