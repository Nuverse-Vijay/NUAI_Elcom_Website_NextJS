const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import React from "react";
import bracker1 from "@/asset/images/bracker1.webp"
import bracker2 from '@/asset/images/bracker2.webp'

const BrackerSec = () => {
    return (
        <>
         <div className="brackerwrap">
            <div className="brackerleft">
                    <Image src={bracker2} alt="bracker2"></Image>
                </div>
                <div className="brackerright">
                    <Image src={bracker1} alt="bracker1"></Image>
                </div>
            <div className="container">
                <div className="brackerdtl">
                    <h6 className="label-text">NEW</h6>
                    <h2>Introducing the new Power Strip </h2>
                    <p>Functionality. Style. Everyday Convenience.</p>
                    <div className="btnbox justify-content-center">
                        <Link className="elcom-btn primary-btn" href='/'>view Product</Link>
                    </div>
                </div>
                
            </div>
         </div>
        </>
    )
}

export default BrackerSec;