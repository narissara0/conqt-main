import React, { useState, useEffect, CSSProperties } from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";
import RatingIcon from "../../../Assets/Svg/rating.svg";
import AllProductCard from "./AllProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { updatedAllProductsData } from "../../../Store/Reducer/AllProductsReducer";
import FadeLoader from "react-spinners/FadeLoader";
import { BaseUrl } from "../../../ApiBaseUrl/Api";

const HomePageAllProducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    const handleClickViewAllProduct = () => {
        navigate("/view-all-product");
    };

    useEffect(() => {
        axios
            .get(`${BaseUrl}product/Get-All-Products`)
            .then((response) => {
                setLoader(false);
                setData(response.data.data);
                dispatch(updatedAllProductsData(response.data.data));
            })
            .catch((error) => console.log(error));
    }, []);
    // console.log(data);




    return (
        <main className="product-row py-3">
            <div className="content product-column1">
                <center>{loader && <FadeLoader color="#36d7b7" />}</center>
                <div className="title-Product-setion py-3">
                    <h1>ALL PRODUCTS</h1>
                </div>
                {/* {JSON.stringify(data)} */}
                <div className="px-5">
                    <div className="row">
                        {data.slice(0, 8).map((e) => {
                            // console.log(e.id, "id in all products page");
                            // console.log(e.product_description)
                            return (
                                <div className="col-12 col-lg-3 col-md-6 my-3 sm-responsive">
                                    <AllProductCard

                                        id={e.id}
                                        image={e.image_url}
                                        CardTopName={e.category_name}
                                        title={e.product_name.replace(/^(.{20}[^\s]*).*/, "$1")}
                                        rating={RatingIcon}
                                        content={parse(e.product_description.substring(0,80).replace(/^(.{70}[^\s]*).*/, "$1"))}
                                        price={"Price On Request"}
                                        getButton={"Get Pricing"}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="product-view-more">
                    <button onClick={handleClickViewAllProduct} className="p-view-more">
                        View More
                    </button>
                </div>
            </div>
            {/* <div className="product-column2 d-none d-md-block">
                <div className="product-enquiry-div">
                    <button className="product-enquiry">GET INSTANT EXPERT</button>
                </div>
                <div className="product-enquiry-btn">
                    <img
                        style={{ height: "50px", width: "50px" }}
                        src={ProductInquiryBtn}
                        alt=""
                    />
                </div>
            </div> */}
        </main>
    );
};

export default HomePageAllProducts;
