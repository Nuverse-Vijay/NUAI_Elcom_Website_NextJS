import Image from "next/image"
import Link from 'next/link';
import starIcon from "@/asset/images/starIcon.svg"
import SectionTitle from "./layouts/SectionTitle";


const KeyHighlight = () => {
    return (
        <>
            <div className="keyhighwrap">
                <SectionTitle/>
                <div className="container">
                    {/* <div className="keyWrapper">
                        <div className="keyTtl">
                            <h6 className="label-text">advantages</h6>
                            <h3>Key highlights</h3>
                        </div>
                    </div> */}
                    <div className="keyNotes">
                        <div className="khnotes">
                            <div className="khdtl">
                                <div className="khnotesimg">
                                    <Image src={starIcon} alt="starIcon"/>
                                </div>
                                <div className="khtext">
                                    <p>Our R&D facility has gained recognition by DSIR (Department of Scientific and Industrial Research, GOI).</p>
                                </div>
                            </div>
                        </div>
                        <div className="khnotes">
                            <div className="khdtl">
                                <div className="khnotesimg">
                                    <Image src={starIcon} alt="starIcon"/>
                                </div>
                                <div className="khtext">
                                    <p>Our R&D facility has gained recognition by DSIR (Department of Scientific and Industrial Research, GOI).</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="khnotes">
                            <div className="khdtl">
                                <div className="khnotesimg">
                                    <Image src={starIcon} alt="starIcon"/>
                                </div>
                                <div className="khtext">
                                    <p>Our R&D facility has gained recognition by DSIR (Department of Scientific and Industrial Research, GOI).</p>
                                </div>
                            </div>
                        </div>
                        <div className="khnotes">
                            <div className="khdtl">
                                <div className="khnotesimg">
                                    <Image src={starIcon} alt="starIcon"/>
                                </div>
                                <div className="khtext">
                                    <p>Our R&D facility has gained recognition by DSIR (Department of Scientific and Industrial Research, GOI).</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="khnotes">
                            <div className="khdtl">
                                <div className="khnotesimg">
                                    <Image src={starIcon} alt="starIcon"/>
                                </div>
                                <div className="khtext">
                                    <p>Our R&D facility has gained recognition by DSIR (Department of Scientific and Industrial Research, GOI).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyHighlight;