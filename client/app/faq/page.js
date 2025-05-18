'use client';
import React, { useEffect, useState } from 'react';
import './faq.scss';

import Nav from '@/layouts/Nav';
import Question from '@/components/Question';

const Faq = () => {
  const questionsData = [
    {
      id: 1,
      title: 'Ile czasu uczysz się programowania?',
      tags: '#nauka #programowanie #praca',
      text: 'Zacząłem w 2019 podczas nauki w technikum informatycznym, jestem w tym do dziś. Niby długo ale było trochę przerw.',
    },
    {
      id: 2,
      title: 'W czym programujesz?',
      tags: '#nauka #programowanie #język #technologie',
      text: 'Najwięcej czasu spędzam z react native. Ostatnio w sumie jestem dosyć elastyczny, robię frontend, backend, automatyzacja w selenium? Nie ma sprawy. Bazy danych też spoko. sql nosql git. Grałem nawet melodyjki w asemblerze dla 8086.',
    },
    {
      id: 3,
      title: 'Jak ze studiami?',
      tags: '#studia #nauka #programowanie',
      text: 'Szybko minęło te 3.5 roku, zostałem inżynierem ( obroniłem na piąteczkę, codookola to moja inżynierka) i tak sobie wegetuję tworząc projekty i szukając pracy. ',
    },
    {
      id: 4,
      title: 'Jak z pracą?',
      tags: '#praca #nauka #programowanie',
      text: 'Szukam szukam, staram się mocno. Głównie jako frontend z reactem, to moja najmocniejsza technologia',
    },
    {
      id: 5,
      title: 'Co tam aktualnie?',
      tags: '#praca',
      text: 'Chcę sobie postawić jakieś serwery w minecraft, ogólnie nauczyć się pisać pluginy tam. Czemu? nie mam pojęcia, wydaje się fajne ( pluginy nie java XD ). ',
    },
    {
      id: 6,
      title: 'Jakie masz dalsze plany?',
      tags: '#praca #nauka #programowanie',
      text: 'Dużo czytam, nadrabiam dużo teorii, prócz szukaniem pracy to rozwijam własne projekty. Coś w końcu wypali ;)',
    },
    {
      id: 7,
      title: 'Co czytam?',
      tags: '#praca #nauka #programowanie',
      text: 'Ostatnio czytam o metodykach zwinnego zarządzania projektami i ogólnie zarządzania zespołem. Męczę "Czysty Agile".',
    },
  ];

  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    let questions2 = [...questionsData];

    questions2 = questionsData.filter((one) => {
      return one.title.toLowerCase().includes(value);
    });

    setQuestions(questions2);
  }, [value]);

  const handleInput = (e) => {
    const text = e.target.value.toLowerCase();

    setValue(text);
  };

  const items = questions.map((one) => <Question key={one.id} {...one} />);

  return (
    <div className="faq">
      <Nav />
      <div className="asked">
        <div className="baner">
          <p>o co chcesz zapytać?</p>
          <input
            type="text"
            placeholder="np: dokąd nocą tupta jeż?"
            value={value}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="questions">
        <div className="container">{items}</div>
      </div>
      <div className="greenBox"></div>
    </div>
  );
};
export default Faq;
