import React from 'react';
import {getGenerationChain, Result} from "@types";
import { useGetPokemonEvolutions } from '@hooks';
import {getGenerateChain} from "../../utils/helpers/getGenerateChain";

export const PokemonEvolutionChain: React.FC<Result> = ({url, name}) => {

    const {data, isError, isLoading} = useGetPokemonEvolutions(url);

    if (isLoading) return null;

    const pokemonChain: getGenerationChain = getGenerateChain(name, data.chain);

    console.log(pokemonChain);
    return (
        <div>

        </div>
    );
};