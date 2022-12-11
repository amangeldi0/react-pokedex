import React from "react";

import accountIcon from '../../assets/icon/account_icon.svg';
export const Header: React.FC = () => {
    return(
        <header className='header'>
            <div className="header__container">
                <h1 className="header__logo">PokéDex</h1>
                <div className="header__icons">
                    <input type="text" className="header__search" placeholder='Search...'/>
                    <img className="account__icon" src={accountIcon} alt='account__icon'/>
                </div>
            </div>
        </header>
    );
};