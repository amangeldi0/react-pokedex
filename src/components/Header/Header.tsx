import React, { useEffect, useState } from 'react';
import accountIcon from '../../assets/icon/account_icon.svg';

import { AutoCompleteSearch } from '../AutoCompleteSearch/AutoCompleteSearch';

export const Header: React.FC = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [focus, setFocus] = useState(true);
  const [search, setSearch] = useState<string>('');

  const getItemsFromLS = (): void => {
    const suggest: string | null = localStorage.getItem('names');
    setSuggestions(suggest !== null ? JSON.parse(suggest) : ['Problems with fetching']);
  };

  useEffect(() => {
    getItemsFromLS();
  }, []);

  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__logo'>PokéDex</h1>
        <div className='header__icons'>
          <AutoCompleteSearch
            focus={focus}
            suggestions={suggestions}
            search={search}
            setSearch={setSearch}
          />
          <img
            className='account__icon'
            src={accountIcon}
            role='button'
            tabIndex={2}
            alt='account__icon'
            onFocus={() => {
              setSearch('');
              setFocus(false);
            }}
            onBlur={() => setFocus(true)}
          />
        </div>
      </div>
    </header>
  );
};
