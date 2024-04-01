import React, { useState } from 'react';
import './qualification.css';
import { useLanguageContext } from '../language';

const Qualifications = () => {
    const [activeTab, setActiveTab] = useState('education');
    const { selectedLanguage } = useLanguageContext();

    const translations = {
        en: {
            sectionTitle: 'Qualifications',
            sectionSubtitle: 'Professional Summary',
            education: 'Education',
            work: 'Work Experience',
            ads: 'Analysis and Systems Development',
            ip: 'In progress',
            current: 'Current',
            ia: 'Fundamentals in AI',
            dev: 'Trainee Full Stack Developer',
            proair: 'Airport Assistant',
            rm:'RM Security Systems',
            fortlyne: 'Electronic Maintenance Technician',
            park: 'Parking advisor',
            lh:'Intern'
        },
        br: {
            sectionTitle: 'Qualificações',
            sectionSubtitle: 'Resumo Profissional',
            education: 'Formação',
            work: 'Profissional',
            ads: 'Análise e Desenvolvimento de Sistemas',
            ip:'Em Progresso', 
            current: 'Atualmente',
            ia: 'Fundamentos em IA',
            dev: 'Desenvolvedor Full Stack Trainee',
            proair:'Auxiliar Aeroportuário',
            rm: 'RM Sistemas de Segurança',
            fortlyne:'Técnico de Manutenção Eletrônica',
            park: 'Orientador de Estacionamento',
            lh: 'Estagiário'
        },
    };

    const handleTabClick = (target) => {
        setActiveTab(target);
    };

    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">{translations[selectedLanguage].sectionTitle}</h2>
            <div className="section__subtitle">{translations[selectedLanguage].sectionSubtitle}</div>
            <div className="qualification__container container1">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
                        onClick={() => handleTabClick('education')}
                        data-target="#education"
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        {translations[selectedLanguage].education}
                    </div>
                    <div
                        className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
                        onClick={() => handleTabClick('work')}
                        data-target="#work"
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        {translations[selectedLanguage].work}
                    </div>
                </div>
                <div className="qualificaton__sections">
                <div
                        className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''
                            }`}
                        data-content
                        id="education"
                    >
                        {/* 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].ads}</h3>
                                <p className="qualification__subtitle">Unicesumar-Pedro Leopoldo</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - {translations[selectedLanguage].ip}
                                </div>
                            </div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                        </div>
                        {/* 2*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                            <div>
                                <h3 className="qualification__title">Full Stack
                                    <br />JavaScript
                                </h3>
                                <p className="qualification__subtitle">One Bit Code</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 3 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bootcamp C#
                                </h3>
                                <p className="qualification__subtitle">Digital Inovation One</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 4 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                            <div>
                                <h3 className="qualification__title">Python</h3>
                                <p className="qualification__subtitle">Data Science Academy</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 5 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].ia}</h3>
                                <p className="qualification__subtitle">Data Science Academy</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                            <div>
                                <p className="qualification__rounder"></p>
                                {/* <p className="qualification__line"></p> */}
                            </div>
                        </div>
                    </div>
                    <div
                        className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''
                            }`}
                        data-content
                        id="work"
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].dev}</h3>
                                <p className="qualification__subtitle">Pruftechnik MGS</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {selectedLanguage === 'br' ? '01/23' : '23/01'} - {translations[selectedLanguage].current}
                                </div>
                            </div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].proair}</h3>
                                <p className="qualification__subtitle">Proair</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {selectedLanguage === 'br' ? '10/22 - 01/23' : '22/10 - 23/01'}
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].park}</h3>
                                <p className="qualification__subtitle">Auto Park</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {selectedLanguage === 'br' ? '06/21 - 10/22' : '21/06 - 22/10'}
                                </div>
                            </div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 3 ====================--> */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <p className="qualification__rounder"></p>
                                <p className="qualification__line"></p>
                            </div>
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].fortlyne}</h3>
                                <p className="qualification__subtitle">{translations[selectedLanguage].rm}</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {selectedLanguage === 'br' ? '12/20 - 06/21' : '20/12 - 21/06'}
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 4 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{translations[selectedLanguage].lh}</h3>
                                <p className="qualification__subtitle">LafargeHolcim</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {selectedLanguage === 'br' ? '09/20 - 06/21' : '20/09 - 21/06'}
                                </div>
                            </div>
                            <div>
                                <p className="qualification__rounder"></p>
                                {/* <!-- <p className="qualification__line"></p> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
