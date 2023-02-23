import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { updatedSingleProductsData } from "../../../Store/Reducer/SingleProductPageReducer";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { BaseUrl } from "../../../ApiBaseUrl/Api";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";

const AllProductCard = ({
    image,
    CardTopName,
    title,
    rating,
    content,
    price,
    getButton,
    id,
}) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
  
    const onClickGetProduct = () => {
        axios
            .get(
                `${BaseUrl}product/Get-Product-Details?product_id=${id}`
            )
            .then((response) => {
                // console.log(response.data.data, "single products api data");

                dispatch(updatedSingleProductsData(response.data.data));
                navigate("/single-product");
                window.scrollTo(0, 0);
                // setData(response.data.data);
            })
            .catch((error) => console.log(error));

        console.log(data);
    };

    //   const Rate = [4.4,4.5,4.6,4.7,4.8,4.9]
    //   const Rating = Math.floor(Math.random() * parseInt(Rate)) + 1;
    //   console.log(Rating,"Rating");

    return (
        <>
            <section>
                <div className="all-product-card">
                    <div className="all-product-top-name">
                        <p
                            className="d-flex align-items-center justify-content-center py-2"
                            style={{ color: "white", fontSize: "13px" }}
                        >
                            {CardTopName}
                        </p>
                    </div>
                    <div
                        className=" container d-flex align-items-center"
                        style={{ height: "100px" }}
                    >
                        <div style={{ width: "80%" }}>
                            <img
                                style={{ height: "80px", width: "80px" }}
                                src={image}
                                alt=""
                            />
                        </div>
                        <div style={{ width: "120%" }}>
                            <h4 style={{ fontWeight: "500", fontSize: "18px" }}>{title}</h4>
                            {/* <img src={rating} alt="" /> <span>(4.4)</span> */}
                            <div style={{ marginTop: "-25px" }}>
                                <Rate
                                    defaultValue={4.5}
                                    // onChange={onChange}
                                    style={{ fontSize: 40 }}
                                    // allowHalf
                                    // allowClear={true}
                                    disabled={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-3" style={{ height: "70px", paddingTop: "15px" }}>
                        <p className="all-products-content">{content} </p>
                    </div>

                    <div className="all-products-hr-and-btn">
                        <div className="px-3">
                            <hr />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between px-4">
                        <div>
                            <h6 style={{ fontWeight: 500 }}>{price}</h6>
                        </div>

                        <div onClick={onClickGetProduct}>
                            <h5 style={{ fontWeight: 500 }} className="get-btn">{getButton}</h5>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProductCard;
