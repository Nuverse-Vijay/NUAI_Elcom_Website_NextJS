const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import bbox from '@/asset/images/bbox.png';


const BrackerBox = () => {
    return(
        <div className="brackerboxwrap">
            <div className="container">
                <div className="bboxdtl">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bboxfirst">
                                <div className="bboxwrap">
                                    <h6 className="label-text">NEW</h6>
                                    <h2>Introducing the new Power Strip</h2>
                                    <p>Functionality. Style. Everyday Convenience.</p>
                                    <div className="btnbox"><a className="elcom-btn primary-btn" href="#">view Product</a></div>
                                </div>
                                <div className="bboximg">
                                    <Image src={bbox} alt='bbox'></Image>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bboxfirst lightbg">
                                <div className="bboxwrap">
                                    <h6 className="label-text">NEW</h6>
                                    <h2>Introducing the new Power Strip</h2>
                                    <p>Functionality. Style. Everyday Convenience.</p>
                                    <div className="btnbox justify-content-center"><a className="elcom-btn primary-black-btn" href="#">view Product</a></div>
                                </div>
                                <div className="bboximg">
                                    <Image src={bbox} alt='bbox'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrackerBox;