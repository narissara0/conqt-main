import React, { useState } from "react";
import "./homefaq.css";
import { appScreen } from "../../Content/app.content";
import Button from "../Button";
import "../../Styles/Styles.css";

const HomeFAQ = () => {
    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);
    const [faq5, setFaq5] = useState(false);
    const [faq6, setFaq6] = useState(false);
    const [faq7, setFaq7] = useState(false);

    const toggleFaq1 = () => {
        setFaq1(!faq1);
    };

    const toggleFaq2 = () => {
        setFaq2(!faq2);
    };

    const toggleFaq3 = () => {
        setFaq3(!faq3);
    };

    const toggleFaq4 = () => {
        setFaq4(!faq4);
    };
    const toggleFaq5 = () => {
        setFaq5(!faq5);
    };
    const toggleFaq6 = () => {
        setFaq6(!faq6);
    };
    const toggleFaq7 = () => {
        setFaq7(!faq7);
    };
    return (
        <>
            <div className="container" id="faq">
                <div className=" row align-items-center justify-content-between">
                    <div className="col-12 col-md-4 py-3 faq-res-sm">
                        <h3>FAQ</h3>
                        <h1>Frequently</h1>
                        <h1>Asked</h1>
                        <h1>Questions.</h1>
                        <div className="py-2">
                            <a href="https://login.conqt.com/login">
                                <Button
                                    backgroundColor={"#3EB489"}
                                    buttonName={"Selling Products"}
                                    color={"white"}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8  faq-questions-height">
                        <div>
                            <h4 className="faq-sub-head">{appScreen.FAQTOP}</h4>
                            <p className="faq-par">{appScreen.FAQPARA}</p>
                            {/* <div className='d-flex align-items-center justify-content-between'
                                onClick={toggleFaq}
                            >
                                {data.map((d) => (

                                    <>
                                        <div className='d-flex'>
                                            <div>
                                                <p>{d.title}</p>
                                            </div>
                                            <div>
                                                <span>{faq ? "-" : "+"}</span>
                                            </div>
                                            {faq && (
                                                <div>
                                                    <h1>{d.des}</h1>
                                                </div>
                                            )}
                                        </div>
                                    </>


                                ))}

                            </div> */}
                            <div>
                                <div
                                    className="d-flex align-items-center justify-content-between"
                                    onClick={toggleFaq1}
                                >
                                    <div className="faq-question">{appScreen.FAQ1}</div>
                                    <div>
                                        {faq1 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq1 && (
                                    <div className="faqs-answer">
                                        <p>
                                            Getting the project executed can take time. However, you
                                            could get the right resources faster. The key is to list
                                            requirement with as much detail as possible. And, don’t
                                            forget to update your information if there is a change in
                                            what needs to be done. This speeds up the process a lot
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="d-flex align-items-center justify-content-between py-3"
                                    onClick={toggleFaq2}
                                >
                                    <div className="faq-question">{appScreen.FAQ2}</div>
                                    <div>
                                        {faq2 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq2 && (
                                    <div className="faqs-answer">
                                        <p>
                                            Our unique marketplace will connect your listing with
                                            relevant vendors based on their preferences. You’ll then
                                            be able to liaise with vendors directly, using ConQt’s
                                            negotiation functionality, access our payment service and
                                            safely transact. It’s an end-to-end platform
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="d-flex align-items-center justify-content-between"
                                    onClick={toggleFaq3}
                                >
                                    <div className="faq-question">{appScreen.FAQ3}</div>
                                    <div>
                                        {faq3 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq3 && (
                                    <div className="faqs-answer">
                                        <p>
                                            ConQt has a separate portal for vendors to get register.
                                            Upon registration, vendors get an option to choose in
                                            which categories lies their expertise. Once registered,
                                            vendors can see projects from the categories selected and
                                            can apply for projects instantly
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="d-flex align-items-center justify-content-between pt-3"
                                    onClick={toggleFaq4}
                                >
                                    <div className="faq-question">{appScreen.FAQ4}</div>
                                    <div>
                                        {faq4 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq4 && (
                                    <div className="faqs-answer">
                                        <p>
                                            Buyers of services can list their requirements absolutely
                                            free. However, if they want to use our services, there is
                                            also a subscription module which they can opt for. vendors
                                            have to first register by paying a nominal fee of 20 USD
                                            (converted into your local currency). Once registered,
                                            each Vendors can apply for 3 projects for free. After this
                                            subscription Module. See our pricing page for more
                                            information on listing fees and subscription.
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="d-flex align-items-center justify-content-between py-3"
                                    onClick={toggleFaq5}
                                >
                                    <div className="faq-question">{appScreen.FAQ5}</div>
                                    <div>
                                        {faq5 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq5 && (
                                    <div className="faqs-answer">
                                        <p>
                                            When you’re ready to list, we recommend listing down your
                                            requirements with as many details as possible. You will be
                                            asked to mention details like Scope of Work, Timelines for
                                            completion and expected price range for the project (Wont
                                            be shown to the vendors) and any other information
                                            relevant to your business type. With all these details
                                            handy, you can now create a Listing. To get started,
                                            simply select ‘Create Listing’ from our Homepage or
                                            navigate here
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="d-flex align-items-center justify-content-between"
                                    onClick={toggleFaq6}
                                >
                                    <div className="faq-question">{appScreen.FAQ6}</div>
                                    <div>
                                        {faq6 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq6 && (
                                    <div className="faqs-answer">
                                        <p>
                                            As soon as a listing is created, all the Vendors operating
                                            in the space in which the listing is created get notified
                                            over email. The listing also appears in the Announcements
                                            space to all the Vendors. The vendors may choose to apply
                                            to the listing which will be then notified to you. This
                                            way you can see who all have applied for your requirement
                                            and compare and choose the best service provider.
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="d-flex align-items-center justify-content-between pt-3"
                                    onClick={toggleFaq7}
                                >
                                    <div className="faq-question">{appScreen.FAQ7}</div>
                                    <div>
                                        {faq7 ? (
                                            <div className="minus-green">-</div>
                                        ) : (
                                            <div className=" plus-grren">+</div>
                                        )}
                                    </div>
                                </div>
                                {faq7 && (
                                    <div className="faqs-answer">
                                        <p>
                                            As soon as a listing is created in the space in which a
                                            Vendor operates, there is a notification sent to you over
                                            email and the listing also appears in the Announcements
                                            space. You may choose to respond to the listing by opting
                                            to apply for it.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFAQ;
