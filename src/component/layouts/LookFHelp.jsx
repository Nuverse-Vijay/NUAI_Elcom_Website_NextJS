const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import tringle from '@/asset/images/tringle.svg'


const LookFHelp = () => {
    return (
        <div className="lfhsec">
            <div className="ifhtriangle">
                <Image src={tringle} alt='tringle'></Image>
            </div>
            <div className="container">
                <div className="lfhdtl">
                    <div className="lfhtext">
                        <h2>Looking for help?</h2>
                        <p>Our team is ready to assist you and provide the support you need</p>
                    </div>
                    <div className="btnbox"><a className="elcom-btn primary-btn" href="#">contact us</a></div>
                </div>
            </div>
        </div>
    )
}
export default LookFHelp;