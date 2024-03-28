import React, { useState } from 'react';
import './qualification.css';

const Qualifications = () => {
    const [activeTab, setActiveTab] = useState('education');

    const handleTabClick = (target) => {
        setActiveTab(target);
    };

    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualificações</h2>
            <div className="section__subtitle">Resumo Profissional</div>
            <div className="qualification__container container1">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''
                            }`}
                        onClick={() => handleTabClick('education')}
                        data-target="#education"
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Formação
                    </div>
                    <div
                        className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''
                            }`}
                        onClick={() => handleTabClick('work')}
                        data-target="#work"
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Profissional
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
                                <h3 className="qualification__title">Análise e Desenv. de Sistemas</h3>
                                <p className="qualification__subtitle">Unicesumar-Pedro Leopoldo</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021-Em andamento
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
                                    08/2022
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
                                <h3 className="qualification__title">Inteligência Artificial Fundamentos</h3>
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
                                <h3 className="qualification__title">Desenvolvedor Full Stack Trainee</h3>
                                <p className="qualification__subtitle">Pruftechnik MGS</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    01/23 - Atualmente
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
                                <h3 className="qualification__title">Auxiliar Aeroportuário</h3>
                                <p className="qualification__subtitle">Proair</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    10/22 - 01/23
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Orientador Operador</h3>
                                <p className="qualification__subtitle">Auto Park</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    06/21 - 10/22
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
                                <h3 className="qualification__title">Técnico de Manutenção Eletrônica</h3>
                                <p className="qualification__subtitle">VA Barreto</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    12/21 - 06/22
                                </div>
                            </div>
                        </div>
                        {/* <!--==================== QUALIFICATION 4 ====================--> */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Estagiário</h3>
                                <p className="qualification__subtitle">LafargeHolcim</p>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    09/20 - 06/21
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
