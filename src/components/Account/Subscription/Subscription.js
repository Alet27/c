import React from 'react';

function Subscription() {
    return (
        <>
            <div className="section-lk-container-right-title section-lk-container-right-title3">
                Премиум подписки DOTA2DROP
            </div>
            <div className="section-lk-container-right4-text">
                Значимость этих проблем настолько очевидна, что консультация с широким
                активом способствует подготовки и реализации позиций, занимаемых участниками
                в отношении поставленных задач
            </div>
            <div className="section-lk-container-right4-container">
                <div className="section-lk-container-right4-container-block section-lk-container-right4-container-block-active">
                    <div className="section-lk-container-right4-container-block-bg" />
                    <div className="section-lk-container-right4-container-block-text">
                        <h3>Базовая</h3>
                        <span>Басплатно</span>
                        <p>Значимость этих проблем настолько очевидна, что консультация</p>
                        <ul>
                            <li>9% комиссия платформы</li>
                            <li>50 матчей в истории</li>
                            <li>участие в любительских турнирах</li>
                        </ul>
                        <button type="button">
                            Ваша подписка
                            <img src="/img/tick-white.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="section-lk-container-right4-container-block">
                    <div className="section-lk-container-right4-container-block-bg" />
                    <div className="section-lk-container-right4-container-block-text">
                        <h3>Премиум</h3>
                        <span>2,999 руб. в месяц</span>
                        <p>Значимость этих проблем настолько очевидна, что консультация</p>
                        <ul>
                            <li>4% комиссия платформы</li>
                            <li>50 матчей в истории</li>
                            <li>участие в любительских турнирах</li>
                        </ul>
                        <button type="button">Оформить</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Subscription;
