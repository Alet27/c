import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Wallet({ balance, setBalance }) {
    const [amount, setAmount] = useState(0);


    const handleRefill = () => {
        const token = localStorage.getItem('authToken');
        axios.post(`http://31.129.111.149:5000/updateBalance`, { amount }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true

        })
            .then(response => {
                setBalance(prevBalance => prevBalance + Number(amount));
            })
            .catch(error => {
                console.error("Error updating balance:", error);
            });
    };

    return (
        <>
            <div className="section-lk-container-right-title">Кошелёк</div>
            <div className="section-lk-container-right-cart-container">
                <div className="section-lk-container-right-cart-container-left">
                    <div className="section-lk-container-right-cart-container-left-logo">
                        <img src="/img/logo-card.svg" alt="" className="logo-cart" />
                    </div>
                    <div className="section-lk-container-right-cart-container-left-bottom">
                        <div className="section-lk-container-right-cart-container-left-bottom-block">
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                        <div className="section-lk-container-right-cart-container-left-bottom-text">
                            <p>ID 4758 8745</p>
                            <p>Max Richter</p>
                        </div>
                    </div>
                </div>
                <div className="section-lk-container-right-cart-container-right">
                    <p>
                        Подписка: <span>Геймер</span>{" "}
                    </p>
                    <h3>Баланс</h3>
                    <div className="section-lk-container-right-cart-container-right-price">
                        <span>{balance} <strike>р.</strike></span>
                    </div>
                </div>
            </div>
            <div className="section-lk-container-right-title section-lk-container-right-title4">
                Перевести монеты
            </div>
            <div className="section-lk-container-right-cart-container2">
                <div className="section-lk-container-right-cart-container2-block">
                    <div className="section-lk-container-right-cart-container2-block-img">
                        <img src="/img/cart3.svg" alt="" />
                        <img src="/img/cart1.svg" alt="" />
                    </div>
                    <div className="section-lk-container-right-cart-container2-block-text">
                        Вывести на карту
                    </div>
                </div>
                <div className="section-lk-container-right-cart-container2-block">
                    <div className="section-lk-container-right-cart-container2-block-img">
                        <img src="/img/cart3.svg" alt="" />
                        <img src="/img/cart2.svg" alt="" />
                    </div>
                    <div className="section-lk-container-right-cart-container2-block-text">
                        Перевести другу
                    </div>
                </div>
            </div>
            <div className="section-lk-container-right-title section-lk-container-right-title4 section-lk-container-right-title5">
                Пополнить баланс
            </div>
            <div className="section-lk-container-right-cart-container2 section-lk-container-right-cart-container3">
                <div className="section-lk-container-right-cart-container3-block">
                    <img src="/img/bank1.svg" alt="" />
                    <p>Sberbank</p>
                </div>
                <div className="section-lk-container-right-cart-container3-block">
                    <img src="/img/bank2.svg" alt="" />
                    <p>Pay</p>
                </div>
                <div className="section-lk-container-right-cart-container3-block">
                    <img src="/img/bank3.svg" alt="" />
                </div>
                <div className="section-lk-container-right-cart-container3-block">
                    <img src="/img/bank4.svg" alt="" />
                    <p>WebMoney</p>
                </div>

            </div>
            <div className="balance-container">
                <div className="refill-container section-lk-container-right3-input">
                    <input
                        type="number"
                        placeholder="Сумма пополнения"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button onClick={handleRefill}>Пополнить</button>
                </div>
            </div>
        </>

    );
}

export default Wallet;
