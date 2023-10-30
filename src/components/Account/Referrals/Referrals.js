import React from 'react';

function Referrals() {
    return (

        <>
            <div className="section-lk-container-right-title">Рефералы</div>
            <div className="section-lk-container-right3-block">
                <p>Ваш реферальный код</p>
                <span>
                    375893758937589023023023
                    <img src="/img/copy.svg" alt="" />
                </span>
            </div>
            <div className="section-lk-container-right3-input">
                <input type="text" placeholder="Код вашего друга" />
                <button type="button">Применить</button>
            </div>
            <div className="section-lk-container-right3-block">
                <p>Общий бонус</p>
                <span className="section-lk-container-right3-block-span-big-size">
                    10,000 руб.
                </span>
            </div>
            <div className="section-lk-container-right-title section-lk-container-right-second-title">
                Инструкция реферальной системы
            </div>
            <div className="section-lk-container-right-text">
                Create, Sell well &amp; Collect Your Best Very Fast NFTs.The purpose of
                lorem ipsum is to create a natural looking block of text (sentence,
                paragraph, page, etc.) that doesn't distract from the layout. A practice
                not without controversy, laying out pages with meaningless
            </div>
            <ol>
                <li>Our marketplace is the world’s first and largest</li>
                <li>Our marketplace is the world’s first and largest</li>
                <li>Our marketplace is the world’s first and largest</li>
                <li>Our marketplace is the world’s first and largest</li>
            </ol>
        </>


    );
}

export default Referrals;
