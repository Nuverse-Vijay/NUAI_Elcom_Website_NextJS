import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Teamimg from "@/asset/images/Teamimg.webp";
import linkedinwhite from "@/asset/images/linkedinwhite.svg";
import cross from "@/asset/images/cross.svg";


const ShowModal = ({change}) => {
    return (
        <>
        <div className='modalWrap'>
            <div className='modalDtl'>
                <div className='modalImg flex-shrink-0'>
                    <Image src={Teamimg} alt='Teamimg'/>
                </div>
                <div className='modalText'>
                    <div className='modalTtl'>
                        <h6>Mihir Vaze</h6>
                    </div>
                    <div className='teamPost'>
                        <p>Chief Design Officer</p>
                        <Link href="#"><Image src={linkedinwhite} alt='linkedinwhite'/></Link>
                    </div>
                    <div className='teamBrief'>
                        <p>Mihir is an Electronics Engineer with a Master's in Product Design and brings his dire passion for continuous innovation to Elcom. He worked at Crompton Greaves and Samsung before joining Elcom and handles various management roles in the company.</p>
                    </div>
                </div>
                <div className="closebtn">
                    <Link href="#" onClick = {() => change()}><Image src={cross} alt="cross"/></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShowModal;