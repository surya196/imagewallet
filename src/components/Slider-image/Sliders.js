import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import landingimg from '../assets/images/landing image.png'
import landingimg1 from '../assets/images/landingimage1.png';
import landingimg2 from '../assets/images/landingimage2.png';
import landingimg3 from '../assets/images/landingimage3.png';
import landingimg4 from '../assets/images/landingimage4.png';
import landingimg5 from '../assets/images/landingimage5.png';
import landingimg6 from '../assets/images/landingimage6.png';
import './Sliders.scss'

const Sliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        autoplaySpeed: 6000,
        speed: 3000,

    };
    return (
        <Slider {...settings}>
            <div className='image-wrapper' >
                <img src={landingimg} />
            </div>
            <div className='image-wrapper'>
                <img src={landingimg1} />
            </div>
            <div className='image-wrapper'>
                <img src={landingimg2} />
            </div>
            <div className='image-wrapper'>
                <img src={landingimg3} />
            </div>
            <div className='image-wrapper'>
                <img src={landingimg4} />
            </div>
            <div className='image-wrapper'>
                <img src={landingimg5} />
            </div>
             <div className='image-wrapper'>
             <img src={landingimg6} />
         </div>

        </Slider>
    )
}

export default Sliders