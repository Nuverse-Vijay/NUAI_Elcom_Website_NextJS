import Link from "next/link";
import SectionTitle from "./SectionTitle";
import DefaultBlogBox from "./DefaultBlogBox";


const SectionBlog = () => {
    return (
        <>
        <div className="sbwrap">
            <SectionTitle/>
            <div className="container">
                <div className="sbwrapper">
                    <div className="row">
                        <DefaultBlogBox/>
                        <DefaultBlogBox/>
                        <DefaultBlogBox/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionBlog;