import React, { useEffect, useState } from 'react';
import './header.css';
import brFlag from '../../assets/br.svg';
import enFlag from '../../assets/en.svg';
import { useLanguageContext } from '../language';


const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const { selectedLanguage, setSelectedLanguage } = useLanguageContext();
    console.log(selectedLanguage)
    const [translations, setTranslations] = useState({
        en: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            qualifications: 'Qualifications',
            services: 'Services',
        },
        br: {
            home: 'Início',
            about: 'Sobre',
            skills: 'Habilidades',
            qualifications: 'Qualificações',
            services: 'Aptidões',
        },
    });

    useEffect(() => {
        
    })

    useEffect(() => {
        const themeToggle = () => {
            const selectedTheme = localStorage.getItem('selected-theme');
            setIsDarkTheme(selectedTheme === 'dark');
        };

        const toggleTheme = () => {
            const newTheme = isDarkTheme ? 'light' : 'dark';
            setIsDarkTheme(!isDarkTheme);
            localStorage.setItem('selected-theme', newTheme);
            document.body.classList.toggle('dark-theme', isDarkTheme);
        };

        themeToggle();

        const themeButton = document.getElementById('theme-button');
        themeButton.addEventListener('click', toggleTheme);

        return () => {
            themeButton.removeEventListener('click', toggleTheme);
        };
    }, [isDarkTheme]);

    useEffect(() => {
        const scrollHeader = () => {
            const nav = document.getElementById('header');
            if (window.scrollY >= 80) nav.classList.add('scroll-header');
            else nav.classList.remove('scroll-header');
        };

        const scrollActive = () => {
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                if (
                    window.scrollY > sectionTop &&
                    window.scrollY <= sectionTop + sectionHeight
                ) {
                    document
                        .querySelector(`.nav__menu a[href*=${sectionId}]`)
                        .classList.add('active-link');
                } else {
                    document
                        .querySelector(`.nav__menu a[href*=${sectionId}]`)
                        .classList.remove('active-link');
                }
            });
        };

        const scrollUp = () => {
            const scrollUp = document.getElementById('scroll-up');
            if (window.scrollY >= 560) scrollUp.classList.add('show-scroll');
            else scrollUp.classList.remove('show-scroll');
        };

        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav__link');

        const showMenu = () => {
            navMenu.classList.add('show-menu');
        };

        const hideMenu = () => {
            navMenu.classList.remove('show-menu');
        };

        const linkAction = () => {
            hideMenu();
        };

        if (navToggle) {
            navToggle.addEventListener('click', showMenu);
        }

        if (navClose) {
            navClose.addEventListener('click', hideMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', linkAction);
        });

        window.addEventListener('scroll', () => {
            scrollHeader();
            scrollActive();
            scrollUp();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                scrollHeader();
                scrollActive();
                scrollUp();
            });
            if (navToggle) {
                navToggle.removeEventListener('click', showMenu);
            }
            if (navClose) {
                navClose.removeEventListener('click', hideMenu);
            }
            navLinks.forEach(link => {
                link.removeEventListener('click', linkAction);
            });
        };
    }, []);

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    return (
        <header className={`header ${isDarkTheme ? 'dark-theme' : ''}`} id="header">
            <nav className="nav container1">
                <a href="#" className="nav__logo">
                    Daniel Gomes
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                {translations[selectedLanguage].home}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                {translations[selectedLanguage].about}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                {translations[selectedLanguage].skills}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualifications" className="nav__link">
                                <i className="uil uil-graduation-cap nav__icon"></i>
                                {translations[selectedLanguage].qualifications}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                {translations[selectedLanguage].services}
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close"></i>
                </div>
                <div className="nav__btns">
                    {/* LANGUAGE SELECT */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='flag' src={selectedLanguage === 'br' ? brFlag : enFlag} alt="Language" />
                        </button>
                        <ul className="dropdown-menu ">
                            {selectedLanguage === 'br' ?
                                <li><p className='drop-btn' onClick={() => handleLanguageChange('en')}><img className='flag' src={enFlag} alt="English" /> Inglês</p></li>
                                :
                                <li><p onClick={() => handleLanguageChange('br')}><img className='flag' src={brFlag} alt="Português" /> Portuguese</p></li>
                            }

                        </ul>
                    </div>
                    {/* Dark mode */}
                    {isDarkTheme === true ?
                        <i className="uil uil-moon change-theme" id="theme-button"></i>
                        :
                        <i className='uil uil-sun change-theme' id='theme-button'></i>
                    }
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-ellipsis-v"></i>
                    </div>
                </div>
            </nav>
            <a href="#" className="scrollup" id="scroll-up">
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
        </header>
    );
};

export default Header;
