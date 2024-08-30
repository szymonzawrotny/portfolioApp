'use client'
import React, {useEffect, useRef} from 'react';
import Link from 'next/link'

import '@/styles/nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const gh = <FontAwesomeIcon icon={faGithub} />
const ig = <FontAwesomeIcon icon={faInstagram} />
const fb = <FontAwesomeIcon icon={faFacebook} />

const Nav = ()=>{
    const nav = useRef();
    // const handleScroll = ()=>{
    //     const height = window.scrollY;
    //     if(height > 100){
    //         nav.current.classList.add('active');
    //     }
    //     else{
    //         nav.current.classList.remove('active');
    //     }
    // }

    // useEffect(
    //     ()=>{
    //         window.addEventListener("scroll",handleScroll);
    //     },[]
    // )

    return(
        <nav ref={nav}>
            <div className="logo">
                <Link href="/">logo</Link>
            </div>
            <div className="social">
                <a href="https://github.com/szymonzawrotny?tab=repositories" target='_blank'>{gh}</a>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/zawruto/" target='_blank'>{ig}</a>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/szymon.zawrotny" target='_blank'>{fb}</a>
            </div>
            <Link href="/faq"><button className="socialButton">faq</button></Link>
        </nav>
    )
}

export default Nav;