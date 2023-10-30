import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import lk1Image from '../../img/lk1.svg';
import lk2ActiveImage from '../../img/lk2-active.svg';
import lk2Image from '../../img/lk2.svg';
import lk3Image from '../../img/lk3.svg';
import lk4Image from '../../img/lk4.svg';
import lk5Image from '../../img/lk5.svg';
import lk6Image from '../../img/lk6.svg';

function SideMenu() {
    const location = useLocation();

    const getMenuItemImage = (defaultImage, activeImage, path) => {
        return location.pathname === path ? activeImage : defaultImage;
    };

    return (
        <section className="section-lk">
            <div className="section-lk-left-menu">
                <div className="section-lk-left-menu-block">
                    <Link to="/main"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk1Image, lk2ActiveImage, "/")} alt="Главная" />
                        <p>ГЛАВНАЯ</p>
                    </Link>

                    <Link to="/account"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk2Image, lk2ActiveImage, "/account")} alt="Аккаунт" />
                        <p>АККАУНТ</p>
                    </Link>

                    <Link to="/standart"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk3Image, lk2ActiveImage, "/standart")} alt="Standart" />
                        <p>STANDART</p>
                    </Link>

                    <Link to="/low-game"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk3Image, lk2ActiveImage, "/low-game")} alt="LOW" />
                        <p>LOW</p>
                    </Link>

                    <Link to="/big-game"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk3Image, lk2ActiveImage, "/big-game")} alt="BIG" />
                        <p>BIG</p>
                    </Link>

                    <Link to="/fast-game"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk3Image, lk2ActiveImage, "/fast-game")} alt="FAST" />
                        <p>FAST</p>
                    </Link>

                    <Link to="/coin-flip"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk3Image, lk2ActiveImage, "/coin-flip")} alt="COIN FLIP" />
                        <p>COIN FLIP</p>
                    </Link>

                    <Link to="/history"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk4Image, lk2ActiveImage, "/history")} alt="ИСТОРИЯ" />
                        <p>ИСТОРИЯ</p>
                    </Link>

                    <Link to="/draw"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk5Image, lk2ActiveImage, "/draw")} alt="РОЗЫГРЫШ" />
                        <p>РОЗЫГРЫШ</p>
                    </Link>

                    <Link to="/top"
                        className="section-lk-left-menu-block">
                        <img src={getMenuItemImage(lk6Image, lk2ActiveImage, "/top")} alt="ТОП" />
                        <p>ТОП</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SideMenu;
