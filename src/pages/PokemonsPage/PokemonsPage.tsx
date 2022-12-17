import React, { useState, useEffect } from "react";

import { useInView } from 'react-intersection-observer';

import { PokemonCard } from '@components';
import {usePokemonsQueries} from "@hooks";
import {IResponsePokemons} from "@types";





export const PokemonsPage: React.FC = () => {

    const [offset, setOffset] = useState<number>(45);
    const { ref, inView } = useInView();
    const data: IResponsePokemons[] | 'loading' = usePokemonsQueries(offset);


    useEffect(() => {
        if (inView && offset < 905) {
            setOffset(prevState => prevState + 20);
        }
    }, [inView]);

    useEffect(() => {
        // useTakePokemonName();
    }, []);


    if (data === 'loading') return null;



    return(
        <div className="pokemons__page">
            <div className="pokemons__page__container">
                {
                    data.map((pokemon: any) => {
                        return <PokemonCard
                            key={pokemon.name}
                            pokemonUrl={pokemon.url}
                            pokemonName={pokemon.name}
                        />;
                    })
                }
            </div>
            <button ref={ref}>More</button>
        </div>
    );
};