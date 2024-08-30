'use client'
import React,{useState} from 'react';

import "@/styles/contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const ig = <FontAwesomeIcon icon={faInstagram} />
const fb = <FontAwesomeIcon icon={faFacebook} />

const Contact = ()=>{

    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [formText,setFormText] = useState("");

    const handleForm = e =>{
        e.preventDefault();
        
        if(email !== "" && message !== ""){
            setEmail("");
            setMessage("");
            setFormText("Wysłano!");

            fetch("http://localhost:5000/send",{
                method:"POST",
                body: JSON.stringify({
                    email: email,
                    message: message
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } else{
            setFormText("Hej, zanim wyślesz: wpisz swój email i napisz wiadomość")
        }
    }

    const handleEmailInput = e =>{ setEmail(e.target.value) }

    const handleTextArea = e =>{ setMessage(e.target.value) }


    return(
        <section className="contact">
            <div className="contactText">kontakt</div>
            <div className="contactLinks">
                <p>Jeśli chcesz się ze mną skontaktować, poprostu napisz do mnie na instagramie...</p>
                <a href="https://www.instagram.com/zawruto/" target='_blank'><span>{ig}</span>instagram</a>
                <a href="https://www.facebook.com/szymon.zawrotny" target='_blank'><span>{fb}</span>messenger</a>
            </div>
            <form onSubmit={handleForm}>
                <input 
                    type="text" 
                    id="email" 
                    placeholder='Twój email...'
                    value={email}   
                    onChange={handleEmailInput}
                />
                <textarea 
                    id="message" 
                    placeholder='W czym mogę Ci pomóc?'
                    value={message}
                    onChange={handleTextArea}
                ></textarea>
                <span>{formText}</span>
                <button>wyślij</button>
            </form>
        </section>
    )
}
export default Contact;