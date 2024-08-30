'use client'
import React,{useState} from 'react';
import "./faq.scss";

import Nav from '@/layouts/Nav';
import Footer from '@/layouts/Footer';
import Question from '@/components/Question';


const Faq = ()=>{

    const [value,setValue] = useState("");
    const [questions,setQuestions] = useState([
        {
            id: 1,
            title: "Ile czasu uczysz się programowania?",
            tags: "#nauka #programowanie #praca",
            text: "Zacząłem w 2019 podczas nauki w technikum informatycznym, jestem w tym do dziś. Niby długo ale było trochę przerw."
        },
        {
            id: 2,
            title: "W czym programujesz?",
            tags: "#nauka #programowanie #język #technologie",
            text: "Najwięcej czasu spędzam z reactem. Jako że celuję w frontend moje najmocniejsze technologie to html, css i js. Aktualnie uczę się node.js i czasem przytulam się z c++."
        },
        {
            id: 3,
            title: "Jak ze studiami?",
            tags: "#studia #nauka #programowanie",
            text: "ehh... długo by pisać XD, w skrócie studiuję informatykę na Uniwersytecie Śląskim i nie idzie mi najgorzej."
        },
        {
            id: 4,
            title: "Jak z pracą?",
            tags: "#praca #nauka #programowanie",
            text: "Szukam szukam, staram się w zawodzie ale kto wie gdzie skończę "
        },
        {
            id: 5,
            title: "Co tam aktualnie?",
            tags: "#praca",
            text: "Chcę sobie postawić jakieś serwery w minecraft, ogólnie nauczyć się pisać pluginy tam. Czemu? nie mam pojęcia, wydaje się fajne"
        },
        {
            id: 6,
            title: "Jakie masz dalsze plany?",
            tags: "#praca #nauka #programowanie",
            text: "Rozwijanie własnych aplikacji i pomysłów. Dużo planów, mało czasu..."
        }
    ])
    const [questionsCopy,setQuestionsCopy] = useState(questions);

    const handleInput = e =>{
        const text = e.target.value.toLowerCase();
        let questions2 = [...this.state.questions];
        
        questions2 = questions2.filter((one)=>{
            return one.title.toLowerCase().includes(text);
        })

        setValue(text);
        setQuestionsCopy(questions2);
    }

    const items = questionsCopy.map(one=><Question key={one.id} {...one}/>);

    return(
        <>
            <Nav/>
            <div className="faq">
                <div className="asked">
                    <div className='baner'>
                        <p>o co chcesz zapytać?</p>
                        <input 
                            type="text" 
                            placeholder='np: dokąd nocą tupta jeż?' 
                            value={value}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="questions">
                    <div className="container">
                        {items}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Faq;