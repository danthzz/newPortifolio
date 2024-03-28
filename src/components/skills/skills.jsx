import React, { useEffect } from 'react';
import './skills.css';

const Skills = () => {
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
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Meu nível técnico</span>
            <div className="skills__container container1 grid">
                <div>
                    {/* SKILLS 1 */}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h3 className="skills__titles">Frontend developer</h3>
                                <div className="skills__subtitle">Intermediário</div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__subtitle">Avançado</span>
                                    <div className="skills__number">85%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__html"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__subtitle">Avançado</span>
                                    <div className="skills__number">80%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__css"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__subtitle">Avançado</span>
                                    <div className="skills__number">80%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__js"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__subtitle">Avançado</span>
                                    <div className="skills__number">70%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__react"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Angular</h3>
                                    <span className="skills__subtitle">Intermediário</span>
                                    <div className="skills__number">40%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__angular"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">TypeScript</h3>
                                    <span className="skills__subtitle">Intermediário</span>
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
                                <h3 className="skills__titles">Backend developer</h3>
                                <div className="skills__subtitle">Básico</div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__subtitle">Intermediario</span>
                                    <div className="skills__number">40%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__python"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node js</h3>
                                    <span className="skills__subtitle">Intermediário</span>
                                    <div className="skills__number">60%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__node"></div>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">C#</h3>
                                    <span className="skills__subtitle">Intermediário</span>
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
                                <h3 className="skills__titles">Informática</h3>
                                <div className="skills__subtitle">Avançada</div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Hardware</h3>
                                    <span className="skills__subtitle">Avançado</span>
                                    <div className="skills__number">70%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__hardwere"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Microsoft Office</h3>
                                    <span className="skills__subtitle">Avançado</span>
                                    <div className="skills__number">60%</div>
                                </div>
                                <div className="skills__bar">
                                    <div className="skills__percentage skills__office"></div>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Manutenção</h3>
                                    <span className="skills__subtitle">Avançado</span>
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
                                <h3 className="skills__titles">Idiomas</h3>
                                <div className="skills__subtitle"></div>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Inglês</h3>
                                    <span className="skills__subtitle">Intermediário</span>
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
