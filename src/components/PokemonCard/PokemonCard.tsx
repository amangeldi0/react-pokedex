import React, { KeyboardEvent, useState } from 'react';
import { useGetPokemonByUrl } from '@hooks';
import { useNavigate } from 'react-router';
import { PokemonTypes } from '@components';

import { Result } from '@types';
import loader from '../../assets/loader.gif';

export const PokemonCard: React.FC<{ pokemonProps: Result }> = ({ pokemonProps }) => {
  const [load, setLoad] = useState<boolean>(true);

  const { url, name } = pokemonProps;

  const { data, isLoading, isError } = useGetPokemonByUrl({ url, name });

  const navigate = useNavigate();

  if (isError) throw new Error('some problems with fetching to Pokemons');

  if (isLoading)
    return (
      <div className='pokemon__card__skeleton'>
        <div className='number__skeleton'></div>
        <div className='types__skeleton'>
          <div className='types__circle'></div>
          <div className='types__circle'></div>
        </div>
        <div className='image_skeleton'></div>
        <div className='name_skeleton'></div>
      </div>
    );

  const { name: PokemonName, id, sprites, types } = data;
  const imgLink = sprites.other?.['official-artwork'].front_default;

  const onDivKeyPressCapture = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      navigate(`/pokemon/${PokemonName}`);
    }
  };

  return (
    <div
      className='pokemon__card'
      onClick={() => navigate(`/pokemon/${PokemonName}`)}
      role='button'
      tabIndex={3}
      onKeyPress={onDivKeyPressCapture}
    >
      <div className='pokemon__image'>
        {load ? (
          <div className='loader'>
            <img src={loader} alt='' /> <div className='info'>image loading...</div>
          </div>
        ) : (
          <div>
            <img
              src={imgLink}
              alt='pokemon__image'
              className='image'
              onLoad={() => setLoad(false)}
            />
          </div>
        )}
        <img
          src={imgLink}
          alt='pokemon__image'
          className='image'
          onLoad={() => setLoad(false)}
          style={{ display: 'none' }}
        />
      </div>
      <div className='pokemon__number'>
        #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
      </div>
      <div className='pokemon__name'>{PokemonName}</div>
      <PokemonTypes types={types} />
    </div>
  );
};
