'use client'
import React,{Component} from 'react';

import Project from '../components/Project';

import '../styles/courses.scss';

class Courses extends Component{
    state = {
        projects: [
            {
                id:1,
                title: "Szymon Zawrotny - portfolio",
                date:"wkrótce",
                description: 'Strona na której aktualnie jesteś, przedstawia moją osobę i ofertę. Więcej dowiesz się w zakłądce \'faq\'.',
                link: "https://github.com/szymonzawrotny/portfolioApp"
            },
            {
                id:2,
                title: "smartRoom - IoT project",
                date:"30.08.2024",
                description: 'Aplikacja pozwala na zdalne monitorowanie warunków panujących w pokoju, takich jak temperatura, wilgotność powietrza, poziom wilgotności gleby roślin, a także stan drzwi i poziom hałasu.',
                link: "https://github.com/szymonzawrotny/smartRoom"
            },
            {
                id:3,
                title: "discordMusicBot",
                date:"wstrzymany",
                description: 'Bot dla aplikacji discord. Odtwarza muzykę i nie tylko! ',
                link: "https://github.com/szymonzawrotny/discordMusicBot"
            },
            {
                id:4,
                title: "moja praca inżynierska!",
                date:"wkrótce",
                description: 'Męczy Cię szukanie imprez na facebookowych grupkach? Jeśli tak to dobrze trafiłeś. Aplikacja ułatwia przejrzyste wyszukiwanie oraz promocję wydarzeń kulturalnych!',
                link: ""
            },
        ]
    }

    render(){
        const items = this.state.projects.map(one=><Project key={one.id} {...one}/>) 

        return(
            <section className="courses">
                <div className="projectText">projekty</div>
                <div className="projects">
                    {items}
                </div>
            </section>
        )
    }
}
export default Courses;