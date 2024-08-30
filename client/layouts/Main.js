import React from 'react';

import Nav from './Nav';
import Header from './Header';
import Courses from './Courses';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';

const Main = ()=>{
    return(
        <>
            <Nav/>
            <Header/>
            <Courses />
            <AboutMe/>
            <Contact/>
            <Footer />
        </>
    )
}
export default Main;