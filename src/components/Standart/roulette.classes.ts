import { Ref } from "react";

export interface weaponAttributes {
    // weapon_name: string,
    // skin_name: string
    // rarity: string
    user: userAttributes,
    userImage: string
}

export interface userAttributes {
    userImage: string,
    winChance: number
}

// КЛАСС ОРУЖИЯ
export class Weapon {
    id: number
    // weapon_name: string
    // skin_name: string
    // rarity: string
    user: userAttributes

    constructor(id: number, attrs: weaponAttributes) {
        this.id = id;
        // this.weapon_name = attrs.weapon_name;
        // this.skin_name = attrs.skin_name;
        // this.rarity = attrs.rarity;
        this.user = attrs.user;
    }
}


export interface rouletteAttributes {
    winner: weaponAttributes
    weapons: weaponAttributes[]

    rouletteContainerRef: Ref<HTMLElement>
    weaponsRef: Ref<HTMLElement>

    weaponsCount?: number
    transitionDuration?: number
    itemWidth?: number
}

// КЛАСС РУЛЕТКИ
export class Roulette {

    winner: weaponAttributes
    allWeapons: weaponAttributes[]

    rouletteWrapper: Ref<HTMLElement>
    weaponWrapper: Ref<HTMLElement>

    weapons: Weapon[]

    weaponsCount: number
    weaponPrizeId: number

    transitionDuration: number

    itemWidth: number

    constructor(attrs: rouletteAttributes) {
        // атрибуты для генерации массива weapons
        this.winner = attrs.winner;
        this.allWeapons = attrs.weapons;

        // тут будет всё оружие (оружие-приз + оружие-актёры)
        this.weapons = [];

        // родительский DOM-элемент для рулетки
        this.rouletteWrapper = attrs.rouletteContainerRef;
        // родительский DOM-элемент для DOM-элементов оружия (он вращается)
        this.weaponWrapper = attrs.weaponsRef;

        // общее количество оружия
        this.weaponsCount = attrs.weaponsCount || 50;

        // id приза
        this.weaponPrizeId = this.randomRange(this.weaponsCount / 2, this.weaponsCount - 5)

        this.transitionDuration = attrs.transitionDuration || 10

        this.itemWidth = attrs.itemWidth || 200
    }

    private randomRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private shuffle = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    fillWithUserAvatar = () => {
        const user = this.allWeapons[0];
        for (let i = 0; i < 150; i++) {
            this.weapons.push(new Weapon(i, user));
        }
    };
    
    

    set_weapons = () => {
        // Если только одно оружие (один пользователь), заполним весь список его аватарками
        if (this.allWeapons.length === 1) {
            for (let i = 0; i < this.weaponsCount; i++) {
                this.weapons.push(new Weapon(i, this.allWeapons[0]));
            }
            return;
        }
    
        // Если есть несколько игроков, распределить аватарки на основе шанса победы
        this.allWeapons.sort((a, b) => {
            if (a.user && b.user && typeof a.user.winChance === 'number' && typeof b.user.winChance === 'number') {
                return b.user.winChance - a.user.winChance;
            }
            return 0;
        });
    
        this.weapons = []; // Reset the weapons array
    
        // Populate the weapons array based on win chance
        this.allWeapons.forEach(weapon => {
            if (weapon.user && typeof weapon.user.winChance === 'number') {
                let slots = Math.round((weapon.user.winChance / 100) * this.weaponsCount);
                for (let i = 0; i < slots; i++) {
                    this.weapons.push(new Weapon(this.weapons.length, weapon));
                }
            }
        });
    
        // Shuffle the weapons for randomness
        this.shuffle(this.weapons);
    };
    
    
    
    

    /** ВРАЩЕНИЕ РУЛЕТКИ
     -----------------------------------------------------------------------------*/
    spin = () => {
        let el_weapon_width_1_2 = Math.floor(this.itemWidth / 2)
        let el_weapon_width_1_20 = Math.floor(this.itemWidth / 20)

        // рандомная координата остановки
        const randStop = (this.weaponPrizeId - 4) * this.itemWidth +
            el_weapon_width_1_2 +
            this.randomRange(el_weapon_width_1_20, (18 * el_weapon_width_1_20))

        // анимация теперь через 'transition', а не через 'animation'
        // 'ease-out' -- это плавное замедление рулетки
        // @ts-ignore
        this.weaponWrapper.current.style.transition = `left ${this.transitionDuration}s ease-out`;

        // немного отложенный старт
        // (ибо нельзя сразу установить css-свойство 'left')
        setTimeout(() => {
            // @ts-ignore
            this.weaponWrapper!.current.style.left = `-${randStop}px`;
        }, 100);

        return this.weaponPrizeId
    }
}
