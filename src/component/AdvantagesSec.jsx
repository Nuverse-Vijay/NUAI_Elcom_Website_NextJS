import Head from 'next/head'
import Image from 'next/image';
import starIcon from "@/asset/images/starIcon.svg";
import errowIcon from "@/asset/images/errowIcon.svg";
import penIcon from "@/asset/images/penIcon.svg";
import headphoneIcon from "@/asset/images/headphoneIcon.svg";

const Advantages = () => {
    return (
        <>
        <div className="advantagesWrap">
            <div className="container">
                <div className="advSec">
                    <div className="advWrapper">
                        <h6 className="label-text">advantages</h6>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="advantagesTtl">
                                <h3>The Elcom advantage</h3>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="advProd">
                                <div className="advprodDtl">
                                    <div className="advImg flex-shrink-0">
                                        <Image src={starIcon} alt="starIcon"/>
                                    </div>
                                    <div className='advText'>
                                        <h5>Trusted quality</h5>
                                        <p>Elcom showcases innovative products bolstered by a legacy of excellence, quality, and trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="advProd">
                                <div className="advprodDtl">
                                    <div className="advImg flex-shrink-0">
                                        <Image src={errowIcon} alt="errowIcon"/>
                                    </div>
                                    <div className='advText'>
                                        <h5>Extensive product range</h5>
                                        <p>Elcom showcases innovative products bolstered by a legacy of excellence, quality, and trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="advProd">
                                <div className="advprodDtl">
                                    <div className="advImg flex-shrink-0">
                                        <Image src={penIcon} alt="penIcon"/>
                                    </div>
                                    <div className='advText'>
                                        <h5>Smart product customization</h5>
                                        <p>Elcom showcases innovative products bolstered by a legacy of excellence, quality, and trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="advProd">
                                <div className="advprodDtl">
                                    <div className="advImg flex-shrink-0">
                                        <Image src={headphoneIcon} alt="headphoneIcon"/>
                                    </div>
                                    <div className='advText'>
                                        <h5>Exceptional customer support</h5>
                                        <p>Elcom showcases innovative products bolstered by a legacy of excellence, quality, and trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Advantages;