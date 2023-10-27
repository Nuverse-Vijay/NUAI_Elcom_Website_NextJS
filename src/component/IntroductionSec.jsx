import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import introImg from '@/asset/images/introImg.webp';



const IntroductionSec = () => {
    return (
        <>
        <div className='introsec'>
            <div className='container'>
                <div className='introWrapsec'>
                    <div className='introWrapper'>
                        <div className='introDtl'>
                            <h6 className='label-text'>INTRODUCTION</h6>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='introImg'>
                                        <Image src={introImg} alt='introImg'/>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='introTextdetail'>
                                        <h3>Excellence in innovation</h3>
                                        <p>Elcom International Pvt. Ltd. has been a leading provider of electromechanical and electronic components, catering to various industrial, manufacturing, and renewable power sectors since 1981. We are headquartered in Mumbai, while our strategically located factory in Kolhapur, Maharashtra, India, spans 4 acres along the Mumbai-Bengaluru expressway. Our state-of-the-art manufacturing infrastructure and accredited testing labs consistently meet renowned certification standards, including UL, VDE, cULus, and BIS India.</p>
                                        <div className="btnbox">
                                            <Link className="elcom-btn primary-black-btn" href="/#">Our history</Link>
                                            <Link className='tertiary-btn' href="/#">Our infrastructure</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IntroductionSec;