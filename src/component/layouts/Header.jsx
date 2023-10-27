const { Fragment } = require("react")
import Image from "next/image"
import Link from 'next/link';
import { useState , useRef } from "react";
import Logo from "../Svgs/Logo";
import Search from "../Svgs/Search";
import InnerMenu from "../InnerMenu";


const Header = () => {
    const [searchActive , setSearchActive] = useState(false);

    const searchHandler = () => {
        return (
            setSearchActive(!searchActive)
        )
    }
    console.log(searchActive)
    
    return (
        <>
        <div className="header-wraper">
            <header className="headerBar">
                <div className="navBar">
                    <div className="container">
                        <div className="navigationBar">
                            <div className="headLogo">
                                <Link href="#">
                                    <Logo/>
                                </Link>
                            </div>
                            {/* navWrapper */}
                            <div className="navWrapper">
                                <div className="navWrap">
                                    <ul>
                                        <li className="submenu"><Link href='/'>Products</Link>
                                            <div className="megaMenu">
                                                <div className="container">
                                                    <div className="megaMenu_inner">
                                                        <div className="megacol f1">
                                                            <Link href='/'>Electromechanical Components</Link>
                                                            <div className="innersubmenu">
                                                                <div className="innersub">
                                                                    <InnerMenu />
                                                                    <InnerMenu />
                                                                    <InnerMenu />
                                                                </div>
                                                                <div className="innersub">
                                                                    <InnerMenu />
                                                                    <InnerMenu />
                                                                    <InnerMenu />
                                                                </div>
                                                                <div className="innersub">
                                                                    <InnerMenu />
                                                                    <InnerMenu />
                                                                    <InnerMenu />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="megacol f2">
                                                            <Link href='/'>Power Distribution Unit (PDU)</Link>
                                                            <InnerMenu />
                                                            <InnerMenu />
                                                            <InnerMenu />
                                                            <InnerMenu />
                                                        </div>
                                                        <div className="megacoleb">
                                                            <div className="megacol">
                                                                <Link href='/'>EMI EMC Products</Link>                                                
                                                                <InnerMenu />   
                                                            </div>
                                                            <div className="megacol">
                                                                <Link href='/'>Solar Components</Link>                                                
                                                                <InnerMenu />   
                                                            </div>
                                                        </div>
                                                        <div className="rem-menu">
                                                            <div className="megacol">
                                                                <Link href='/'>Wiring Harness</Link>                                                
                                                                <InnerMenu />   
                                                            </div>
                                                            <div className="megacol">
                                                                <Link href='/'>EV Inlet and Connectors</Link>                                                
                                                                <InnerMenu />   
                                                            </div>
                                                            <div className="megacol">
                                                                <Link href='/'>Industrial Plugs, Sockets, Connectors</Link>                                                
                                                                <InnerMenu />   
                                                            </div>
                                                            <div className="megacol">
                                                                <Link href='/'>Consumer products</Link>                                                
                                                                <InnerMenu />   
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link href='/Company'>Company</Link></li>
                                        <li><Link href='/Media'>Media</Link></li>
                                        <li><Link href='/contact'>contact</Link></li>
                                    </ul>
                                </div>
                                <div className={`searchBar ${searchActive ? 'active' : ''} `} onClick={searchHandler}>
                                    <form action="">
                                        <div className="search">
                                            <input type="text" placeholder="What can we help you find?" />
                                            <button><Search/></button>
                                        </div>
                                    </form>
                                    <div className="serch_close-btn" onClick={searchHandler}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L25 25" stroke="currentColor" strokeWidth="2"/>
                                                <path d="M25 1L1 25" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                            {/* navWrapper */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </>
    )

}

export default Header