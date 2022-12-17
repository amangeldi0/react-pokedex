import React, { useState, useEffect } from "react";

import { useInView } from 'react-intersection-observer';

import {GoUp, PokemonCard, Spinner} from '@components';
import { usePokemonsQueries, useTakePokemonName } from "@hooks";
import { IResponsePokemonsLink } from "@types";





export const PokemonsPage: React.FC = () => {

    const [offset, setOffset] = useState<number>(45);
    const { ref, inView } = useInView();
    const {data, isError, isLoading}: {data: IResponsePokemonsLink, isError: boolean, isLoading: boolean} = usePokemonsQueries(offset);

    useTakePokemonName();

    useEffect(() => {
        if (inView && offset < 905 && !isLoading && !isError) {
            setOffset(prevState => prevState + 20);
        }

    }, [inView]);


    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    if (isLoading){
        const array: undefined[] = Array.from({length: 20});
        return (
            <div className="pokemons__page">
                <div className="pokemons__page__container">
                    {array.map((_el, index) => <Spinner key={index}/>)}
                </div>
            </div>

        );
    };

    if (isError) throw new Error('some error with Pokemons Data');

    return(
        <div className="pokemons__page">
            {
                scroll > 300 ? <GoUp /> : ''
            }
            <div className="pokemons__page__container">
                {
                    data.results.map((pokemon) => {
                        return <PokemonCard
                            key={pokemon.name}
                            pokemonUrl={pokemon.url}
                            pokemonName={pokemon.name}
                        />;
                    })
                }
            </div>
            <div ref={ref} style={{margin: '30px 0', textAlign: 'center'}}>{offset === 905 ? 'Pokemon are over' : 'Loading Pokemon...'}</div>
        </div>
    );
};