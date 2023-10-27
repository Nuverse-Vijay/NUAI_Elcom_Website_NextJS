import ElectromecSec from "@/component/ElectromecSec";
import ExploreSec from "@/component/ExploreSec";
import InnerBanner from "@/component/InnerBanner";
import OtherblogSec from "@/component/OtheblogSec";
import ToppickSec from "@/component/ToppickSec";

const BlogLanding = () => {
    return (
        <>
        <InnerBanner/>
        <div className="BloglandingWrap">
            <ElectromecSec/>
            <ToppickSec/>
            <OtherblogSec/>
            <ExploreSec/>
        </div>
        </>
    )
}

export default BlogLanding;