import React from 'react';
import { Link } from 'react-router-dom';

import mode1 from '../../img/mode1.png';
import mode2 from '../../img/mode2.png';
import mode3 from '../../img/mode3.png';
import mode4 from '../../img/mode4.png';
import mode5 from '../../img/mode5.png';
import tickYellow from '../../img/tick-yellow.png';

function Main() {
    return (
        <section>
            <div className="container container-lk-statistick">
                <div className="section-lk-title">Статистика</div>
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
                        <span>50,000</span>
                        <p>Вещей Разыграно</p>
                    </div>
                    <div className="section-lk-top-block_standart-game">
                        <span>2,012,199</span>
                        <p>Максимальный Выигрыш</p>
                    </div>
                </div>
                <div className="section-lk-title-statistic">Играйте в режимы</div>
            </div>
            <div className="container container-p container-lk-statistick">
                <div className="section-lk-container-statistic-modes">
                    <div className="section-lk-container-statistic-modes-parent">
                        <Link to="/standart">

                            <div className="section-lk-container-statistic-modes-block">
                                <div className="section-lk-container-statistic-modes-block-image">
                                    <img
                                        src={mode1}
                                        alt=""
                                        className="section-lk-container-statistic-modes-block-img"
                                    />
                                </div>
                                <div className="section-lk-container-statistic-modes-block-text">
                                    <h3>
                                        Random.org
                                        <img src={tickYellow} alt="" />
                                    </h3>
                                    <p>Standart Game</p>
                                </div>
                                <div className="section-lk-container-statistic-modes-block-bottom">
                                    <div className="section-lk-container-statistic-modes-block-bottom-gray">
                                        <p>От</p>
                                        <p>До</p>
                                    </div>
                                    <div className="section-lk-container-statistic-modes-block-bottom-white">
                                        <p>1 рубля</p>
                                        <p>10,000 рублей</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="section-lk-container-statistic-modes-parent">
                        <div className="section-lk-container-statistic-modes-block">
                            <Link to="/low-game">

                                <div className="section-lk-container-statistic-modes-block-image">
                                    <img
                                        src={mode2}
                                        alt=""
                                        className="section-lk-container-statistic-modes-block-img"
                                    />
                                </div>
                                <div className="section-lk-container-statistic-modes-block-text">
                                    <h3>
                                        Random.org
                                        <img src={tickYellow} alt="" />
                                    </h3>
                                    <p>Low Game</p>
                                </div>
                                <div className="section-lk-container-statistic-modes-block-bottom">
                                    <div className="section-lk-container-statistic-modes-block-bottom-gray">
                                        <p>От</p>
                                        <p>До</p>
                                    </div>
                                    <div className="section-lk-container-statistic-modes-block-bottom-white">
                                        <p>1 рубля</p>
                                        <p>10,000 рублей</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="section-lk-container-statistic-modes-parent">
                        <div className="section-lk-container-statistic-modes-block">
                            <Link to="/big-game">

                                <div className="section-lk-container-statistic-modes-block-image">
                                    <img
                                        src={mode3}

                                        alt=""
                                        className="section-lk-container-statistic-modes-block-img"
                                    />
                                </div>
                                <div className="section-lk-container-statistic-modes-block-text">
                                    <h3>
                                        Random.org
                                        <img src={tickYellow} alt="" />
                                    </h3>
                                    <p>Big Game</p>
                                </div>
                                <div className="section-lk-container-statistic-modes-block-bottom">
                                    <div className="section-lk-container-statistic-modes-block-bottom-gray">
                                        <p>От</p>
                                        <p>До</p>
                                    </div>
                                    <div className="section-lk-container-statistic-modes-block-bottom-white">
                                        <p>1 рубля</p>
                                        <p>10,000 рублей</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="section-lk-container-statistic-modes-parent">
                        <div className="section-lk-container-statistic-modes-block">
                            <Link to="/fast-game">

                                <div className="section-lk-container-statistic-modes-block-image">
                                    <img
                                        src={mode4}
                                        alt=""
                                        className="section-lk-container-statistic-modes-block-img"
                                    />
                                </div>
                                <div className="section-lk-container-statistic-modes-block-text">
                                    <h3>
                                        Random.org
                                        <img src={tickYellow} alt="" />
                                    </h3>
                                    <p>Fast Game</p>
                                </div>
                                <div className="section-lk-container-statistic-modes-block-bottom">
                                    <div className="section-lk-container-statistic-modes-block-bottom-gray">
                                        <p>От</p>
                                        <p>До</p>
                                    </div>
                                    <div className="section-lk-container-statistic-modes-block-bottom-white">
                                        <p>1 рубля</p>
                                        <p>10,000 рублей</p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className="section-lk-container-statistic-modes-parent">
                        <div className="section-lk-container-statistic-modes-block">
                            <div className="section-lk-container-statistic-modes-block-image">
                                <img
                                    src={mode5}
                                    alt=""
                                    className="section-lk-container-statistic-modes-block-img"
                                />
                            </div>
                            <div className="section-lk-container-statistic-modes-block-text">
                                <h3>
                                    Random.org
                                    <img src={tickYellow} alt="" />
                                </h3>
                                <p>CoinFlip</p>
                            </div>
                            <div className="section-lk-container-statistic-modes-block-bottom">
                                <div className="section-lk-container-statistic-modes-block-bottom-gray">
                                    <p>От</p>
                                    <p>До</p>
                                </div>
                                <div className="section-lk-container-statistic-modes-block-bottom-white">
                                    <p>1 рубля</p>
                                    <p>10,000 рублей</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section-lk-statistick">
                <div className="container container-lk-statistick">
                    <div className="section-lk-statistick-top">
                        <h2>Лучшие игроки</h2>
                        <div className="section-lk-statistick-top-tabs">
                            <div className="section-lk-statistick-top-tabs-block">
                                1 ДЕНЬ
                                <img src="/img/chevron-down.svg" alt="" />
                            </div>
                            <div className="section-lk-statistick-top-tabs-block section-lk-statistick-top-tabs-block-active">
                                7 ДНЕЙ
                                <img src="/img/chevron-down.svg" alt="" />
                            </div>
                            <div className="section-lk-statistick-top-tabs-block">
                                30 ДНЕЙ
                                <img src="/img/chevron-down.svg" alt="" />
                            </div>
                        </div>
                        <div className="section-lk-statistick-top-block-right">
                            Low game
                            <img src="/img/chevron-down.svg" alt="" />
                        </div>
                    </div>
                    <div className="section-lk-statistick-container">
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-lk-statistick-container-parent">
                            <div className="section-lk-statistick-container-block">
                                <div className="section-lk-statistick-container-block-part">
                                    <div className="section-lk-statistick-container-block-img">
                                        <img src="/img/player1.png" alt="" />
                                    </div>
                                    <div className="section-lk-statistick-container-block-middle">
                                        <h3>Bored Ape Yacht Club</h3>
                                        <div className="section-lk-statistick-container-block-middle-bottom">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={13}
                                                viewBox="0 0 12 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.65065 2.6686C8.16063 2.6686 7.76342 3.06655 7.76342 3.55747V4.26868H10.6469V6.97975H7.71903V8.13532C7.71903 10.2708 5.9911 12.002 3.85951 12.002C1.72798 12.002 0 10.2708 0 8.13532C0 5.99986 1.72798 4.26868 3.85951 4.26868H5.10167V3.55747C5.10167 1.59385 6.69059 0.00195312 8.65065 0.00195312H12V2.6686H8.65065ZM5.10156 4.29088V6.97982H7.71893V4.29088H5.10156ZM2.66162 8.13544C2.66162 7.47268 3.19791 6.93546 3.85939 6.93546H5.05721V8.13544C5.05721 8.79819 4.52093 9.33542 3.85939 9.33542C3.19791 9.33542 2.66162 8.79819 2.66162 8.13544Z"
                                                    fill="#03DB80"
                                                />
                                            </svg>
                                            10,450.00
                                        </div>
                                    </div>
                                </div>
                                <div className="section-lk-statistick-container-block-right">
                                    <span>2.9k ETH</span>
                                    <p>+10.00%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Main;
