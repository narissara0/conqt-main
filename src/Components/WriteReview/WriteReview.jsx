// import React from "react";
// import "../../Styles/Styles.css";
// import "./WriteReview.css";
// import { WriteReviewContent } from "../../Content/homepage.content";
// import WriteReviewImg from "../../Assets/Images/write-review.png";


// const WriteReview = () => {
//   return (
//     <div className="write-review-main">
//       <div className="write-review-header-content">
//         <h1 className="write-review-header">
//           {WriteReviewContent.HEADER}
//           <br />
//           {WriteReviewContent.HEADERTWO}
//           <br />
//           {WriteReviewContent.HEADERTHREE}
//         </h1>
//         <p className="write-review-content">{WriteReviewContent.CONTENT}</p>
//         <button className="write-review-btn">Write a Review</button>
//       </div>
//       <div style={{ marginLeft: "85px" }}>
//         <img className="write-review-img" src={WriteReviewImg} alt=""></img>
//       </div>
//     </div>
//   );
// };

// export default WriteReview;


import React from 'react'
import "../../Styles/Styles.css";
import "./WriteReview.css";
import { WriteReviewContent } from "../../Content/homepage.content";
import WriteReviewImg from "../../Assets/Svg/wr.svg";
import Button from '../Button';

const WriteReview = () => {
    return (
        <>
            <div className='container py-4'>
                <div className="row align-items-center justify-content-between">

                    <div className='col-12 col-md-6 write-review-bus-sm'>
                        <h1 className='write-review-header'>
                            {WriteReviewContent.HEADER}
                        </h1>
                        <h1 className='write-review-header'>
                            {WriteReviewContent.HEADERTWO}
                        </h1>
                        <h1 className='write-review-header'>
                            {WriteReviewContent.HEADERTHREE}
                        </h1>
                        <p className='write-review-para '>{WriteReviewContent.CONTENT}</p>
                        {/* <button className='write-review-btn'>Write a Review</button> */}
                        <div>
                            {/* <Button
                backgroundColor={"#3EB489"}
                buttonName={"Write a Review"}
                color={"white"}
              /> */}
                        </div>
                    </div>

                    <div className='col-12 col-md-6 res-sm'>
                        <img src={WriteReviewImg} alt=""
                            className='write-review-img'

                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WriteReview