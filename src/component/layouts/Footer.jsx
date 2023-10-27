const { Fragment } = require("react")
import { useState } from "react";
import Image from "next/image"
import Link from 'next/link';
import React from 'react';
import Twitter from "../Svgs/Twitter";
import Linkedin from "../Svgs/Linkedin";
import Facebook from "../Svgs/Facebook";
import Instagram from "../Svgs/Instagram";
// import iconregi from "@/asset/images/iconregi.png";
import iconRegi from "@/asset/images/iconregi.png";
import Logo from "../Svgs/Logo";
// import Form from 'react-bootstrap/Form';
import Select from "react-select";


import LookFHelp from "./LookFHelp";


const options = [
    { value: 'India', label: 'India' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Canada', label: 'Canada' },
];


const Footer = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
        <LookFHelp/>
        <footer>
            <div className="footersec">
                <div className="container">
                    <div className="row py-xxl">
                        <div className="col-lg-3">
                            <div className="footerlogo">
                                <div className="logoimg">
                                    <Link href="#">
                                        <Logo/>
                                    </Link>
                                </div>
                                <div className="regitext">
                                    <h6 className="small-text">Registered with</h6>
                                </div>
                                <div className="iconregi">
                                    <Image src={iconRegi} alt='iconregi'></Image>
                                </div>
                                <div className="niceselect">
                                    <span>Country</span>
                                    {/* <Form.Select aria-label="Default select example">
                                        <option value="1">India</option>
                                        <option value="2">Australia</option>
                                        <option value="3">Canada</option>
                                    </Form.Select> */}
                                    <div className="selector">
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="productfooter">
                                <h6>Products</h6>
                                <ul>
                                    <li><Link href='/'>Electromechanical Components</Link></li>
                                    <li><Link href='/'>Power Distribution Units</Link></li>
                                    <li><Link href='/'>Solar Components</Link></li>
                                    <li><Link href='/'>Wiring Harness</Link></li>
                                    <li><Link href='/'>Electric Vehicle Inlets & Connectors</Link></li>
                                    <li><Link href='/'>Industrial Plugs, Sockets, Connectors</Link></li>
                                </ul>
                            </div>
                            <div className="consuprod">
                                <h6>Consumer Products</h6>
                            </div>
                            <div className="contact">
                                <h6>Contact</h6>
                                <div className="phonecontact">
                                    <Link href='/'>+91-22-66114444 / 91-22-24308861</Link>
                                </div>
                                <div className="emilcontact">
                                    <Link href='/'>elcom.mail@elcom-in.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="otmenu">
                                
                                    <h6><Link href='/aboutus'>About Us</Link></h6>
                                    <h6><Link href='/infrastructure'>Infrastructure</Link></h6>
                                    <h6><Link href='/certification'>Certification</Link></h6>
                                    <h6><Link href='/history'>History</Link></h6>
                                    <h6><Link href='/careers'>Careers</Link></h6>
                                
                            </div>
                            <div className="address">
                                <h6>Address</h6>
                                <p>20, Prabhadevi Industrial Estate 408, Veer Savarkar Marg, Prabhadevi, Mumbai, Maharashtra 400 025, India</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="otsecmenu">
                                <h6><Link href='/newslanding'>News</Link></h6>
                                <h6><Link href='/bloglanding'>Blogs</Link></h6>
                                <h6><Link href='/event'>Events</Link></h6>
                                <h6><Link href='/'>Get in Touch</Link></h6>
                                <h6><Link href='/'>International Channel Partners</Link></h6>
                                <h6><Link href='/'>Dealers and Distributors (IND)</Link></h6>
                                <h6><Link href='/'>Privacy Policy</Link></h6>
                            </div>
                            <div className="social">
                                <h6>Social</h6>
                                <div className="socialicon">
                                    <Link href="#"><Twitter/></Link>
                                    <Link href="#"><Linkedin/></Link>
                                    <Link href="#"><Facebook/></Link>
                                    <Link href="#"><Instagram/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;