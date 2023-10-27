import Image from "next/image"
import Link from 'next/link';
import blogimg from '@/asset/images/blogimg.webp';




const DefaultBlogBox = () => {
    return (
        <div className="col-lg-4">
            <div className="blogbox">
                <div className="blogimgbox">
                    <Link href="#">
                        <div className="blogimg">
                            <Image src={blogimg} alt="blogimg"></Image>
                        </div>
                        <div className="blogdtl">
                            <div className="bloglable">
                                <span className="very-small-text">Blog</span>
                                <span className="small-text">30/05/2023</span>
                            </div>
                            <div className="blogttl">
                                <h6>Importance of a power distribution unit in data center management</h6>
                                <div className="btnbox">
                                    <p className="tertiary-btn">Read More</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                 
                    
                </div>
            </div>
        </div>
    )
}
export default DefaultBlogBox;