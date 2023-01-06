import React from 'react';
import arrow from '../../assets/icon/arrow.svg';

export const GoUp = () => {
  const handleUpButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='go__up' onClick={handleUpButton}>
      <img src={arrow} alt='arrow' />
    </div>
  );
};
