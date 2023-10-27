import Link from "next/link";
import SplitText from '@/component/layouts/SplitText'

const SectionTitle = () => {

    return (
        <div className="mafaContent">
            <div className="container">
                <div className="mafagrp">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mafaText">
                                <h5 className="label-text" >About</h5>
                                <h3><SplitText copy="Sarah Fossheim" role="heading" /></h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mafaText">
                                <p>Elcom International is among the few trustworthy and specialized manufacturers of Electromechanical & Electronic components in India, serving its customers all over the globe since 1981. Our state-of-the-art manufacturing infrastructure and highly equipped testing laboratories have successfully acquired and reliably maintained multiple reputable certification standards.</p>
                                <div className="btnbox">
                                    <Link className="elcom-btn primary-black-btn" href='#'>Our Story</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionTitle;