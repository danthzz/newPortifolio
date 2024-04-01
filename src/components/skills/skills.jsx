import React, { useEffect } from 'react';
import './skills.css';
import { useLanguageContext } from '../language';

const Skills = () => {
    const { selectedLanguage } = useLanguageContext();

    const translations = {
        en: {
            sectionTitle: 'Skills',
            sectionSubtitle: 'My technical level',
            basic: 'Basic',
            intermediate: 'Intermediate',
            advanced: 'Advanced',
            frontendTitle: 'Frontend developer',
            backendTitle: 'Backend developer',
            itTitle: 'IT',
            languagesTitle: 'Languages',
            english: 'English',
            maintenance: 'Maintenance'
        },
        br: {
            sectionTitle: 'Habilidades',
            sectionSubtitle: 'Meu nível técnico',
            basic: 'Básico',
            intermediate: 'Intermediário',
            advanced: 'Avançado',
            frontendTitle: 'Desenvolvedor Frontend',
            backendTitle: 'Desenvolvedor Backend',
            itTitle: 'Informática',
            languagesTitle: 'Idiomas',
            english: 'Inglês',
            maintenance: 'Manutenção'
        },
    };

    useEffect(() => {
        const toggleSkills = (e) => {
            const skillsContent = e.currentTarget;
            if (skillsContent) {
                skillsContent.classList.toggle('skills__open');
                skillsContent.classList.toggle('skills__close');
            }
        };

        const skillsContents = document.querySelectorAll('.skills__content');
        skillsContents.forEach(el => {
            el.addEventListener('click', toggleSkills);
        });

        return () => {
            skillsContents.forEach(el => {
                el.removeEventListener('click', toggleSkills);
            });
        };
    }, []);

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{translations[selectedLanguage].sectionTitle}</h2>
            <span className="section__subtitle">{translations[selectedLanguage].sectionSubtitle}</span>
            <div className="skills__container container1 grid">
                <div>
                    {/* SKILLS 1 */}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h3 className="skills__titles">{translations[selectedLanguage].frontendTitle}</h3>
                                <div className="skills__subtitle">{translations[selectedLanguage].advanced}</div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">85%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__html"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">80%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__css"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">80%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__js"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">70%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__react"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">70%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__boot"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">TypeScript</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].intermediate}</span>
                                    <div className="skills__number">50%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__type"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* SKILLS 2 */}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon"></i>
                            <div>
                                <h3 className="skills__titles">{translations[selectedLanguage].backendTitle}</h3>
                                <div className="skills__subtitle">{translations[selectedLanguage].intermediate}</div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].intermediate}</span>
                                    <div className="skills__number">40%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__python"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node js</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].intermediate}</span>
                                    <div className="skills__number">60%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__node"></div>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">C#</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].intermediate}</span>
                                    <div className="skills__number">40%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__c"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* SKILLS 3 */}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-wrench  skills__icon"></i>
                            <div>
                                <h3 className="skills__titles">{translations[selectedLanguage].itTitle}</h3>
                                <div className="skills__subtitle">{translations[selectedLanguage].advanced}</div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Hardware</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">70%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__hardwere"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Microsoft Office</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">60%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__office"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">{translations[selectedLanguage].maintenance}</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].advanced}</span>
                                    <div className="skills__number">80%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__maintence"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* SKILLS 4 */}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-letter-english-a skills__icon"></i>
                            <div>
                                <h3 className="skills__titles">{translations[selectedLanguage].languagesTitle}</h3>
                                <div className="skills__subtitle"></div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">{translations[selectedLanguage].english}</h3>
                                    <span className="skills__subtitle">{translations[selectedLanguage].intermediate}</span>
                                    <div className="skills__number">70%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__english"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
