import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import fuseimg from "@/asset/images/fuseimg.webp"
import SectiontitleFull from './layouts/SectiontitleFull';


const ElectromecSec = () => {
    return (
        <>
        <SectiontitleFull/>
            <div className="latestBsec">
                <div className="container">
                    <div className="lbwrap">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="lbgrp">
                                    <div className="lbleft">
                                        <div className='lblabel'>
                                            <h6 className="small-text">Electromechanical Components</h6>
                                            <span>18/05/2023</span>
                                        </div>
                                        <h5>Data Centre World</h5>
                                        <p>A We cordially invite you to visit us at at Data Centre World, Austin Convention Center, Austin Texas, on 9th May to 11th May 2023, Booth No. 735</p>
                                        <div className="btnbox">
                                            <Link className="elcom-btn primary-black-btn" href='#'>read More</Link>
                                        </div>
                                    </div>
                                    <div className='lbimg flex-shrink-0'>
                                        <Image src={fuseimg} alt='fuseimg'/>
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

export default ElectromecSec;