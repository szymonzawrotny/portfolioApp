'use client';
import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import '@/styles/contact.scss';

const Contact = () => {
  const recaptchaRef = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formText, setFormText] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleForm = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$$/;

    if (!captchaToken) {
      alert('CAPTCHA nie została jeszcze wygenerowana. Spróbuj ponownie.');
      return;
    }

    if (email !== '' && message !== '') {
      if (!email.match(regex)) {
        setFormText('Popraw email!');
        return;
      }

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          message: message,
          captchaToken,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setEmail('');
      setMessage('');
      setFormText('Wysłano!');
    } else {
      setFormText('Hej, zanim wyślesz: wpisz swój email i napisz wiadomość');
    }
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleTextArea = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    recaptchaRef.current.execute();
  }, [email]);

  return (
    <section className="contact">
      <div className="contactText">kontakt</div>
      <div className="contactLinks">
        <p>
          Jeśli chcesz się ze mną skontaktować, poprostu napisz do mnie na
          instagramie...
        </p>
        <a href="https://www.instagram.com/zawruto/" target="_blank">
          <span>
            <FaInstagram size={24} />
          </span>
          instagram
        </a>
        <a href="https://www.facebook.com/szymon.zawrotny" target="_blank">
          <span>
            <FaFacebookSquare size={24} />
          </span>
          messenger
        </a>
      </div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          id="email"
          placeholder="Twój email..."
          value={email}
          onChange={handleEmailInput}
        />
        <textarea
          id="message"
          placeholder="W czym mogę Ci pomóc?"
          value={message}
          onChange={handleTextArea}
        ></textarea>
        <span>{formText}</span>
        <button>wyślij</button>
      </form>
      <div className="captchaBox">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
          ref={recaptchaRef}
          size="invisible"
          onChange={onCaptchaChange}
        />
      </div>
    </section>
  );
};
export default Contact;
