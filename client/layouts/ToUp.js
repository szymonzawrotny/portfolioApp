'use client'
import React from 'react';

import "@/styles/toUp.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const arrow = <FontAwesomeIcon icon={ faArrowUp} />


const ToUp = ()=>{
    const handleMove = ()=>{
        window.scrollTo(0,0);
    }

    return(
        <div className="toUp" onClick={handleMove}>{arrow}</div>
    )
}
export default ToUp;