import React from 'react';
import { useGetPokemonByName } from '@hooks';
import { useNavigate } from "react-router";
import {COLORS} from "@constants";


export const EvoCard: React.FC<{name: string, curName: string, color: string}> = ({name, curName, color}) => {

    const {data, isLoading, isError} = useGetPokemonByName(name);
    const navigate = useNavigate();

    if (isLoading) return null;

    if (isError) throw new Error('error');

    const {id, sprites} = data;

    const bg = {
        color: COLORS[color]
    };
    return (
        <div className='evo__card' onClick={() => navigate(`/pokemon/${name}`)}>
            <div className="evo__image"><img src={sprites.other?.["official-artwork"].front_default} alt=""/></div>
            <div className="evo__id" style={curName === name ? bg : {}}>#{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}</div>
            <div className="evo__name" style={curName === name ? bg : {}}>{name}</div>
        </div>
    );
};