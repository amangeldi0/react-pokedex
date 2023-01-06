import React from 'react';
import { IPokemonInfoStats, Pokemon, PokemonSpecies } from '@types';
import { getStatPercent, getStatsFromArray } from '@helpers';
import { COLORS } from '@constants';
export const PokemonStats: React.FC<IPokemonInfoStats> = ({ pokemon, species }) => {
  const { stats }: Pokemon = pokemon;
  const { color }: PokemonSpecies = species;
  const { hp, attack, defence, spDefence, spAttack, speed } = getStatsFromArray(stats);

  const {
    hpPercent,
    defencePercent,
    spDefencePercent,
    spAttackPercent,
    attackPercent,
    speedPercent
  } = getStatPercent(getStatsFromArray(stats));

  return (
    <div className='rotate__stats'>
      <div className='stats'>
        <div className='stat'>
          <div className='title hp'>hp</div>
          <div className='value hp_value'>
            <div
              className='progress_bar'
              style={{ backgroundColor: COLORS[`${color.name}`], width: `${hpPercent}%` }}
            >
              <div className='statValue'>{hp}</div>
            </div>
          </div>
        </div>
        <div className='stat'>
          <div className='title attack'>attack</div>
          <div className='value attack_value'>
            <div
              className='progress_bar'
              style={{ backgroundColor: COLORS[`${color.name}`], width: `${attackPercent + 5}%` }}
            >
              <div className='statValue'>{attack}</div>
            </div>
          </div>
        </div>
        <div className='stat'>
          <div className='title defence'>defence</div>
          <div className='value defence_value'>
            <div
              className='progress_bar'
              style={{ backgroundColor: COLORS[`${color.name}`], width: `${defencePercent + 5}%` }}
            >
              <div className='statValue'>{defence}</div>
            </div>
          </div>
        </div>
        <div className='stat'>
          <div className='title sp_attack'>sp. attack</div>
          <div className='value sp_attack_value'>
            <div
              className='progress_bar'
              style={{ backgroundColor: COLORS[`${color.name}`], width: `${spAttackPercent + 5}%` }}
            >
              <div className='statValue'>{spAttack}</div>
            </div>
          </div>
        </div>
        <div className='stat'>
          <div className='title sp_defence'>sp. defence</div>
          <div className='value sp_defence_value'>
            <div
              className='progress_bar'
              style={{
                backgroundColor: COLORS[`${color.name}`],
                width: `${spDefencePercent + 5}%`
              }}
            >
              <div className='statValue'>{spDefence}</div>
            </div>
          </div>
        </div>
        <div className='stat'>
          <div className='title speed'>speed</div>
          <div className='value speed_value'>
            <div
              className='progress_bar'
              style={{ backgroundColor: COLORS[`${color.name}`], width: `${speedPercent + 5}%` }}
            >
              <div className='statValue'>{speed}</div>
            </div>
          </div>
        </div>
        <div className='stat total'>
          <div className='title total__title'>total</div>
          <div className='total_value'>{hp + attack + defence + spAttack + spDefence + speed}</div>
        </div>
      </div>
    </div>
  );
};
