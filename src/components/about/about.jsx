import React, { useEffect, useState } from 'react';
import './about.css';
import about from '../../assets/about.png'
import cvEn from '../../assets/Daniel Gomes - cv En.pdf'
import cvBr from '../../assets/Daniel Gomes - cv.pdf'
import { useLanguageContext } from '../language';

const About = () => {
    const { selectedLanguage } = useLanguageContext();

    useEffect(() => {
        console.log(selectedLanguage)
    }, [selectedLanguage])

    const [translations, setTranslations] = useState({
        en: {
            title: 'About me',
            subtitle: 'Personal summary',
            description: 'Full Stack Developer, specialized in React.Js. Working professionally with React since 2022, improving application performance and integrations and I have experience in developing applications with Node.js, automations and data analysis using Python.',
            yearExperience: 'Year of experience',
            projectsCompleted: 'Projects completed',
            downloadCV: 'Download my CV',
        },
        br: {
            title: 'Sobre mim',
            subtitle: 'Resumo pessoal',
            description: 'Desenvolvedor Full Stack, especializado em React.Js. Trabalhando profissionalmente com React desde 2022, melhorando o desempenho e integrações de aplicações, tenho experiência no desenvolvimento de aplicações com Node.js, automações e análise de dados usando Python.',
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
                <img src={about} alt="" className="about__img" />
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
                            <a href="https://github.com/danthzz" className="about__info-title1" target="_blank" rel="noopener noreferrer">17</a>
                            <span className="about__info-name">
                                {translations[selectedLanguage].projectsCompleted}
                            </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        {selectedLanguage === 'br' ?
                            <a download="" href={cvBr} className="button button--flex">
                                {translations[selectedLanguage].downloadCV}
                                <i className="uil uil-import button__icon"></i>
                            </a> :
                            <a download="" href={cvEn} className="button button--flex">
                                {translations[selectedLanguage].downloadCV}
                                <i className="uil uil-import button__icon"></i>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
