import React, { useState } from 'react';
import './services.css';
import { useLanguageContext } from '../language';

const Services = () => {
    const [activeModal, setActiveModal] = useState(null);
    const { selectedLanguage } = useLanguageContext();

    const openModal = (index) => {
        setActiveModal(index);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const translations = {
        en: {
            sectionTitle: 'Services',
            sectionSubtitle: 'What I Can Offer',
            frontend: 'Frontend',
            backend: 'Backend',
            it: 'IT',
            seeMore: 'See More',
            frontendDeveloper: 'Frontend Developer',
            frontend1: 'UI/UX Figma and Canvas',
            frontend2: 'API Consumption',
            frontend3: 'Web Pages Development',
            backendDeveloper: 'Backend Developer',
            backend1: 'Process Automation and Data Analysis with Python',
            backend2:'NodeJS CRUD',
            backend3:'Databases (SQL & NoSQL)',
            it1: 'Electronic Maintenance',
            it2: 'Hardware',
            it3: 'Software',
            it4: 'Technical Support',
            it5: 'Microsoft Office',
            it6: 'SAP',
        },
        br: {
            sectionTitle: 'Aptidões',
            sectionSubtitle: 'O que posso oferecer',
            frontend: 'Frontend',
            backend: 'Backend',
            it: 'Informática',
            seeMore: 'Ver mais',
            close: 'Fechar',
            frontendDeveloper: 'Desenvolvedor Frontend',
            frontend1: 'UI/UX Figma e Canvas',
            frontend2: 'Consumo de API\'s',
            frontend3: 'Desenvolvimento de Páginas Web',
            backendDeveloper: 'Desenvolvedor Backend',
            backend1: 'Automações de Processos e Análise de Dados com Python',
            backend2: 'CRUD com NodeJS',
            backend3: 'Banco de Dados (SQL & NoSQL)',
            it1: 'Manutenção Eletrônica',
            it2: 'Hardware',
            it3: 'Software',
            it4: 'Suporte Técnico',
            it5: 'Pacote Office',
            it6: 'SAP',
        },
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">{translations[selectedLanguage].sectionTitle}</h2>
            <div className="section__subtitle">{translations[selectedLanguage].sectionSubtitle}</div>
            <div className="services__container container1 grid">
                {/* SKILLS 1 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid-alt services__icon"></i>
                        <h3 className="services__title">
                            {translations[selectedLanguage].frontend}
                        </h3>
                    </div>
                    <button className="button button--flex button--small button--link services__button" onClick={() => openModal(0)}>
                        {translations[selectedLanguage].seeMore}
                        <i className="uil uil-arrow-right button__icon"></i>
                    </button>
                    <div className={`services__modal ${activeModal === 0 ? 'active-modal' : ''}`}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">
                                {translations[selectedLanguage].frontendDeveloper}
                            </h4>
                            <button className="uil uil-times services__modal-close" onClick={closeModal}></button>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].frontend1}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].frontend2}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].frontend3}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* SKILLS 2 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            {translations[selectedLanguage].backend}
                        </h3>
                    </div>
                    <button className="button button--flex button--small button--link services__button" onClick={() => openModal(1)}>
                        {translations[selectedLanguage].seeMore}
                        <i className="uil uil-arrow-right button__icon"></i>
                    </button>
                    <div className={`services__modal ${activeModal === 1 ? 'active-modal' : ''}`}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">
                                {translations[selectedLanguage].backendDeveloper}
                            </h4>
                            <button className="uil uil-times services__modal-close" onClick={closeModal}></button>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].backend1}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].backend2}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].backend3}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* SKILLS 3 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-wrench services__icon"></i>
                        <h3 className="services__title">{translations[selectedLanguage].it}</h3>
                    </div>
                    <button className="button button--flex button--small button--link services__button" onClick={() => openModal(2)}>
                        {translations[selectedLanguage].seeMore}
                        <i className="uil uil-arrow-right button__icon"></i>
                    </button>
                    <div className={`services__modal ${activeModal === 2 ? 'active-modal' : ''}`}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">{translations[selectedLanguage].it}</h4>
                            <button className="uil uil-times services__modal-close" onClick={closeModal}></button>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].it1}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].it2}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].it3}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].it4}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].it5}</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>{translations[selectedLanguage].it6}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
