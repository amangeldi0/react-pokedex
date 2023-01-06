import React from 'react';
import { COLORS } from '@constants';
import { Pokemon, PokemonSpecies, IPokemonInfo } from '@types';
import { getImgPathLink, getNormalHeightWeight } from '@helpers';

export const PokemonInfo: React.FC<IPokemonInfo> = ({ pokemon, species, setLink, setModal }) => {
  const { id, height: h, weight: w, abilities, types }: Pokemon = pokemon;
  const { varieties, color }: PokemonSpecies = species;

  const { feet, lbs, height, weight } = getNormalHeightWeight(h, w);

  const onModalHandler = (link: string) => {
    setLink(link);
    setModal(true);
  };

  const bg = {
    background: COLORS[`${color.name}`]
  };

  return (
    <div className='rotate__inf'>
      <div className='info'>
        <div className='info__id inf'>
          <div className='label'>ID</div>{' '}
          <div className='content'>
            #
            {id.toString().length === 1
              ? `00${id}`
              : id.toString().length === 2
              ? `0${id}`
              : `${id}`}
          </div>
        </div>
        <div className='info__height inf'>
          <div className='label'>Height</div>
          <div className='content'>
            {height}m ( {feet} )
          </div>
        </div>
        <div className='info__weight inf'>
          <div className='label'>Weight</div>
          <div className='content'>
            {weight}kg ( {lbs}lbs. )
          </div>
        </div>
        <div className='info__abilities inf'>
          <div className='label'>Abilities</div>
          <div className='content content__ability'>
            {abilities.map((ability) => (
              <div
                key={ability.ability.name}
                onClick={() => onModalHandler(ability.ability.url)}
                className='ability'
                style={bg}
              >
                {ability.ability.name}
              </div>
            ))}
          </div>
        </div>
        <div className='info__types inf'>
          <div className='label'>Type</div>
          <div className='content content__type'>
            {' '}
            {types.map((type) => (
              <div key={type.type.name} className={`type ${type.type.name}`}>
                {type.type.name}
                <img className='type__image' src={getImgPathLink(type.type.name)} alt='typeImage' />
              </div>
            ))}
          </div>
        </div>
        <div className='info__forms inf'>
          <div className='label'>Forms</div>
          <div className='content content__form'>
            {varieties.map((variety) => (
              <div className='form' key={variety.pokemon.name} style={bg}>
                {variety.pokemon.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
