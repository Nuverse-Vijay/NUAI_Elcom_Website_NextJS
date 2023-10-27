import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import EventcompSec from './EventcompSec';


const PasteventSec = () => {
    return (
        <>
        <div className="pastwrap">
            <div className="container">
                <div className="pastwrapper">
                    <div className="row">
                        <EventcompSec/>
                        <EventcompSec/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default PasteventSec;