import React from 'react';

import '../styles/Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const gh = <FontAwesomeIcon icon={faGithub} />
const ig = <FontAwesomeIcon icon={faInstagram} />
const fb = <FontAwesomeIcon icon={faFacebook} />
const arrow = <FontAwesomeIcon icon={faArrowRight} />

const Footer = ()=>{
    return(
        <footer>
            <h3>logo</h3>
            <div className="socials">
                <a href="https://github.com/szymonzawrotny?tab=repositories">{gh}</a>
                <a href="https://www.instagram.com/zawruto/">{ig}</a>
                <a href="https://www.facebook.com/szymon.zawrotny">{fb}</a>
            </div>
            <p className='policy'>Polityka Prywatności</p>
            <p className='copyrights'>
                &copy; 2022 Szymon Zawrotny, klon strony <a href="https://helloroman.pl/">{arrow}</a>
            </p>
        </footer>
    )
}
export default Footer;