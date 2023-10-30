import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wallet from '../Account/Wallet/Wallet';
import './Header.css'
import logoImage from '../../img/logo.svg';
import balansPlusImage from '../../img/balans-plus.svg';
import headerAvatarImage from '../../img/header-avatar.png';
import lk1Image from '../../img/lk1.svg';
import lk2ActiveImage from '../../img/lk2-active.svg';
import lk3Image from '../../img/lk3.svg';
import lk4Image from '../../img/lk4.svg';
import lk5Image from '../../img/lk5.svg';
import lk6Image from '../../img/lk6.svg';
import AuthContext from '../../AuthContext.js'
import Rules from './Rules/Rules.js'
import axios from 'axios';

function Header({ balance }) {
    const { logout } = useContext(AuthContext);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [userImage, setUserImage] = useState(null); 
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get(`http://31.129.111.149:5000/getUserData`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                withCredentials: true

            })
            .then(response => {
                if (response.data && response.data.imageUrl && response.data.imageUrl !== "") {
                    setUserImage(response.data.imageUrl);
                }
            })
            .catch(error => {
                console.error("Ошибка при получении данных пользователя:", error);
            });
        } else {
            console.error("Токен отсутствует в localStorage");
        }
    }, []);

    return (
        <header>
            <div className="container container-lk">
                <div className="header-container">
                    <div className="header-container-logo">
                    <img src={logoImage} alt="Логотип" />
                    </div>
                    <ul className="header-container-links">

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
                    <div className="header-container-lk-right">
                        <div className="header-container-lk-right-part">
                            <div className="header-container-lk-right-part-balans">
                                <p>Баланс</p>
                                <Link to="/Account">

                                    <img src={balansPlusImage} alt="" />
                                </Link>

                            </div>
                            <span>{balance} <strike>р.</strike></span>

                        </div>
                        <div className="header-container-lk-right-part-img" onClick={toggleDropdown}>
                        <img src={userImage} alt="Логотип пользователя" />
                            {isDropdownVisible && (
                                <div className="dropdown-menu">
                                    <button onClick={logout}>Выйти</button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span />
                </label>
                <div className="bg" />
                <div className="menu__box">
                    <div className="links-burger">
                        <div className="links-burger-top">
                            <img src="../../img/logo.svg" alt="" />
                        </div>
                        <div className="header-container-lk-right header-container-lk-right-mob">
                            <div className="header-container-lk-right-part">
                                <div className="header-container-lk-right-part-balans">
                                    <p>Баланс</p>
                                    <img src="../../img/balans-plus.svg" alt="" />
                                </div>
                                <span>
                                    <span>{balance} <strike>р.</strike></span>
                                </span>
                            </div>
                            <div className="header-container-lk-right-part-img">
                                <img src="../../img/header-avatar.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
