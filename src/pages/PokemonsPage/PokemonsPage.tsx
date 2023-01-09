import
  React, {
  useState,
  useEffect
} from 'react';

import { useInView } from 'react-intersection-observer';

import {
  GoUp,
  PokemonCard,
  Spinner
} from '@components';
import {
  useGetPokemons,
  useGetPokemonNamesToLs
} from '@hooks';


export const PokemonsPage: React.FC = () => {
  const [offset, setOffset] = useState<number>(45);
  const { ref, inView } = useInView();
  const { data, isError, isLoading } = useGetPokemons(offset);

  useGetPokemonNamesToLs();

  useEffect(() => {
    if (inView && offset < 905 && !isLoading && !isError) {
      setOffset((prevState) => prevState + 20);
    }
  }, [inView]);

  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    const array: undefined[] = Array.from({ length: 20 });
    return (
      <div className='pokemons__page'>
        <div className='pokemons__page__container'>
          {array.map((_el, index) => (
            <Spinner key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) throw new Error('some error with Pokemons Data');

  return (
    <div className='pokemons__page'>
      {scroll > 300 ? <GoUp /> : ''}
      <div className='pokemons__page__container'>
        {data.results.map((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemonProps={pokemon} />;
        })}
      </div>
      <div ref={ref} style={{ margin: '30px 0', textAlign: 'center' }} role='link' tabIndex={0}>
        {offset === 905 ? 'Pokemon are over' : 'Loading Pokemon...'}
      </div>
    </div>
  );
};
