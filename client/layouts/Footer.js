import React from 'react';
import Image from 'next/image';
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLongArrowAltRight,
} from 'react-icons/fa';

import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer>
      <h3>szymonzawrotny</h3>
      <div className="socials">
        <a href="https://github.com/szymonzawrotny?tab=repositories"><FaGithub/></a>
        <a href="https://www.instagram.com/zawruto/"><FaInstagram/></a>
        <a href="https://www.facebook.com/szymon.zawrotny"><FaFacebook/></a>
      </div>
      <p>
        <a href="/policy">Polityka Prywatności</a>
      </p>
      <p className="copyrights">
        &copy; 2022 Szymon Zawrotny, strona testowa
      </p>
      <div className="triangle">
        <Image
          src="/images/triangle.svg"
          alt="to ja jestem"
          width="200"
          height="200"
        />
      </div>
    </footer>
  );
};
export default Footer;
