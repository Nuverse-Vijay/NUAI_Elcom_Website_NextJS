import Head from 'next/head'
import Image from 'next/image';
import InnerBanner from "@/component/InnerBanner";
import videoImg from "@/asset/images/videoImg.png";
import SectionTitle from '@/component/layouts/SectionTitle';
import LogoSlider from '@/component/layouts/LogoSlider';
import ProductSec from '@/component/ProductSec';

const CertiFication = () => {
  return(
    <>
        <Head>
            <title>Certification | Elcom</title>
        </Head>
      <InnerBanner/>
        <div className="introWrap">
            <div className="container">
                <div className="introWapper">
                  <div className="introTtl">
                      <h6 className="label-text">INTRODUCTION</h6>  
                  </div>
                  <div className='row'>
                        <div className="col-lg-6">
                            <div className="introVideo">
                                <div className="videoFram">
                                    <Image src={videoImg} alt="videoImg"/>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="introText">
                                <div className="textFram">
                                    <h3>A testament to quality, performance, safety, and  innovation</h3>
                                    <p>At Elcom, our unwavering commitment to adhering to regulatory standards sets us apart as a trusted partner for businesses worldwide. We maintain a robust framework of accreditation standards, certifications, and safety approvals for our products and processes that demonstrate our dedication to exceptional product acceptance and reliability worldwide.</p>
                                </div>
                            </div>
                        </div> 
                  </div> 
                </div>
            </div>
        </div>
        <div className='certiWrap'>
            <SectionTitle/>
        </div>
        <div className='certiSlider'>
            <LogoSlider/>
            <LogoSlider/>
        </div>
        <div className='productCertification'>
            <ProductSec/>
        </div>
    </>
  )
}

export default CertiFication;