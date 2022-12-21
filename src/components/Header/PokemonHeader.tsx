import React from 'react';

export const PokemonHeader: React.FC<{color: string}> = ({color}) => {
    return (
        <header className='header' style={{background: `${color}`}}></header>
    );
};

