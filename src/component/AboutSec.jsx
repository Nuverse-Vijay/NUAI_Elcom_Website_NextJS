const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import React from "react";
import mafaImg from "@/asset/images/sec2img.webp"
import SectionTitle from "./layouts/SectionTitle";



const AboutSec =() => {

    return (
        <>
            <div className="manufacturWrap">
                <div className="mafaWrapper">
                        <SectionTitle />
                    <div className="container">
                        {/* <div className="mafaContent">
                            <h5 className="label-text" >About</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mafaText">
                                        <h3>A trusted EM&E components manufacturer</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mafaText">
                                        <p>Elcom International is among the few trustworthy and specialized manufacturers of Electromechanical & Electronic components in India, serving its customers all over the globe since 1981. Our state-of-the-art manufacturing infrastructure and highly equipped testing laboratories have successfully acquired and reliably maintained multiple reputable certification standards.</p>
                                        <div className="btnbox">
                                            <Link className="elcom-btn primary-black-btn" href='#'>Our Story</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="mafaImg product">
                            <Image src={mafaImg} alt="mafaImg"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSec;