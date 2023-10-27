
import DefaultBlogBox from "./layouts/DefaultBlogBox";
import NiceSelect from "./layouts/NiceSelect";
import Image from "next/image"
import Link from 'next/link';
import SectiontitleFull from "./layouts/SectiontitleFull";

const OtherblogSec = () => {
    return (
        <>
            <div className="othblogwrap">
                <SectiontitleFull/>
                <div className="othwrap">
                    <div className="container">
                        <div className="row">
                            <DefaultBlogBox/>
                            <DefaultBlogBox/>
                            <DefaultBlogBox/>
                            <DefaultBlogBox/>
                            <DefaultBlogBox/>
                            <DefaultBlogBox/>
                        </div>
                        <div className="btnbox othbtn">
                            <Link className="elcom-btn primary-black-btn" href="/#">load More</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default OtherblogSec;