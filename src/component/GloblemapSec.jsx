import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from "react";
import Location from "../component/Svgs/Location";
import globlemapimg from "@/asset/images/globlemapimg.webp";
import SectionTitle from './layouts/SectionTitle';



const GloblemapSec = () => {
    return (
        <>
        <div className='gmapWrap'>
            <SectionTitle/>
            <div className='container'>
                <div className='gmapWrapper'>
                    {/* <div className='gmapDtl'>
                        <h6 className='label-text'>Global Reach</h6>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='gmapTtl'>
                                <h3>Innovation beyond boundaries</h3>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='gmapTtl'>
                                <p>Elcom is a global leader, serving businesses in India, the U.S.A, UK, Europe, Middle East, Asia Pacific, and Africa. With representatives and channel partners located worldwide, we ensure widespread availability and seamless client connections.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='globleMap'>
                    <div className='mapImg'>
                        <Image src={globlemapimg} alt='globlemapimg'/>
                    </div>
                        <div className='location'>
                            
                                <Link href="/"><Location/></Link>
                            
                        </div>
                    <div className='location-two'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-three'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-four'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-fifth'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-six'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-seven'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-eight'>
                        <Link href="/"><Location/></Link>
                    </div>
                    <div className='location-nine'>
                        <Link href="/"><Location/></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GloblemapSec;