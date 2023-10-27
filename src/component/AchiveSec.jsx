import Image from 'next/image';
import SectionTitle from "./layouts/SectionTitle";
import introImg from '@/asset/images/introImg.webp';

const AchiveSec = () => {
    return (
        <>
        <div className='achivewrap'>
                <SectionTitle/>
                <div className='achivewrapper'>
                    <div className='container'>
                        <div className='achivebox'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='achiveimg flex-shrink-0;'>
                                        <Image src={introImg} alt='introImg'/>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='achiveimg flex-shrink-0;'>
                                        <Image src={introImg} alt='introImg'/>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='achiveimg flex-shrink-0;'>
                                        <Image src={introImg} alt='introImg'/>
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

export default AchiveSec;