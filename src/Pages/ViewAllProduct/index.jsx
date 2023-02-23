import React, { useState, useEffect } from "react";
import "./viewallproduct.css";
import AllProductCard from "../../Components/HomePage/AllProducts/AllProductCard";
import HomePageWithSideNav from "../../Layouts/HomeWithSideLayout";
import HomePageLayout from "../../Layouts/HomePageLayout";
import RatingIcon from "../../Assets/Svg/rating.svg";
import { useDispatch, useSelector } from "react-redux";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";
import ReactPaginate from "react-paginate";

const ViewAllProduct = () => {
    const { AllProducts } = useSelector((state) => state.allProducts);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(AllProducts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(AllProducts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, AllProducts]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % AllProducts.length;
        setItemOffset(newOffset);
    };

    return (
        <HomePageLayout>
            <div className="container">
                <div>
                    <h3 className="top-10-products">Top 10 Products</h3>
                    <hr style={{ marginTop: "-10px" }} />
                </div>
                <div className="row">
                    {AllProducts.slice(9, 19).map((e) => {
                        return (
                            <div className="col-12 col-lg-4 col-xxl-3 my-3 sm-responsive">
                                <AllProductCard
                                    id={e.id}
                                    image={e.image_url}
                                    CardTopName={e.category_name}
                                    title={e.product_name.replace(/^(.{30}[^\s]*).*/, "$1")}
                                    rating={RatingIcon}
                                    content={parse(
                                        e.product_description.substring(0,120).replace(/^(.{100}[^\s]*).*/, "$1")
                                    )}
                                    price={"Price On Request"}
                                    getButton={"Get Pricing"}
                                />
                            </div>
                        );
                    })}
                </div>
                <div>
                    <h3 className="top-10-products pt-2">All Products</h3>
                    <hr style={{ marginTop: "-10px" }} />
                </div>
                <div className="row">
                    {currentItems.map((e) => {
                        return (
                            <div className="col-12 col-lg-4 col-xxl-3 my-3 sm-responsive">
                                <AllProductCard
                                    id={e.id}
                                    image={e.image_url}
                                    CardTopName={e.category_name}
                                    title={e.product_name.replace(/^(.{30}[^\s]*).*/, "$1")}
                                    rating={RatingIcon}
                                    content={parse(
                                        e.product_description.substring(0,120).replace(/^(.{100}[^\s]*).*/, "$1")
                                    )}
                                    price={"Price On Request"}
                                    getButton={"Get Pricing"}
                                />
                            </div>
                        );
                    })}
                </div>
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName="page-numbers"
                        previousLinkClassName="page-numbers"
                        nextLinkClassName="page-numbers"
                        activeLinkClassName="active"
                    />
                </div>
            </div>
        </HomePageLayout>
    );
};

export default ViewAllProduct;
