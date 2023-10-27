import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import esgimg from "@/asset/images/esgimg.webp"


const NeweventSec =() => {
    return (
        <>
        <div className="neweventwrap">
            <div className="container">
                <div className="edsec">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='edgrp'>
                                <div className="edleft">
                                    <h6 className="small-text">Seminar</h6>
                                    <h4>Data Centre World</h4>
                                    <h6>9th May - 25th May</h6>
                                    <p>A We cordially invite you to visit us at at Data Centre World, Austin Convention Center, Austin Texas, on 9th May to 11th May 2023, Booth No. 735</p>
                                    <div className="btnbox">
                                        <Link className="elcom-btn tertiary-btn" href='#'>Join</Link>
                                    </div>
                                </div>
                                <div className='edimg flex-shrink-0'>
                                    <Image src={esgimg} alt='esgimg'/>
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

export default NeweventSec;