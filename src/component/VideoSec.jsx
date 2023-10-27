import Image from "next/image"
import Link from 'next/link';
import ivideoimg from "@/asset/images/ivideoimg.png";
import bluebtn from "@/asset/images/bluebtn.svg";



const VideoSec = () => {
    return (
        <>
            <div className="videoWrap">
                <div className="container">
                    <div className="videoWrapper">
                        <div className="videoFrame">
                            <Image src={ivideoimg} alt="ivideoimg"/>
                        </div>
                        <div className="blueBtn">
                            <Link href="/"><Image src={bluebtn} alt="bluebtn"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoSec;