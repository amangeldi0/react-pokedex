import React from 'react';
import { COLORS } from '@constants';
import backArrow from '../../assets/icon/back_arrow.svg';
import { useNavigate } from 'react-router';

export const PokemonHeader: React.FC<{ color: string }> = ({ color }) => {
  const navigate = useNavigate();
  return (
    <header className='header' style={{ background: COLORS[`${color}`] }}>
      <img
        src={backArrow}
        className='back_img'
        onClick={() => navigate('/')}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            navigate('/');
          }
        }}
        alt='backArrow'
        tabIndex={0}
        role='button'
      />
    </header>
  );
};
