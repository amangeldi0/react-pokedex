import React, { useState, useEffect } from 'react';
import { getEvolutionChain } from '@helpers';
import { ChainObj } from '@types';
import { EvoCard } from '@components';

export const PokemonEvoChain: React.FC<{ url: string; curName: string; color: string }> = ({
  url,
  curName,
  color
}) => {
  const [chain, setChain] = useState<ChainObj[]>();

  useEffect(() => {
    void getEvolutionChain(url).then((data) => setChain(data));
  }, []);

  return (
    <div className='evolutionChain'>
      {chain?.map((ch) => {
        return <EvoCard name={ch.name} key={ch.name} curName={curName} color={color} />;
      })}
    </div>
  );
};
