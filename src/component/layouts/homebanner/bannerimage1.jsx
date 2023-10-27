
import Image from "next/image";
import bannerimg1 from "@/asset/images/bannerslide.webp"

const bannerimage1 = () => {
    return (
        <div className="imgbanner">
            <Image src={bannerimg1} alt="" />
        </div>
    )
}

export default bannerimage1;