import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import { useGetPokemonSpecies, useGetPokemonByName } from "@hooks";
import {PokemonHeader, PokemonPageSpinner, PokemonInfo, PokemonStats, AbilityModal, PokemonEvoChain} from "@components";


export const PokemonPage = () => {
    const { pokemonName } = useParams();
    const name: string = pokemonName as string;
    const [modal, setModal] = useState<boolean>(false);
    const [link, setLink] = useState<string>('');


    const pokemon = useGetPokemonByName(name);
    const species = useGetPokemonSpecies(name);

    if (pokemon.isError || species.isError) throw new Error('error on PokemonPage component');
    if (pokemon.isLoading || species.isLoading ) return <PokemonPageSpinner />;


    const { sprites } = pokemon.data;
    const { color, evolution_chain: evolutionChain} = species.data;



    return (
       <>
           {modal ? <AbilityModal link={link} setModal={setModal} color={color.name}/> : ''}
           <PokemonHeader color={color.name} />
           <div className="pokemon__page">
               <div className="pokemon__page__container">
                   <div className="pokemon__name title">{name}</div>
                   <div className="pokemon__info__image__stats">
                       <PokemonInfo setModal={setModal} setLink={setLink} pokemon={pokemon.data} species={species.data}/>
                       <div className="img">
                           <img src={sprites.other?.["official-artwork"].front_default} alt="pokemonImg"/>
                       </div>
                       <PokemonStats pokemon={pokemon.data} species={species.data} />
                   </div>
                   <div className="pokemon__name evo__title">Evolution Chain</div>
                   <PokemonEvoChain url={evolutionChain.url} curName={name} color={color.name}/>
               </div>
           </div>

       </>
    );
};
