import React, { useEffect, useState } from 'react';
import './about.css';
import { useLanguageContext } from '../language';

const About = () => {
    const { selectedLanguage } = useLanguageContext();

    useEffect(() =>{
        console.log(selectedLanguage)
    },[selectedLanguage]) 

    const [translations, setTranslations] = useState ({
        en: {
            title: 'About me',
            subtitle: 'Personal summary',
            description: 'I am currently part of a team responsible for developing a software for analyzing vibrations of large machines using technologies such as: React.js, React Query, Axios, Bootstrap, Material UI, Node.js, Knex.js, PM2, Express , TypeScript , Docker, .NET and AWS (Amazon Web Services).',
            yearExperience: 'Year of experience',
            projectsCompleted: 'Projects completed',
            downloadCV: 'Download my CV',
        },
        br: {
            title: 'Sobre mim',
            subtitle: 'Resumo pessoal',
            description: 'Atualmente faço parte de uma equipe responsavel por desenvolver um software para analise de vibração de maquinas de grande porte usando tecnologias como: React.js, React Query, Axios, Bootstrap, Material UI, Node.js, Knex.js, PM2, Express, TypeScript, Docker, .NET e AWS (Amazon Web Services) .',
            yearExperience: 'Ano de experiência',
            projectsCompleted: 'Projetos concluídos',
            downloadCV: 'Baixe meu CV',
        },
    });

    return (
        <section className="about section" id="about">
            <h2 className="section__title">{translations[selectedLanguage].title}</h2>
            <div className="section__subtitle">{translations[selectedLanguage].subtitle}</div>
            <div className="about__container container1 grid">
                <img src="assets/img/about.png" alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">{translations[selectedLanguage].description}</p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">01</span>
                            <span className="about__info-name">
                                {translations[selectedLanguage].yearExperience}
                            </span>
                        </div>
                        <div>
                            <a href="https://github.com/danthzz" className="about__info-title1" target="_blank" rel="noopener noreferrer">13</a>
                            <span className="about__info-name">
                                {translations[selectedLanguage].projectsCompleted}
                            </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href="assets/pdf/Daniel.pdf" className="button button--flex">
                            {translations[selectedLanguage].downloadCV}
                            <i className="uil uil-import button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
