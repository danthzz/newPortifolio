import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container1 grid">
                    <div>
                        <h1 className="footer__title">
                            Daniel
                            <br />
                            Gomes
                        </h1>
                        <span className="footer__subtitle">Fullstack Developer</span>
                    </div>
                    <div className="footer__socials">
                        <a href="https://www.instagram.com/danthzz/" target="_blank" rel="noopener noreferrer" className="footer__social">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://twitter.com/Danthzz" target="_blank" rel="noopener noreferrer" className="footer__social">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                    </div>
                </div>
                <br />
                <p className="footer__copy">&#169; Daniel Gomes All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;