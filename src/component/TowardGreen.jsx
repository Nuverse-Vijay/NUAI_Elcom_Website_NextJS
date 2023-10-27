const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import React from "react";
import TowardImg from "@/asset/images/TowardImg.webp"


const TowardGreen = () => {
    return (
        <>
         <div className="towardwrap">
            <div className="towardimg">
                <Image src={TowardImg} alt="TowardImg"></Image>
            </div>
            <div className="towardwrapper">
                <div className="container">
                    <div className="brackerdtl">
                        {/* <h6>NEW</h6> */}
                        <h3>Towards a green future</h3>
                        <p>We look forward to driving towards a sustainable future and creating a greener world.</p>
                        <div className="btnbox justify-content-center">
                            <Link className="elcom-btn primary-btn" href='/'>Show More</Link>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default TowardGreen;