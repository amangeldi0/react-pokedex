import React, { useState } from "react";
import {usePokemonsQueries} from "../../utils/hooks/api/usePokemonsQueries";
import { PokemonCard } from '@components';
import {IResponsePokemons} from "@types";
import {typingPokemon} from "../../utils/hooks/pokemon/typingPokemon";





export const PokemonsPage: React.FC = () => {

    const [offset, setOffset] = useState<number>(40);


    const results = usePokemonsQueries({offset});


    const isLoading = results.some(result => result.isLoading);

    if (isLoading) return null;

    const pokemons: IResponsePokemons[] = typingPokemon(results);

    return(
        <div className="pokemons__page">
            <div className="pokemons__page__container">
                {
                    pokemons.map(pokemon => {
                        return <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />;
                    })
                }
            </div>
            <button onClick={() => setOffset(offset + 10)}>More</button>
        </div>
    );
};