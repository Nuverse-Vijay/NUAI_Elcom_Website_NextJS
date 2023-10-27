import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LogoIcon1 from '@/asset/images/Spotify-icon.svg'
import LogoIcon2 from '@/asset/images/Google-icon.svg'
import LogoIcon3 from '@/asset/images/Pinterest-icon.svg'
import LogoIcon4 from '@/asset/images/Stripe-icon.svg'
import LogoIcon5 from '@/asset/images/Reddit-icon.svg'

const TrustedCompoSlider = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear'
      };
    return (
        <div className="truecomp-sec">
            <div className="container">
                <h5>Trusted by the world's most innovative companies</h5>
                <div className="slider-wrap">
                    <Slider {...settings}>
                        <div className="logo-box">
                            <Image src={LogoIcon1} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon2} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon3} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon4} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon5} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon1} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon2} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon3} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon4} />
                        </div>
                        <div className="logo-box">
                            <Image src={LogoIcon5} />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default TrustedCompoSlider;