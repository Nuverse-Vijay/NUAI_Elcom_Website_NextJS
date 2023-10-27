import Image from "next/image"
import Link from 'next/link';
import esoimg from "@/asset/images/esoimg.webp";


const EsoperationBox = () => {
    return (
        <>
        
            <div className="esoperation">
                <div className="esobox">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="esodtl">
                                <h4>Testing</h4>
                                <p>Elcom's UL-assessed test laboratory offers comprehensive testing for electromechanical and power electronic components. Our expert engineers conduct vital tests such as high voltage, insulation resistance, contact resistance, weatherability testing, vibration testing and more. Equipped with advanced infrastructure, including power metres, climatic chamber, Glow Wire test apparatus and spectrum analyzers, we ensure efficient regulatory approval processes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="esoimg flex-shrink-0">
                                <Image src={esoimg} alt="esoimg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default EsoperationBox;