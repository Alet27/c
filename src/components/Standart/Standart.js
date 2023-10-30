
import img5 from "../../img/smile.svg";
import arr_chat from "../../img/arr-chat.svg";
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

import axios from 'axios';
import McRoulette from './McRoulette.tsx';

function Standart({ balance, setBalance }) {
    const rouletteRef = useRef(null);
    const [players, setPlayers] = useState([]);
    const [bet, setBet] = useState(0);
    const [currentUser, setCurrentUser] = useState(null);
    const [seconds, setSeconds] = useState(60);
    const [isRolling, setIsRolling] = useState(false);
    const [winner, setWinner] = useState(null);
    const [joinedPlayers, setJoinedPlayers] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [gameBank, setGameBank] = useState(0);
    const [winnersList, setWinnersList] = useState([]);
    const [userImage, setUserImage] = useState(null);
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const [rouletteAvatars, setRouletteAvatars] = useState([{}]);

    useEffect(() => {
        const newSocket = io(`${baseUrl}`);
        setSocket(newSocket);

        return () => newSocket.disconnect();
    }, []);


    const handleJoin = () => {
        
        if (balance >= 100) {
            if (joinedPlayers === 0) {
                setSeconds(10);
            }

            axios.get(`http://31.129.111.149:5000/getUserData`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                withCredentials: true

            })
                .then(response => {
                    const playerInfo = response.data;

                    if (Array.isArray(response.data.user_avatar)) {
                        response.data.user_avatar = response.data.user_avatar.join('');
                    }

                    const updatedPlayers = [...players, { ...playerInfo, bet: 100 }];
                    const totalBets = updatedPlayers.reduce((sum, player) => sum + player.bet, 0);
                    const playersWithWinChance = updatedPlayers.map(player => ({
                        ...player,
                        winChance: (player.bet / totalBets) * 100
                    }));

                    setPlayers(playersWithWinChance);

                    const sortedPlayers = playersWithWinChance.sort((a, b) => b.winChance - a.winChance);

                    const totalAvatars = 150;
                    const updatedRouletteAvatars = [];
                    
                    for (const player of sortedPlayers) {
                        const playerAvatarsCount = Math.round((player.winChance / 100) * totalAvatars);
                        for (let i = 0; i < playerAvatarsCount; i++) {
                            updatedRouletteAvatars.push({ userImage: player.imageUrl });
                        }
                    }
                    
                    while (updatedRouletteAvatars.length < totalAvatars) {
                        updatedRouletteAvatars.push({ userImage: sortedPlayers[sortedPlayers.length - 1].imageUrl });
                    }


                    setRouletteAvatars(updatedRouletteAvatars);
                    
                    setJoinedPlayers(joinedPlayers + 1);
                    setTotalItems(totalItems + 5);
                    setGameBank(gameBank + 100);
                    setBalance(prevBalance => prevBalance - 100);
                })
                .catch(error => {
                    console.error("Error fetching user info:", error);
                });
        } else {
            console.error("Not enough funds in the balance!");
        }
    };



    const renderPlayersList = () => {
        return players.map((player, index) => (
            <div key={index} className="victory-block-content-part_standart-game">
                <div className="victory-block-content-part-img_standart-game">
                    <img src={player.imageUrl} alt="" />
                </div>

                <p>
                    {player.name} -{" "}
                    <span className="victory-block-content-part-span-green_standart-game">
                        {Math.round(player.winChance)}%
                    </span>
                </p>
            </div>
        ));
    };

    const sendMessage = (authorId, content) => {
        socket.emit('send message', { authorId, content });
    };

    const handleSendMessage = (messageContent) => {
        if (currentUser) {
            const message = {
                authorId: currentUser._id,
                content: messageContent
            };
            sendMessage(currentUser._id, messageContent);
        } else {
            console.error("Пользователь не авторизован");
        }
    };

    useEffect(() => {
        if (socket) {
            socket.on('load previous messages', (messages) => {
                setMessages(messages);
            });

            socket.on('new message', (message) => {
                setMessages(prevMessages => [...prevMessages, message]);
            });

            socket.on('receiveMessage', (message) => {
                setMessages(prevMessages => [...prevMessages, message]);
            });

            return () => {
                socket.disconnect();
            }
        }
    }, [socket]);




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
                    if (response.data && typeof response.data === 'object' && !response.data.token) {
                        setCurrentUser(response.data);
                        if (response.data.imageUrl) {
                            setUserImage(response.data.imageUrl);
                        }
                    } else {
                        console.error("Unexpected data format from server");
                    }
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        } else {
            console.error("Token is not available in localStorage");
        }
    }, []);

    useEffect(() => {
        let timer;
        if (joinedPlayers > 0) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds <= 0) {
                        clearInterval(timer);
                        startGame();
                        return 60;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [joinedPlayers]);

    const startGame = () => {
        console.log("Игра началась!");
        setIsRolling(true);
        selectWinner();
    };
    
    const fetchPlayersFromDB = () => {
        axios.get(`http://31.129.111.149:5000/getPlayers`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            withCredentials: true

        })
            .then(response => {
                const playersData = response.data;
                playersData.sort((a, b) => b.winChance - a.winChance);

                setPlayers(playersData);
            })
            .catch(error => {
                console.error("Ошибка при получении списка игроков:", error);
            });
    };
    const selectWinner = () => {
        if (players.length === 0) {
            console.error("Нет игроков для выбора победителя");
            return;
        }
        const randomIndex = Math.floor(Math.random() * players.length);
        const newWinner = players[randomIndex];
        setWinner(newWinner);

        axios.post(`http://31.129.111.149:5000/recordWin`, {
            winner: newWinner.name,
            amount: gameBank,
            chance: newWinner.winChance
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            withCredentials: true

        })
            .then(response => {
                console.log("Data recorded successfully:", response.data);
                fetchWinnersList();
            })
            .catch(error => {
                console.error("Ошибка при записи данных о выигрыше:", error);
            });
    };




    useEffect(() => {
        fetchPlayersFromDB(); 
    }, []);

    const fetchWinnersList = () => {
        axios.get(`http://31.129.111.149:5000/getWinners`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            withCredentials: true

        })
            .then(response => {
                setWinnersList(response.data);
            })
            .catch(error => {
                console.error("Ошибка при получении списка победителей:", error);
            });
    };


    useEffect(() => {
        fetchWinnersList();
        fetchLastWinner();
    }, []);

    const fetchLastWinner = () => {
        axios.get(`http://31.129.111.149:5000/getLastWinner`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            withCredentials: true

        })
            .then(response => {
                setWinner(response.data);
            })
            .catch(error => {
                console.error("Ошибка при получении последнего победителя:", error);
            });
    };

    const weaponsCount = 150
    const transitionDuration = 10
    return (
        <section>
            <div className="container container-lk">
                <div className="section-lk-title">Standart Game</div>
                <div className="section-lk-top_standart-game">
                    <div className="section-lk-top-block_standart-game">
                        <span>{joinedPlayers} человек</span>
                        <p>К игре присоединилось</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>{gameBank} р.</span>
                        <p>Банк игры</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>{totalItems}</span>
                        <p>Предметов внесенно</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</span>
                        <p>Старт игры через</p>
                    </div>
                </div>
                <McRoulette
                    className="section-lk-top-images_standart-game"
                    weapons={rouletteAvatars}
                    weaponsCount={150}
                    transitionDuration={10}
                    isRolling={isRolling}

                />



                <div className="section-lk-container_standart-game">
                    <div className="section-lk-container-left-_standart-game">
                        <button className="section-lk-container-left-participate_standart-game" onClick={handleJoin}>
                            Участвовать
                        </button>
                        <div className="section-lk-container-left-boxes__standart-game">
                            <div className="section-lk-container-left-box__standart-game">
                                {/* <div className="section-lk-container-left-box-img__standart-game">
                                    <img src={userImage} alt="User Logo" />
                                </div> */}

                                <div className="section-lk-container-left-box-content__standart-game">
                                    <h3>{winner ? `${winner.name} выиграл:` : ''}</h3>
                                    {winnersList.map((winnerItem, index) => (
                                        <div key={index} className="section-lk-container-left-box-content-line__standart-game">
                                            <div>
                                                <img
                                                    src={userImage}
                                                    alt=""
                                                    className="section-lk-container-left-box-content-line-img__standart-game"
                                                />
                                            </div>
                                            <p>
                                                {winnerItem.name} выиграл: ₽{winnerItem.amount} с шансом {winnerItem.chance}%
                                            </p>
                                        </div>
                                    ))}
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="section-lk-container-right_standart-game">
                        <div className="section-lk-container-right-victory-block_standart-game">
                            <h3>Шанс победы</h3>
                            <div className="section-lk-container-right-victory-block-content_standart-game">
                                {renderPlayersList()}
                            </div>
                        </div>
                        <div className="chat-block">
                            <div className="chat-block-top">Чат сайта</div>
                            <div className="chat-block-content">
                                {messages.map((message, index) => (
                                    <div key={index} className="chat-block-content-block">
                                        <div className="chat-block-content-block-avatar">
                                            <img src={userImage} alt="" />
                                        </div>
                                        <div className="chat-block-content-block-info">
                                            <div className="chat-block-content-block-info-massage">
                                                <div className="chat-block-content-block-info-massage-name">
                                                    {message.authorId}
                                                </div>
                                                <div className="chat-block-content-block-info-massage-text">
                                                    {message.content}
                                                </div>
                                            </div>
                                            <div className="chat-block-content-block-info-time">
                                             
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="chat-block-bottom">
                                <img
                                    src={img5}
                                    alt=""
                                    className="chat-block-bottom-smile"
                                />
                                <input type="text" className="chat-input" placeholder="Введите сообщение" />
                                <button
                                    className="btn-chat-send"
                                    type="button"

                                    onClick={() => {
                                        const inputElem = document.querySelector('.chat-input'); 

                                        if (inputElem && inputElem.value) {
                                            handleSendMessage(inputElem.value);
                                            inputElem.value = '';
                                        }
                                    }}
                                > <img
                                        src={arr_chat}
                                        alt=""
                                        className="chat-block-bottom-send"
                                    />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Standart;
