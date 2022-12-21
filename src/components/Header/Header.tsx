import React, {useEffect, useState} from "react";
import accountIcon from '../../assets/icon/account_icon.svg';

import {AutoCompleteSearch} from "../AutoCompleteSearch/AutoCompleteSearch";


export const Header: React.FC = () => {

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const getItemsFromLS = (): void => {
        const suggest: string | null = localStorage.getItem('names');
        setSuggestions(suggest !== null ? JSON.parse(suggest) : ['Problems with fetching']);
    };

    useEffect(() => {
        getItemsFromLS();
    }, []);

    return(
        <header className='header'>

            <div className="header__container">
                <h1 className="header__logo">PokéDex</h1>
                <div className="header__icons">
                    <AutoCompleteSearch suggestions={suggestions}/>
                    <img className="account__icon" src={accountIcon} alt='account__icon'/>
                </div>
            </div>
        </header>
    );
};