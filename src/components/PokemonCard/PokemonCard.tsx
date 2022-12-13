import React from "react";
import { IResponsePokemons } from "@types";
import {PokemonTypes} from "../PokemonType/pokemonTypes";

export const PokemonCard: React.FC<{ pokemon: IResponsePokemons }> = ( pokemon) => {
    const {imageUrl, id, name, types} = pokemon.pokemon;
    const {firstType, secondType} = types;


    return(
        <div className='pokemon__card'>
            <div className="pokemon__image">
                <img src={imageUrl} alt="pokemon__image"/>
            </div>
            <div className="pokemon__number">#{
                id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`
            }</div>
            <div className="pokemon__name">{name}</div>
            <PokemonTypes firstType={firstType} secondType={secondType} />
        </div>
    );
};