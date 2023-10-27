import InnerBanner from "@/component/InnerBanner";
import NeweventSec from "@/component/NeweventSec";
import PasteventSec from "@/component/PasteventSec";
import SectiontitleFull from "@/component/layouts/SectiontitleFull";

const Event =() => {
    return (
        <>
        <InnerBanner/>
            <div className="eventWrap">
                <SectiontitleFull/>
                <NeweventSec/>
                <NeweventSec/>
                <SectiontitleFull/>
                <PasteventSec/>
            </div>
        </>
    )

}

export default Event;