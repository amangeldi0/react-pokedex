import React from "react";
import { Type } from "@types";
import {getImgPathLink} from "@helpers";


export const PokemonTypes: React.FC<{types: Type[]}> = ({types}) => {

    const firstType = types[0]?.type.name;
    const secondType = types[1]?.type.name;

    if (types.length === 1){
        return (
            <div className='pokemonTypes'>
                <div className={`type ${firstType}`}>
                    <img src={getImgPathLink(firstType)} alt={`${firstType}`}/>
                </div>

            </div>
        );
    }else {
        return (
            <div className='pokemonTypes'>
                <div className={`type ${firstType}`}>
                    <img src={getImgPathLink(firstType)} alt={`${firstType}`}/>
                </div>
                <div className={`type ${secondType}`}>
                    <img src={getImgPathLink(secondType)} alt={`${secondType}`}/>
                </div>
            </div>
        );
    }
};