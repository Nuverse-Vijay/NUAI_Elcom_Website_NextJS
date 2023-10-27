import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import Link from 'next/link';
import Teamimg from "@/asset/images/Teamimg.webp";
import ShowModal from "./ShowModal";

const TeamSec = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="teamWrap">
            <Modal show={show} onHide={handleClose}>
                <ShowModal change={handleClose}/>
            </Modal>
                <div className="container">
                    <div className="teamWrapper">
                        <div className="teamText">
                            <h6 className="label-text">EXECUTIVE Team</h6>
                            <h3>The team that drives innovation and success</h3>
                        </div>
                    </div>
                    <div className="teamDtl">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#" className="Popup" onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                        
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#"  onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#"  onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#"  onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#"  onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#"  onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="teamimgDtl">
                                    <Link href="#"  onClick={handleShow}>
                                        <div className="teamImg">
                                            <Image src={Teamimg} alt='Teamimg'></Image>
                                        </div>
                                        <div className='teamName'>
                                            <h6>Dr. Girish V. Vaze</h6>
                                            <span>Managing Director & Chairman</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamSec;