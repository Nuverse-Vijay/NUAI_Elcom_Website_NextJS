import Image from 'next/image';
import TowardGreen from '@/component/TowardGreen';
import CounterSec from './CounterSec';




const SustaincountSec = () => {
    return (
        <>
        <div className="sustainWrap">
            <div className="sustainimg">
                <TowardGreen/>
                <div className='sustaincounter'>
                    <CounterSec/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SustaincountSec;