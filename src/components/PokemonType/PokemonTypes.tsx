import React from "react";
import {IPokemonTypesProps} from "@types";

function getImgUrl(fileName: string) : string{
    return new URL(`../../assets/icon/typeIcon/${fileName}.png`, import.meta.url).href;
}


export const PokemonTypes: React.FC<IPokemonTypesProps> = ({firstType, secondType}) => {


    if (secondType !== undefined){
        return (
            <div className='pokemonTypes'>
                <div className={`type ${firstType}`}>
                    <img src={getImgUrl(firstType)} alt={`${firstType}`}/>
                </div>
                <div className={`type ${secondType}`}>
                    <img src={getImgUrl(secondType)} alt={`${secondType}`}/>
                </div>
            </div>
        );
    }else {
        return (
            <div className='pokemonTypes'>
                <div className={`type ${firstType}`}>
                    <img src={getImgUrl(firstType)} alt={`${firstType}`}/>
                </div>
            </div>
        );
    }
};