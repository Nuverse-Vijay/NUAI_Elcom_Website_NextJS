
import Image from "next/image"
import Link from 'next/link';
import PowerunitSec from "./PowerunitSec";
import SectiontitleFull from "./layouts/SectiontitleFull";

const ToppickSec = () => {
    return (
        <>
        <div className="toppickwrap">
            <div className="toppickbox">
            <SectiontitleFull/>
                <div className="tpbox">
                    <div className="container">
                        <div className="tpleft">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="tplblue">
                                        <div className="tplttl">
                                            <h6 className="small-text">Electromechanical Components</h6>
                                            <span>25/04/2023</span>
                                        </div>
                                        <h6>Know the Four Fundamental Types of Electrical Switches Used in Industrial Applications</h6>
                                        <p>A switch is a device that allows the user to interrupt the flow of electricity as needed. It is a binary device that can either be.....</p>
                                        <div class="btnbox">
                                            <Link class="elcom-btn tertiary-btn" href="/">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <PowerunitSec/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ToppickSec;