'use client'
import React, { useRef } from 'react';
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

import '@/styles/nav.scss';

const Nav = ()=>{
    const nav = useRef();

    return(
        <nav ref={nav}>
            <div className="logo">
                <Link href="/">szymonzawrotny</Link>
            </div>
            <div className="social">
                <a href="https://github.com/szymonzawrotny?tab=repositories" target='_blank'><FaGithub size={26}/></a>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/zawruto/" target='_blank'><FaInstagram size={26}/></a>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/szymon.zawrotny" target='_blank'><FaFacebook size={26}/></a>
            </div>
            <Link href="/faq"><button className="socialButton">faq</button></Link>
        </nav>
    )
}

export default Nav;