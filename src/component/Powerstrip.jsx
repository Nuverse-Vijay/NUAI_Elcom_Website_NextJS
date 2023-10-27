import Image from "next/image"
import Link from 'next/link';
import React from "react";
import PowerStripImg from "@/asset/images/powerstripimg.webp"


const PowerStrip = () => {
    return (
        <>
         <div className="stripwrap">
            <div className="container">
                <div className="stripwrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="stripdtl">
                                <h6 className="label-text">NEW</h6>
                                <h2>Introducing the new Power Strip </h2>
                                <p>Functionality. Style. Everyday Convenience.</p>
                                <div className="btnbox">
                                    <Link className="elcom-btn primary-btn" href='#'>view Product</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="stripimg">
                                <Image src={PowerStripImg} alt="PowerStripImg"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default PowerStrip;