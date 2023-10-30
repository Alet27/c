import React, { useEffect, useState, useContext } from 'react';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Modal from './modal/modal';

import mainIcon1Image from '../../img/main-icon1.png';
import mainIcon2Image from '../../img/main-icon2.svg';
import mainIcon3Image from '../../img/main-icon3.png';
import mainIcon4Image from '../../img/main-icon4.png';
import mainImgImage from '../../img/main-img.png';

const slidesData = [
    {
        title: "Начни выигрывать со скинов из",
        highlight: "Dota2",
        description: "Это рулетка с минимальной ставкой от 1-рубля и несколькими режимами игры на вещи Steam."
    },
    {
        title: "Присоединяйся к победителям",
        highlight: "Dota2",
        description: "Сделай ставку и стань одним из победителей на нашей платформе!"
    },
    {
        title: "Получай удовольствие от игры",
        highlight: "Dota2",
        description: "Играй, выигрывай и наслаждайся своими новыми скинами!"
    },
    {
        title: "Будь в тренде с лучшими скинами",
        highlight: "Dota2",
        description: "Не упусти свой шанс обновить свою коллекцию скинов!"
    }
];

function Index() {
    const [showModal, setShowModal] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <></>,
        nextArrow: <div className="swiper-button-next-main"></div>, 
    };


    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <section className="section-main">
                <div className="section-main-ellipse" />
                <img src={mainIcon1Image} alt="" className="main-icon1" />
                <img src={mainIcon2Image} alt="" className="main-icon2" />
                <img src={mainIcon3Image} alt="" className="main-icon3" />
                <img src={mainIcon4Image} alt="" className="main-icon4" />

                <div className="container">
                    <div className="section-main-container">
                        <div className="section-main-container-left">
                            <div className="section-main-container-left-slider">
                                <div className="swiper mySwiperMain">
                                    <div className="swiper-wrapper">
                                        <Slider {...settings}>
                                            {slidesData.map((slide, index) => (
                                                <div className="swiper-slide" key={index}>
                                                    <div className="mySwiperMain-block">
                                                        <h2>
                                                            {slide.title} <br /> <span>{slide.highlight}</span>
                                                        </h2>
                                                        <p>{slide.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="section-main-container-left-buttons">
                                <button className="section-main-btn-log-in" onClick={handleShowModal}>Войти</button>
                                <button className="section-main-btn-register" onClick={handleShowModal}>Регистрация</button>
                            </div>
                        </div>
                        <div className="section-main-container-right">
                            <img src={mainImgImage} alt="" />
                        </div>
                    </div>
                </div>
                {showModal && <Modal onClose={handleCloseModal} />}
            </section>
        </div>
    );
}

export default Index;