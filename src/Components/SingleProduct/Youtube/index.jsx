import React from 'react'
import YouTube from 'react-youtube';
import { useDispatch, useSelector } from "react-redux";
import './youtube.css'

const Youtube = () => {
    const { SingleProduct } = useSelector((state) => state.singleProductDetails);
    // console.log( SingleProduct[0].video_link.split("embed/")[1] ,"video link from store")
    const YoutubeId = SingleProduct[0].video_link.split("embed/")[1]

    const opts = {
        height: '420',
        width: '1000',
        // playerVars: {
        //     autoplay: 1,
        // },
        borderRadius: "10px"
    };
    return (
        <>
            <div className="container d-none d-md-block mb-5">
                <div className='d-flex flex-column align-items-center justify-content-center py-3'>
                    <h2 style={{ fontWeight: "500" }}>Get {SingleProduct[0].product_name} for Business Demo</h2>
                    <p style={{ color: "black" }}>We make it happen! Get your hands on the best solution based on your needs.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center single-pro-yt">
                    <YouTube
                        videoId={YoutubeId}
                    // opts={opts}
                    />
                </div>
            </div>
        </>

    )
}

export default Youtube