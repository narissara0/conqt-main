import React from 'react';
import './singleproduct.css'
import HomePageWithSideNav from '../../../Layouts/HomeWithSideLayout';
import HomePageLayout from '../../../Layouts/HomePageLayout';
import SingleProductTopImage from '../../../Components/SingleProduct/SIngleProductTopImage';
import SingleProductContent from '../../../Components/SingleProduct/TabsContent';
import ProductsCards from '../../../Components/SingleProduct/ProductsCards';
import Youtube from '../../../Components/SingleProduct/Youtube';
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {

    const { SingleProduct } = useSelector((state) => state.singleProductDetails);

    return (
        <HomePageLayout>
            <div className='py-4'>
                <SingleProductTopImage />
            </div>

            <div>
                <SingleProductContent />
            </div>

            <div>
                <Youtube />
            </div>

            {/* <div className='container' style={{ padding: "70px 0px" }}>
                <div className='d-flex align-items-center justify-content-center py-4'>
                    <h2 style={{ fontWeight: "500" }}>More Services in {SingleProduct[0].product_name}</h2>
                </div>
                <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="col-12 col-lg-4">
                        <ProductsCards />
                    </div>

                    <div className="col-12 col-lg-4">
                        <ProductsCards />
                    </div>

                    <div className="col-12 col-lg-4">
                        <ProductsCards />
                    </div>
                </div>
            </div> */}

        </HomePageLayout>
    )
}

export default SingleProduct