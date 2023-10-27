
import Image from "next/image";
import slide2bg from "@/asset/images/bannerslide1.webp" 

const slide2 = () => {
    return (
        <div className="slide2bg slidesbg">
            <Image src={slide2bg} alt="" />
        </div>
    )
}
export default slide2;