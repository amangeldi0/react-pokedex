import React from 'react';
import { useParams } from "react-router-dom";
import {usePoekemonSpecies, usePokemonEvolutions, usePokemonQueryByName} from "@hooks";
import {PokemonHeader} from "@components";
import {getGenerateChain} from "../../utils/helpers/getGenerateChain";


export const PokemonPage = () => {
    const { pokemonName } = useParams();
    const name: string = pokemonName as string;


    const pokemon = usePokemonQueryByName(name);
    const species = usePoekemonSpecies(name);
    const evolution = usePokemonEvolutions(species.data?.evolution_chain?.url);










    return (
       // <PokemonHeader color={species.data?.color.name} />
        <></>
    );
};
