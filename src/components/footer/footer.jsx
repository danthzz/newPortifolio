import React from 'react';
import './footer.css';
import { useLanguageContext } from '../language';


const Footer = () => {
    const { selectedLanguage } = useLanguageContext();

    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container1">
                    <div>
                        <h1 className="footer__title">
                            Daniel Gomes
                        </h1>
                        <span className="footer__subtitle">{selectedLanguage === 'br' ? 'Desenvolvedor Full Stack' : 'Full Stack Developer'}</span>
                    </div>
                    <div className="footer__socials mt-3">
                        <a href="https://www.instagram.com/danthzz/" target="_blank" rel="noopener noreferrer" className="footer__social me-5">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com/Danthzz" target="_blank" rel="noopener noreferrer" className="footer__social">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>
                <br />
                <span className="footer__copy">&#169; Daniel Gomes All right reserved</span>
            </div>
        </footer>
    );
};

export default Footer;