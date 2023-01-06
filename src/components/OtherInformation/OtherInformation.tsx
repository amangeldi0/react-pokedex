import React from 'react';
import { IPokemonInfoStats, heldItems, Color, Pokemon, PokemonSpecies } from '@types';
import { COLORS } from '@constants';

export const OtherInformation: React.FC<IPokemonInfoStats> = ({ pokemon, species }) => {
  const {
    base_experience: baseExperience,
    held_items: heldItems,
    moves,
    game_indices: gameIndices
  }: Pokemon = pokemon;
  const {
    base_happiness: baseHappiness,
    capture_rate: captureRate,
    egg_groups: eggGroups,
    growth_rate: growthRate,
    has_gender_differences: hasGenderDifferences,
    varieties,
    is_baby: isBaby,
    is_legendary: isLegendary,
    is_mythical: isMythical,
    shape,
    color
  }: PokemonSpecies = species;

  const style = {
    color: COLORS[`${color.name}`]
  };

  return (
    <div className='other__information'>
      <div className='training oth_inf'>
        <div className='train__inf all__inf'>
          <div className='title'>Catch Rate:</div>
          <div className='inf' style={style}>
            {captureRate}
          </div>
        </div>
        <div className='train__inf all__inf'>
          <div className='title'>Base Friendship:</div>
          <div className='inf' style={style}>
            {baseHappiness}
          </div>
        </div>
        <div className='train__inf all__inf'>
          <div className='title'>Base Exp.</div>
          <div className='inf' style={style}>
            {baseExperience}
          </div>
        </div>
        <div className='train__inf all__inf'>
          <div className='title'>Growth Rate</div>
          <div className='inf' style={style}>
            {growthRate.name}
          </div>
        </div>
        <div className='train__inf all__inf'>
          <div className='title'>Held Items</div>
          <div className='inf' style={style}>
            {heldItems.length !== 0
              ? heldItems.map((held: heldItems) => <div key={held.item.name}>{held.item.name}</div>)
              : 'none'}
          </div>
        </div>
      </div>
      <div className='breeding oth_inf'>
        <div className='bree__inf all__inf'>
          <div className='title'>Egg Groups</div>
          <div className='inf' style={style}>
            {eggGroups.length !== 0
              ? eggGroups.map((egg: Color) => <div key={egg.name}>{egg.name}</div>)
              : 'None'}
          </div>
        </div>
        <div className='bree__inf all__inf'>
          <div className='title'>Gender Difference</div>
          <div className='inf' style={style}>
            {hasGenderDifferences ? 'Yes' : 'No'}
          </div>
        </div>
        <div className='bree__inf all__inf'>
          <div className='title'>Alternative Form</div>
          <div className='inf' style={style}>
            {varieties.length <= 1 ? 'No' : 'Yes'}
          </div>
        </div>
        <div className='bree__inf all__inf'>
          <div className='title'>Baby</div>
          <div className='inf' style={style}>
            {isBaby ? 'Yes' : 'No'}
          </div>
        </div>
        <div className='bree__inf all__inf'>
          <div className='title'>Legendary</div>
          <div className='inf' style={style}>
            {isLegendary ? 'Yes' : 'No'}
          </div>
        </div>
        <div className='bree__inf all__inf'>
          <div className='title'>Mythical</div>
          <div className='inf' style={style}>
            {isMythical ? 'Yes' : 'No'}
          </div>
        </div>
      </div>
      <div className='additional__information oth_inf'>
        <div className='add__inf all__inf'>
          <div className='title'>Movies Count</div>
          <div className='inf' style={style}>
            {moves.length}
          </div>
        </div>
        <div className='add__inf all__inf'>
          <div className='title'>Game Includes Count</div>
          <div className='inf' style={style}>
            {gameIndices.length}
          </div>
        </div>
        <div className='add__inf all__inf'>
          <div className='title'>Shape</div>
          <div className='inf' style={style}>
            {shape.name}
          </div>
        </div>
        <div className='add__inf all__inf'>
          <div className='title'>Color</div>
          <div className='inf' style={style}>
            {COLORS[`${color.name}`]}
          </div>
        </div>
      </div>
    </div>
  );
};
