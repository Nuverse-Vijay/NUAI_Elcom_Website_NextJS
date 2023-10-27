import Image from "next/image"
import Link from 'next/link';
import React from "react";
import productimg from "@/asset/images/productimg.webp";
import SectionTitle from "./layouts/SectionTitle";


const ProductSec = () => {

    return (
        <>
            <div className="productwrap">
            <SectionTitle />
                <div className="productdtl">
                    <div className="container">
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Electromechanical Components</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Power Distribution Units</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>EMI/EMC Products</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Solar Components</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Wiring Harness</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Electric Vehicle Inlets and Connectors</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Industrial Plugs, Sockets and Connectors</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="producttext">
                            <div className="productttl">
                                <h6>Consumer Products</h6>
                            </div>
                            <div className="productinner">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="innerdtl">
                                            {/* <ul>
                                                <li><Link href='/'>Switches</Link></li>
                                                <li><Link href='/'>DIN Connectors</Link></li>
                                                <li><Link href='/'>IEC Power Entry Components</Link></li>
                                                <li><Link href='/'>NEMA Connectors</Link></li>
                                                <li><Link href='/'>Power Socket Adaptors</Link></li>
                                                <li><Link href='/'>Fuse Holders</Link></li>
                                                <li><Link href='/'>Power Cords</Link></li>
                                                <li><Link href='/'>Terminals</Link></li>
                                                <li><Link href='/'>IDC Wiretap Connectors</Link></li>
                                            </ul> */}
                                            <p>Elcom takes pride in being the pioneering manufacturer of industrial plugs and sockets made with high-quality polyamide material, setting a new benchmark in India.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="productimg">
                                            <Image src={productimg} alt="productimg"></Image>
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

export default ProductSec;