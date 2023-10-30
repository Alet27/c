import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import social1 from '../../img/social1.svg';
import social2 from '../../img/social2.svg';
import social3 from '../../img/social3.svg';
import social4 from '../../img/social4.svg';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-container">
                    <ul className="footer-container-links">
                    <li>
                            <Link to="/main">Главная</Link>
                        </li>

                        <li>
                            <Link to="/rules">Правила</Link>
                        </li>
                        <li>
                            <a href="#!">Поддержка</a>
                        </li>
                    </ul>
                    <div className="footer-container-social-media">
                        <a href="#!">
                            <img src={social1} alt="Social 1" />
                        </a>
                        <a href="#!">
                            <img src={social2} alt="Social 2" />
                        </a>
                        <a href="#!">
                            <img src={social3} alt="Social 3" />
                        </a>
                        <a href="#!">
                            <img src={social4} alt="Social 4" />
                        </a>
                    </div>
                    <p>@ 2023 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
