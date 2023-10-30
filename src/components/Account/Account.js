import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Level from './Level/Level';
import Referrals from './Referrals/Referrals';
import Subscription from './Subscription/Subscription';
import Wallet from './Wallet/Wallet';
import Personal_data from './Personal_data/Personal_data'
import axios from 'axios';

function Account({ balance, setBalance }) {
    const [activeMenu, setActiveMenu] = useState('Личные данные');
    const [amount, setAmount] = useState(0);

const handleRefill = () => {
    axios.post(`http://31.129.111.149:5000/updateBalance`, { amount }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
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

const fetchUserBalance = () => {
    axios.get(`http://31.129.111.149:5000/getBalance`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        withCredentials: true
    })
        .then(response => {
            const currentBalance = response.data.balance;
            setBalance(currentBalance);
        })
        .catch(error => {
            console.error("Error fetching user balance:", error);
        });
};

useEffect(() => {
    fetchUserBalance();
}, []);

    
    const renderContent = () => {
        switch (activeMenu) {
            case 'Личные данные':
                return <Personal_data />
            case 'Уровень':
                return <Level />;
            case 'Рефералы':
                return <Referrals />;
            case 'Кошелёк':
                return <Wallet balance={balance} setBalance={setBalance} />;
            case 'Подписка':
                return <Subscription />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="section-lk-title">Аккаунт</div>
            <div className="btn-menu-account">Меню аккаунта</div>
            <div className="section-lk-container">
                <div className="section-lk-container-left-menu">
                    <div
                        className={`section-lk-container-left-menu-block ${activeMenu === 'Личные данные' ? 'section-lk-container-left-menu-block-active' : ''}`}
                        onClick={() => setActiveMenu('Личные данные')}
                    >
                        Личные данные
                    </div>
                    <div
                        className={`section-lk-container-left-menu-block ${activeMenu === 'Уровень' ? 'section-lk-container-left-menu-block-active' : ''}`}
                        onClick={() => setActiveMenu('Уровень')}
                    >
                        Уровень
                    </div>
                    <div
                        className={`section-lk-container-left-menu-block ${activeMenu === 'Рефералы' ? 'section-lk-container-left-menu-block-active' : ''}`}
                        onClick={() => setActiveMenu('Рефералы')}
                    >
                        Рефералы
                    </div>
                    <div
                        className={`section-lk-container-left-menu-block ${activeMenu === 'Кошелёк' ? 'section-lk-container-left-menu-block-active' : ''}`}
                        onClick={() => setActiveMenu('Кошелёк')}
                    >
                        Кошелёк
                    </div>
                    <div
                        className={`section-lk-container-left-menu-block ${activeMenu === 'Подписка' ? 'section-lk-container-left-menu-block-active' : ''}`}
                        onClick={() => setActiveMenu('Подписка')}
                    >
                        Подписка
                    </div>
                </div>
                <div className="section-lk-container-right">
                    

                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Account;
