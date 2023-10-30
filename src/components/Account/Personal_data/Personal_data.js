import React, { useState, useEffect } from 'react';
import logo from '../../../img/logo.svg';
import balansPlus from '../../../img/balans-plus.svg';
import headerAvatar from '../../../img/header-avatar.png';
import avatar from '../../../img/avatar.png';
import copyImg from '../../../img/copy.svg';
import tickImg from '../../../img/tick.svg';
import closeBurger from '../../../img/close-burger.svg';
import axios from 'axios';


function Personal_data() {
    const [userData, setUserData] = useState({
        _id: null,
        name: '',
        bio: '',
        registrationDate: '',
        email: '',
        steamAccount: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [userImage, setUserImage] = useState(headerAvatar);
    const [editingBio, setEditingBio] = useState(false);
    const [tempBio, setTempBio] = useState('');


    useEffect(() => {
        axios.get('http://31.129.111.149:5000/getUserData', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`

            },
            withCredentials: true
        })
            .then(response => {
                const data = response.data;
                if (data && data._id) {
                    setUserData(data);
                } else {
                }
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных пользователя:', error);
            });
    }, []);




    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }

    const saveBio = () => {
        const token = localStorage.getItem('authToken');
        axios.post(`http://31.129.111.149:5000/updateBio`, {
            bio: tempBio
        }, {
            headers: {
                Authorization: `Bearer ${token}`

            }
        })
            .then(response => {
                if (response.status === 200) {
                    setUserData(prev => ({ ...prev, bio: tempBio }));
                    setEditingBio(false);
                } else {
                    console.error("Ошибка при обновлении био:", response);
                }
            })
            .catch(error => {
                console.error("Ошибка при обновлении био:", error);
            });
    }



    return (
        <>
            <div className="section-lk-container-right-container-first">
                <div className="section-lk-container-right-content">
                    <div className="section-lk-container-right-content-top">
                        <h3>Основная информация</h3>
                        <p onClick={() => setEditingBio(true)}>Редактировать</p>
                    </div>
                    <div className="section-lk-container-right-content-block">
                        <p>ID</p>
                        <span>
                            {userData._id ? userData._id : 'Загрузка...'}
                            <img src={copyImg} alt="" />
                        </span>
                    </div>
                    <div className="section-lk-container-right-content-block">
                        <p>Никнейм</p>
                        <span className="section-lk-container-right-content-block-big-size">
                            {userData.name}
                        </span>
                    </div>
                    <div className="section-lk-container-right-content-block">
                        <p>Био</p>
                        {editingBio ? (
                            <>
                                <input
                                    value={tempBio}
                                    onChange={e => setTempBio(e.target.value)}
                                />
                                <button onClick={saveBio}>Сохранить</button>
                            </>
                        ) : (
                            <span className="section-lk-container-right-content-block-small-size">
                                {userData.bio}
                            </span>
                        )}
                    </div>
                    <div className="section-lk-container-right-content-block">
                        <p>Дата регистрации</p>
                        <span>{new Date(userData.registrationDate).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="section-lk-container-right-container-first-right">
                    <img src={userImage} alt="User" className="user-image" />
                    <p onClick={handleEditPicture}>Изменить</p>
                    <input
                        type="file"
                        id="imageInput"
                        hidden
                        onChange={handleImageChange}
                    />
                </div>
            </div>
            <div className="section-lk-container-right-content section-lk-container-right-content2">
                <div className="section-lk-container-right-content-top section-lk-container-right-content-top2">
                    <h3>Адрес электронной почты</h3>
                    <p>Редактировать</p>
                </div>
                <div className="section-lk-container-right-content-block">
                    <p>Электронная почта</p>
                    <span>
                        {userData.email}
                        <img src={tickImg} alt="" />
                    </span>
                </div>
            </div>
            <div className="section-lk-container-right-content">
                <div className="section-lk-container-right-content-top section-lk-container-right-content-top2">
                    <h3>Аккаунт Steam</h3>
                    <p>Изменить</p>
                </div>
                <div className="section-lk-container-right-content-block">
                    <p>Электронная почта</p>
                    <span>
                        {userData.email}
                        <img src={tickImg} alt="" />
                    </span>
                </div>
                <div className="section-lk-container-right-content-block">
                    <p>Аккаунт</p>
                    <span>{userData.steamAccount}</span>
                </div>
            </div>
        </>
    );
}

export default Personal_data;
