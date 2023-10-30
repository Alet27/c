import React, { useRef, useState, useEffect } from 'react';
import cl from "./roulette.module.css"
import RouletteItem from "./RouletteItem/RouletteItem.tsx";
import { Roulette, weaponAttributes } from "./roulette.classes.ts";

interface RouletteElementParams {
    weapons: weaponAttributes[],
    weaponsCount: number,
    transitionDuration: number,
    isRolling: boolean
}


const McRoulette = ({
    weapons,
    weaponsCount,
    transitionDuration,
    isRolling
}: RouletteElementParams) => {
    const [rouletteWeapons, setRouletteWeapons] = useState<weaponAttributes[]>(weapons);
    const [weaponPrizeId, setWeaponPrizeId] = useState<number>(-1)
    const [isReplay, setIsReplay] = useState<boolean>(false)
    const [isSpin, setIsSpin] = useState<boolean>(false)
    const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false)
    const [winHistory, setWinHistory] = useState<weaponAttributes[]>([])
    console.log('wwp', weapons)

    const rouletteContainerRef = useRef<HTMLDivElement>(null)
    const weaponsRef = useRef<HTMLDivElement>(null)

    function transitionEndHandler() {
        setWinHistory(winHistory.concat(rouletteWeapons[weaponPrizeId]))
        setIsSpin(false)
        setIsSpinEnd(true)
    }

    function prepare() {
        weaponsRef.current!.style.transition = "none"
        weaponsRef.current!.style.left = "0px"
    }

    function load() {
        let winner = weapons[Math.floor(Math.random() * weapons.length)];
    
        const roulette = new Roulette({
            winner,
            weapons: weapons,
            rouletteContainerRef,
            weaponsRef,
            weaponsCount: weaponsCount,
            transitionDuration: transitionDuration
        });
    
        if (weapons.length === 1) {
            roulette.fillWithUserAvatar();
        } else {
            roulette.set_weapons();
        }
        setRouletteWeapons(roulette.allWeapons);
    
        return roulette;
    }
    

    function play() {
        if (weapons.length === 0) {
            console.error("Weapons list is empty. Can't start the game.");
            return;
        }

        if (isReplay) {
            prepare();
        }
        setIsSpin(true);

        const roulette = load();

        setTimeout(() => {
            setIsSpin(true);
            setWeaponPrizeId(roulette.spin());
            setIsReplay(true);
        }, 1000);
    }

    useEffect(() => {
        setRouletteWeapons(weapons);  // Обновляем аватарки в рулетке при изменении weapons
    }, [weapons]);
    useEffect(() => {
        if (isRolling) {
            play();
        }
    }, [isRolling]);
    
    return (
        <div>
            <div className={cl.rouletteWrapper}>
                <div ref={rouletteContainerRef}>
                    <div className={cl.evRoulette}>
                        <div className={cl.evTarget}></div>
                        <div ref={weaponsRef} className={cl.evWeapons} onTransitionEnd={transitionEndHandler}>
                            {rouletteWeapons.map((w, i) => {
                                if (!w) return null;  // Если элемент не существует, просто возвращаем null
                                return <RouletteItem
                                    key={i}
                                    id={i}
                                    isLoser={(i !== weaponPrizeId) && !isSpin && isSpinEnd}
                                    userImage={w.userImage}
                                />
                            })}
                        </div>
                    </div>
                </div>
                {/* <button className="start-roulette-btn section-lk-container-left-participate_standart-game" disabled={isSpin} onClick={play}>Roll</button> */}
            </div>
        </div>
    );
};

export default McRoulette;