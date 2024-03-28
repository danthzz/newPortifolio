import React, { useState } from 'react';
import './services.css';

const Services = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (index) => {
        setActiveModal(index);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Aptidões</h2>
            <div className="section__subtitle">O que posso oferecer</div>
            <div className="services__container container1 grid">
                {/* APTIDOES 1 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid-alt services__icon"></i>
                        <h3 className="services__title">
                            Frontend
                            <br />
                            Developer
                        </h3>
                    </div>
                    <button className="button button--flex button--small button--link services__button" onClick={() => openModal(0)}>
                        Ver mais
                        <i className="uil uil-arrow-right button__icon"></i>
                    </button>
                    <div className={`services__modal ${activeModal === 0 ? 'active-modal' : ''}`}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">
                                Frontend
                                <br />
                                Developer
                            </h4>
                            <button className="uil uil-times services__modal-close" onClick={closeModal}></button>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Desenvolvimento de Interfaces.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Consumo de API's.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Desenvolvimento de Web Pages.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* APTIDOES 2 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Backend
                            <br />
                            Developer
                        </h3>
                    </div>
                    <button className="button button--flex button--small button--link services__button" onClick={() => openModal(1)}>
                        Ver mais
                        <i className="uil uil-arrow-right button__icon"></i>
                    </button>
                    <div className={`services__modal ${activeModal === 1 ? 'active-modal' : ''}`}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">
                                Backend
                                <br />
                                Developer
                            </h4>
                            <button className="uil uil-times services__modal-close" onClick={closeModal}></button>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Automações de Processos com Phyton.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>CRUD com NodeJS.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Banco de Dados (SQL & NoSQL).</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* APTIDOES 3 */}
                <div className="services__content">
                    <div>
                        <i className="uil uil-wrench services__icon"></i>
                        <h3 className="services__title">Informática</h3>
                    </div>
                    <button className="button button--flex button--small button--link services__button" onClick={() => openModal(2)}>
                        Ver mais
                        <i className="uil uil-arrow-right button__icon"></i>
                    </button>
                    <div className={`services__modal ${activeModal === 2 ? 'active-modal' : ''}`}>
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Informática</h4>
                            <button className="uil uil-times services__modal-close" onClick={closeModal}></button>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Manutenção Eletrônica.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Hardware.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Software.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Suporte Técnico.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Pacote office.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>SAP.</p>
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
