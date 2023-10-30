import React from 'react';
import cl from "./RouletteItem.module.css"

interface rouletteItemProps {
    id: number,
    // weapon_name: string,
    // skin_name: string,
    // rarity: string
    userImage: string,
    isLoser: boolean
}

const RouletteItem = ({
    id,
    // weapon_name,
    // skin_name,
    // rarity,
    userImage,
    isLoser
}: rouletteItemProps) => {
    return (
        <div className={cl.evWeapon} style={isLoser ? { opacity: "0.5" } : { opacity: "1" }}>
            <div className={`${cl.evWeaponInner}`} id={String(id)}>
                {/* <div className={`${cl.evWeaponRarity} ${cl[rarity]}`}></div> */}
                <img src={userImage} alt="User Avatar" className={cl.userAvatar} />
                <div className={cl.evWeaponText}>
                    {/* <p>{weapon_name}</p> */}
                    {/* <p>{skin_name}</p> */}
                </div>
            </div>
        </div>
    );
};

export default RouletteItem;