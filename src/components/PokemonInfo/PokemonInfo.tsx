import React from 'react';
import {COLORS} from "@constants";
import { IPokemonInfoStats } from '@types';
import {getImgPathLink, getNormalHeightWeight} from "@helpers";

export const PokemonInfo: React.FC<IPokemonInfoStats> = ({pokemon, species}) => {
    const {id, height: h, weight: w, abilities, types,} = pokemon;
    const {varieties, color} = species;

    const {feet, lbs, height, weight} = getNormalHeightWeight(h, w);

    return (
        <div className="rotate__inf">
            <div className="info">
                <div className="info__id inf"><div className='label'>ID</div> <div className="content">#{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}</div></div>
                <div className="info__height inf"><div className='label'>Height</div><div className="content">{height}m ( {feet} )</div></div>
                <div className="info__weight inf"><div className='label'>Weight</div><div className="content">{weight}kg ( {lbs}lbs. )</div></div>
                <div className="info__abilities inf"><div className='label'>Abilities</div>
                    <div className="content content__ability">{abilities.map((ability) => (<div  key={ability.ability.name} className="ability" style={{background: COLORS[`${color.name}`]}}>{ability.ability.name}</div>))}</div>
                </div>
                <div className="info__types inf"><div className='label'>Type</div>
                    <div className="content content__type"> {types.map((type) =>
                        (<div key={type.type.name} className={`type ${type.type.name}`}>
                            {type.type.name} <img className='type__image' src={getImgPathLink(type.type.name)} alt=""/>
                        </div>))}
                    </div>
                </div>
                <div className="info__forms inf"><div className='label'>Forms</div>
                    <div className="content content__form">{varieties.map((variety) => (<div className='form' key={variety.pokemon.name} style={{background: COLORS[`${color.name}`]}} >{variety.pokemon.name}</div>))}</div>
                </div>
            </div>
        </div>
    );
};

