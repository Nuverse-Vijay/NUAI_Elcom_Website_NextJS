import Image from "next/image"
import Link from 'next/link';
import puimg from "@/asset/images/puimg.webp"


const PowerunitSec = () => {
    return (
        <>
        <div className="col-lg-6">
            <div className="puwrap">
                <h6 className="small-text">Power Distribution Unit</h6>
                <div className="puttl">
                    <div className="pugrp">
                        <div className="pudtl">
                            <h6>Why is a Rack PDU important? Selecting a Rack PDU and Types of Rack PDU</h6>
                        </div>
                        <div className="puimg flex-shrink-0">
                            <Image src={puimg} alt="puimg"/>
                        </div> 
                    </div>
                    <div class="btnbox">
                        <Link class="elcom-btn tertiary-btn" href="/">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PowerunitSec;