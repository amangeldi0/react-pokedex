import React from 'react';
import { useParams } from "react-router-dom";
import {useGetPokemonSpecies, useGetPokemonByName} from "@hooks";
import { PokemonHeader, PokemonPageSpinner, PokemonInfo, PokemonStats} from "@components";
import {getNormalHeightWeight, getImgPathLink, getStatsFromArray, getStatPercent, getEvolutionChain} from '@helpers';
import {COLORS} from "@constants";

export const PokemonPage = () => {
    const { pokemonName } = useParams();
    const name: string = pokemonName as string;

    const pokemon = useGetPokemonByName(name);
    const species = useGetPokemonSpecies(name);

    if (pokemon.isError || species.isError) throw new Error('error on PokemonPage component');
    if (pokemon.isLoading || species.isLoading ) return <PokemonPageSpinner />;


    const { sprites } = pokemon.data;
    const {color, evolution_chain} = species.data;

    const evolutions = getEvolutionChain(evolution_chain.url);

    return (
       <>
           <PokemonHeader color={color.name} />
           <div className="pokemon__page">
               <div className="pokemon__page__container">
                   <div className="pokemon__name">{name}</div>
                   <div className="pokemon__info__image__stats">
                       <PokemonInfo pokemon={pokemon.data} species={species.data} />
                       <div className="img">
                           <img src={sprites.other?.["official-artwork"].front_default} alt="pokemonImg"/>
                       </div>
                       <PokemonStats pokemon={pokemon.data} species={species.data} />
                   </div>
               </div>
           </div>
       </>
    );
};
