import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";


const EventcompSec = () => {
    return (
        <>
        <div className="col-lg-6">
            <div className="pastevent" style={{backgroundColor:'#343434'}}>
                <h6 className="small-text">Seminar</h6>
                <h4>Data Centre World</h4>
                <h6>9th May - 25th May</h6>
                <p>A We cordially invite you to visit us at at Data Centre World, Austin Convention Center, Austin Texas, on 9th May to 11th May 2023, Booth No. 735</p>
                <div className="btnbox">
                    <Link className="elcom-btn tertiary-btn" href='#'>Read More</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default EventcompSec;