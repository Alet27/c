
import React, { useState, useEffect, useRef } from 'react';

import Rectangle_4333 from '../../img/Rectangle 4333.png';
import image_3 from '../../img/image 3.png';


import av_1 from '../../img/av1.png';
import av_2 from '../../img/av2.png';
import smile from '../../img/smile.svg';
import arr_chat from '../../img/arr-chat.svg';
import McRoulette from '../Standart/McRoulette.tsx';
import weapons from "../Standart/weapons.json"

function Low() {

    const weaponsCount = 150
    const transitionDuration = 10
    return (
        <section>
            <div className="container container-lk">
                <div className="section-lk-title">Low Game</div>
                <div className="section-lk-top_standart-game">
                    <div className="section-lk-top-block_standart-game">
                        <span>28 человек</span>
                        <p>К игре присоединилось</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>10,000 р.</span>
                        <p>Банк игры</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>50</span>
                        <p>Предметов внесенно</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>10:32</span>
                        <p>Старт игры через</p>
                    </div>
                </div>
                <McRoulette
                    className="section-lk-top-images_standart-game"
                    weapons={weapons}  // this is assuming the weapons prop corresponds to the images array
                    weaponsCount={weaponsCount}
                    transitionDuration={transitionDuration} // this value can be adjusted as needed
                />
                <div className="section-lk-container_standart-game">
                    <div className="section-lk-container-left-_standart-game">
                        <button className="section-lk-container-left-participate_standart-game">
                            Участвовать
                        </button>
                        <div className="section-lk-container-left-boxes__standart-game">
                            <div className="section-lk-container-left-box__standart-game">
                                <div className="section-lk-container-left-box-img__standart-game">
                                    <img src={Rectangle_4333} alt="" />
                                </div>
                                <div className="section-lk-container-left-box-content__standart-game">
                                    <h3>Andrew12 вложил:</h3>
                                    <div className="section-lk-container-left-box-content-line__standart-game">
                                        <div>
                                            <img
                                                src={image_3}
                                                alt=""
                                                className="section-lk-container-left-box-content-line-img__standart-game"
                                            />
                                        </div>
                                        <p>
                                            Offhand Basher of Mage Skulls, Inscribed Spirit of the Head ~{" "}
                                            <span>₽100.00</span>
                                        </p>
                                    </div>
                                    <div className="section-lk-container-left-box-content-line__standart-game">
                                        <div>
                                            <img
                                                src={image_3}
                                                alt=""
                                                className="section-lk-container-left-box-content-line-img__standart-game"
                                            />
                                        </div>
                                        <p>
                                            Offhand Basher of Mage Skulls, Inscribed Spirit of the Head ~{" "}
                                            <span>₽100.00</span>
                                        </p>
                                    </div>
                                    <div className="section-lk-container-left-box-content-line__standart-game">
                                        <div>
                                            <img
                                                src={image_3}
                                                alt=""
                                                className="section-lk-container-left-box-content-line-img__standart-game"
                                            />
                                        </div>
                                        <p>
                                            Offhand Basher of Mage Skulls, Inscribed Spirit of the Head ~{" "}
                                            <span>₽100.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-lk-container-right_standart-game">
                        <div className="section-lk-container-right-victory-block_standart-game">
                            <h3>Шанс победы</h3>
                            <div className="section-lk-container-right-victory-block-content_standart-game">
                                <div className="victory-block-content-part_standart-game">
                                    <div className="victory-block-content-part-img_standart-game">
                                        <img src={Rectangle_4333} alt="" />
                                    </div>
                                    <p>
                                        Andrew12 -{" "}
                                        <span className="victory-block-content-part-span-green_standart-game">
                                            87%
                                        </span>
                                    </p>
                                </div>
                                <div className="victory-block-content-part_standart-game">
                                    <div className="victory-block-content-part-img_standart-game">
                                        <img src={Rectangle_4333} alt="" />
                                    </div>
                                    <p>
                                        Drin1213 - -{" "}
                                        <span className="victory-block-content-part-span-red_standart-game">
                                            12%
                                        </span>
                                    </p>
                                </div>
                                <div className="victory-block-content-part_standart-game">
                                    <div className="victory-block-content-part-img_standart-game">
                                        <img src={Rectangle_4333} alt="" />
                                    </div>
                                    <p>
                                        Andrew12 -{" "}
                                        <span className="victory-block-content-part-span-green_standart-game">
                                            87%
                                        </span>
                                    </p>
                                </div>
                                <div className="victory-block-content-part_standart-game">
                                    <div className="victory-block-content-part-img_standart-game">
                                        <img src={Rectangle_4333} alt="" />
                                    </div>
                                    <p>
                                        Drin1213 - -{" "}
                                        <span className="victory-block-content-part-span-red_standart-game">
                                            12%
                                        </span>
                                    </p>
                                </div>
                                <div className="victory-block-content-part_standart-game">
                                    <div className="victory-block-content-part-img_standart-game">
                                        <img src={Rectangle_4333} alt="" />
                                    </div>
                                    <p>
                                        Andrew12 -{" "}
                                        <span className="victory-block-content-part-span-green_standart-game">
                                            87%
                                        </span>
                                    </p>
                                </div>
                                <div className="victory-block-content-part_standart-game">
                                    <div className="victory-block-content-part-img_standart-game">
                                        <img src={Rectangle_4333} alt="" />
                                    </div>
                                    <p>
                                        Drin1213 - -{" "}
                                        <span className="victory-block-content-part-span-red_standart-game">
                                            12%
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="chat-block">
                            <div className="chat-block-top">Чат сайта</div>
                            <div className="chat-block-content">
                                <div className="chat-block-content-block">
                                    <div className="chat-block-content-block-avatar">
                                        <img src={av_1}
                                            alt="" />
                                    </div>
                                    <div className="chat-block-content-block-info">
                                        <div className="chat-block-content-block-info-massage">
                                            <div className="chat-block-content-block-info-massage-name">
                                                Кирилл
                                            </div>
                                            <div className="chat-block-content-block-info-massage-text">
                                                Добрый вечер
                                            </div>
                                        </div>
                                        <div className="chat-block-content-block-info-time">12:15</div>
                                    </div>
                                </div>
                                <div className="chat-block-content-block">
                                    <div className="chat-block-content-block-avatar">
                                        <img src={av_1} alt="" />
                                    </div>
                                    <div className="chat-block-content-block-info">
                                        <div className="chat-block-content-block-info-massage">
                                            <div className="chat-block-content-block-info-massage-name">
                                                Антон
                                            </div>
                                            <div className="chat-block-content-block-info-massage-text">
                                                Опишите проблему и я <br /> постараюсь вам помочь
                                            </div>
                                        </div>
                                        <div className="chat-block-content-block-info-time">12:22</div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-block-bottom">
                                <img
                                    src={smile}
                                    alt=""
                                    className="chat-block-bottom-smile"
                                />
                                <input type="text" placeholder="Введите сообщение" />
                                <button className="btn-chat-send" type="button">
                                    <img
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

        </section>
    );
}

export default Low;
