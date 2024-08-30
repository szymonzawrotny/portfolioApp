import React from 'react';

import "@/styles/aboutMe.scss";
import Image from 'next/image';

const AboutMe = ()=>{
    return(
        <section className="aboutMe">
            <div className="photoContainer">
                <Image 
                    src="/images/myPhoto.jpg"
                    alt="to ja jestem"
                    width="1438"
                    height="1440"
                />
            </div>
            <div className="whoIAm">
                <h1>kim jestem?</h1>
                <p>
                    Na codzień - studentem Uniwersytetu Śląskiego, w nocy - fanem tanich energetyków i programowania. Mało śpię dużo robię, możesz na mnie liczyć ;)
                </p>
            </div>
            <div className="cooperation">
                <h1>współpraca</h1>
                <p>
                    Jeśli po głowie chodzi Ci jakiś ciekawy pomysł a nie znasz nikogo kto może go zrealizować, pisz śmiało, coś wymyślimy...
                </p>
            </div>
        </section>
    )
}
export default AboutMe;