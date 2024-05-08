import React, { useState } from 'react';
import './home.css'
import perfil from '../../assets/perfil.png'
import { useLanguageContext } from '../language';

const Home = () => {
    const { selectedLanguage } = useLanguageContext();
    console.log(selectedLanguage)
    const translations = {
        en: {
            title: 'Daniel Gomes',
            subtitle: 'Fullstack Developer',
            description: 'Systems Analysis and Development student, technology enthusiast, always seeking new knowledge and skills.',
            scrollName: 'Scroll down',
        },
        br: {
            title: 'Daniel Gomes',
            subtitle: 'Desenvolvedor Fullstack',
            description: 'Estudante de Análise e Desenvolvimento de Sistemas, entusiasta de tecnologia, buscando sempre novos conhecimentos e habilidades.',
            scrollName: 'Role para baixo',
        },
    };

    return (
        <section className="home section" id="home">
            <div className="home__container container1 grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/daniel-gomes-3628121b7/" target="_blank" className="home__social-icon">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/danthzz" target="_blank" className="home__social-icon">
                            <i className="uil uil-github-alt"></i>
                        </a>
                    </div>
                    <div className="home__img">
                        <div className="loading-circle">
                            <img src={perfil} alt="" className="home__blob-img img-fluid" x="12" y="18" />
                        </div>
                    </div>
                    <div className="home__data">
                        <h1 className="home__title">{translations[selectedLanguage].title}</h1>
                        <h3 className="home_subtitle">{translations[selectedLanguage].subtitle}</h3>
                        <p className="home__description">{translations[selectedLanguage].description}</p>
                    </div>
                </div>
                <div className="home__scroll"></div>
                <a href="#about" className="home__scroll-button button--flex">
                    <i className="uil uil-mouse home__scroll-mouse"></i>
                    <span className="home__scrol-name">{translations[selectedLanguage].scrollName}</span>
                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </section>
    );
};

export default Home;