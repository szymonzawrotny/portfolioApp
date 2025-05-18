'use client';
import React, { Component } from 'react';

import Project from '../components/Project';

import '../styles/courses.scss';

class Courses extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'codookola.pl',
        date: '01.02.2025',
        description:
          'Męczy Cię szukanie imprez na facebookowych grupkach? Jeśli tak to dobrze trafiłeś. Aplikacja ułatwia przejrzyste wyszukiwanie oraz promocję wydarzeń kulturalnych!',
        link: 'https://github.com/szymonzawrotny/codookola.pl',
      },
      {
        id: 2,
        title: 'smartRoom - IoT project',
        date: '30.08.2024',
        description:
          'Aplikacja pozwala na zdalne monitorowanie warunków panujących w pokoju, takich jak temperatura, wilgotność powietrza, poziom wilgotności gleby roślin, a także stan drzwi i poziom hałasu.',
        link: 'https://github.com/szymonzawrotny/smartRoom',
      },
      {
        id: 3,
        title: 'Szymon Zawrotny - portfolio',
        date: '08.2024',
        description:
          "Strona na której aktualnie jesteś, przedstawia moją osobę i ofertę. Więcej dowiesz się w zakłądce 'faq'.",
        link: 'https://github.com/szymonzawrotny/portfolioApp',
      },
      {
        id: 4,
        title: 'facebookBot',
        date: '27.03.2025',
        description:
          'Bot dla facebooka. Nie chce Ci się wstawiać postów na każdej grupce po kolei? Masz tutaj gotową automatyzację!',
        link: 'https://github.com/szymonzawrotny/facebookBot',
      },
    ],
  };

  render() {
    const items = this.state.projects.map((one) => (
      <Project key={one.id} {...one} />
    ));

    return (
      <section className="courses">
        <div className="projectText">projekty</div>
        <div className="projects">{items}</div>
      </section>
    );
  }
}
export default Courses;
