'use client'
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

import "@/styles/toUp.scss";

const ToUp = ()=>{
    const handleMove = ()=>{
        window.scrollTo(0,0);
    }

    return(
        <div className="toUp" onClick={handleMove}><FaArrowUp/></div>
    )
}
export default ToUp;