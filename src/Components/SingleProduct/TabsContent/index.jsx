import React, { useState } from 'react'
import './tabsContent.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from "react-redux";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";

const SingleProductContent = () => {
    const { SingleProduct } = useSelector((state) => state.singleProductDetails);

    //  console.log(SingleProduct[0].compatibility,"SingleProduct[0].compatibility")
    return (
        <>
            <Tabs>
                <div className="container">
                    <TabList>
                        <Tab>What is {SingleProduct[0].product_name} </Tab>
                        <Tab>Features</Tab>
                        <Tab>Specifications</Tab>
                        <Tab>Compatibility</Tab>
                    </TabList>
                </div>

                <div className="container">
                    <div className="single-product-content">
                        <TabPanel>
                            <p style={{ color: "black" }}>{parse(SingleProduct[0].product_information)}
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <p style={{ color: "black" }} >
                            {parse(SingleProduct[0].features)}
                            </p>

                        </TabPanel>
                      
                        <TabPanel>
                        <p style={{ color: "black" }} >
                            {parse(SingleProduct[0].specifications)}
                            </p>
                           
                        </TabPanel>

                        <TabPanel>
                            <p style={{ color: "black" }}>
                            {parse(SingleProduct[0].compatibility)}
                            </p>
                        </TabPanel>
                    </div>
                </div>

            </Tabs>
        </>
    )
}

export default SingleProductContent