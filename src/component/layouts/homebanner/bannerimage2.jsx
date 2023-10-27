import Image from "next/image";
import bannerimg2 from "@/asset/images/banner_slide4.png"

const bannerimage2 = () => {
    return (
        <div className="imgbanner">
            <Image src={bannerimg2} alt="" />
        </div>
    )
}

export default bannerimage2;