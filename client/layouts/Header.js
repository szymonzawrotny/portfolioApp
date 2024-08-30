import React from 'react';

import '@/styles/header.scss';

const Header = ()=>{
    return(
        <header>
            <div className="baner">
                <div className="box"></div>
                <div className="me">
                    Siema,<br/> tu Szymon!
                </div>
                <a href="https://github.com/szymonzawrotny?tab=repositories" target="_blank" rel="noreferrer">
                    <button className="goGh">sprawdź mój github</button>
                </a>
            </div>
        </header>
    )
}
export default Header;