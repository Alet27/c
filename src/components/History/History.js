import React, { useState, useEffect } from 'react';
import axios from 'axios';

function History() {
    const [userImage, setUserImage] = useState(null); 
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        axios.get(`http://31.129.111.149:5000/getWinners`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            withCredentials: true
        })
        .then(response => {
            setWinners(response.data);
        })
        .catch(error => {
            console.error("Ошибка при получении списка победителей:", error);
        });
    }, []);

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
        <section>
            <div className="section-lk-history-container">
                {winners.map(winner => (
                    <div key={winner.id} className="section-lk-history-container-block">
                        <div className="section-lk-history-container-block-top">
                            <div className="section-lk-history-container-block-top-img">
                                <img src={userImage} alt="Логотип пользователя" />
                            </div>
                            <div className="section-lk-history-container-block-top-text">
                                <div className="section-lk-history-container-block-top-text-blue">
                                    <h5>{winner.date}</h5>
                                    <h5>{winner.time}</h5>
                                </div>
                                <p>{winner.name}</p>
                                <p>
                                    Выигрыш: <span>₽{winner.amount}</span>
                                </p>
                                <p>
                                    Шанс: <span>{winner.chance}%</span>
                                </p>
                            </div>
                        </div>
                        <div className="section-lk-history-container-block-boxes">
                            <div className="section-lk-history-container-block-boxes-content">
                                {winner.items && winner.items.map(item => (
                                    <div key={item.id} className="section-lk-history-container-block-box">
                                        <img src={item.image} alt="" />
                                        <p>{item.chance}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="section-lk-history-container-block-btn" type="button">
                            Проверить
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default History;
