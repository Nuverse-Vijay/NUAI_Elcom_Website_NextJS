const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "./homebanner/slide1";
import slide2 from "./homebanner/slide2";
import slide3 from "./homebanner/slide3";
import slide4 from "./homebanner/slide4";
import bannerimage1 from "./homebanner/bannerimage1";
import bannerimage2 from "./homebanner/bannerimage2";

const Banner = () => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1000,

    };
    const data = [
        {
            id: '0',
            slidebg: slide1(),
            title: 'Proven solutions with exceptional value',
            rightimg: bannerimage1(),
            btnlink: '',
            btntext: 'Our Products',
            bannertext: 'Elcom International offers a diverse range of proven products that provide exceptional value to our customers',
        },
        {
            id: '1',
            slidebg: slide2(),
            title: 'Over four decades of reliable innovation 2',
            rightimg: '',
            btnlink: '',
            btntext: 'Our journey',
            bannertext: 'Elcom International is a trusted leader in the Electromechanical and Electronic Components Industry',
        },
        {
            id: '2',
            slidebg: slide3(),
            title: 'Over four decades of reliable innovation 2',
            rightimg: '',
            btnlink: '',
            btntext: 'Our journey',
            bannertext: 'Elcom International is a trusted leader in the Electromechanical and Electronic Components Industry',
        },
        {
            id: '3',
            slidebg: slide4(),
            title: 'Over four decades of reliable innovation 2',
            rightimg: bannerimage2(),
            btnlink: '',
            btntext: 'Our journey',
            bannertext: 'Elcom International is a trusted leader in the Electromechanical and Electronic Components Industry',
        }
    ]

    return (
        <div className='bannerbg'>
            <div className="mainbanner">

                <div className="imgslider">
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div key={item.id} className="sliderwrap">
                                {item.slidebg}
                                <div className="slidergrp">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h2>{item.title}</h2>
                                                <p>{item.bannertext}</p>
                                                <div className="btnbox">
                                                    <Link className="elcom-btn primary-btn" href={item.btnlink}>{item.btntext}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {item.rightimg}
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </div>

    )
}

export default Banner;

