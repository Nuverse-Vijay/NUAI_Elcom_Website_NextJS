import ElectromecSec from "@/component/ElectromecSec";
import InnerBanner from "@/component/InnerBanner";
import OtherblogSec from "@/component/OtheblogSec";




const NewsLanding = () => {
    return (
        <>
        <InnerBanner/>
            <div className="newslandingwrap">
                <ElectromecSec/>
                <OtherblogSec/>
            </div>
        </>
    )
}


export default NewsLanding;