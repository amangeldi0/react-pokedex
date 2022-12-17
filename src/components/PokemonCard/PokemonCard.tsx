import React, {useState} from "react";
import { PokemonTypes } from "../PokemonType/PokemonTypes";
import { usePokemonQuery, useTypingPokemon } from "@hooks";
import loader from '../../assets/loader.gif';

export const PokemonCard: React.FC<{pokemonUrl: string, pokemonName: string}> = ( {pokemonUrl, pokemonName}) => {
    const { data, isLoading} = usePokemonQuery(pokemonUrl, pokemonName);
    const pokemon = useTypingPokemon(data, isLoading);
    const [load, setLoad] = useState<boolean>(true);



    if (pokemon === 'loading') return (
        <div className='pokemon__card__skeleton'>
            <div className="number__skeleton"></div>
            <div className="types__skeleton">
                <div className="types__circle"></div>
                <div className="types__circle"></div>
            </div>
            <div className="image_skeleton"></div>
            <div className="name_skeleton"></div>
        </div>
    );

    const {imageUrl, id, name, types} = pokemon;
    const {firstType, secondType} = types;

    return(
        <div className='pokemon__card'>
            <div className="pokemon__image">
                {load ? <div className='loader'><img src={loader} alt=""/> <div className='info'>image loading...</div></div> : <div></div>}
                <img src={imageUrl} alt="pokemon__image" className='image' loading='lazy' onLoad={() => setLoad(false)}/>

            </div>
            <div className="pokemon__number">
                #{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}
            </div>
            <div className="pokemon__name">{name}</div>
            <PokemonTypes firstType={firstType} secondType={secondType} />
        </div>
    );


};