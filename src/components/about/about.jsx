import React, { useEffect, useState } from 'react';
import './about.css';
import { useLanguage } from '../language';

const About = () => {
    const { selectedLanguage } = useLanguage();

    useEffect(() =>{
        console.log(selectedLanguage)
    },[selectedLanguage]) 

    const [translations, setTranslations] = useState ({
        en: {
            title: 'About me',
            subtitle: 'Personal summary',
            description: 'I am always seeking knowledge and new challenges. Currently, I have intermediate knowledge in HTML, CSS, JavaScript, React, Angular, and I am learning Python, TypeScript, .NET, C#, and MongoDB. I am quick to learn, proactive, and determined.',
            yearExperience: 'Year of experience',
            projectsCompleted: 'Projects completed',
            downloadCV: 'Download my CV',
        },
        br: {
            title: 'Sobre mim',
            subtitle: 'Resumo pessoal',
            description: 'Estou sempre em busca de conhecimento e novos desafios. Atualmente, tenho conhecimento intermediário em HTML, CSS, JavaScript, React, Angular e estou aprendendo Python, TypeScript, .NET, C# e MongoDB. Tenho facilidade no aprendizado, sou proativo e determinado.',
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
                                <br />
                                de experiência
                            </span>
                        </div>
                        <div>
                            <a href="https://github.com/danthzz" className="about__info-title1" target="_blank" rel="noopener noreferrer">13</a>
                            <span className="about__info-name">
                                {translations[selectedLanguage].projectsCompleted}
                                <br />
                                concluídos
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
