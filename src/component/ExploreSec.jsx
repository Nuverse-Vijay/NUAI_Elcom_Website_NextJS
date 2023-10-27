import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import exploreImg from "@/asset/images/exploreImg.webp";

const ExploreSec = () => {
    return (
        <>
        <div className="exploreWrap">
            <div className="container">
                <div className="explorProduct">
                    <div className="exploreText">
                        <h6 className="label-text">Explore Products</h6>
                        <h5>Elcom's extensive product portfolio is exclusively designed to serve diverse segments of the technology market.</h5>
                        <div className="btnbox"><Link className="elcom-btn primary-btn" href="/">view Product</Link></div>
                    </div>
                    <div className='exploreImg flex-shrink-0'>
                        <Image src={exploreImg} alt='exploreImg'/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExploreSec;