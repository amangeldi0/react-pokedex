import React from 'react';
import loader from '../../assets/pokemon_page_spinner.gif';

export const PokemonPageSpinner: React.FC = () => {
    return (
        <div className='pokemon__page__spinner'>
            <img src={loader} alt="spinner loader"/>
        </div>
    );
};