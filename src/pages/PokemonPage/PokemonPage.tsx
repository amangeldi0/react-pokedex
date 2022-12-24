import React from 'react';
import { useParams } from "react-router-dom";
import {useGetPokemonSpecies, useGetPokemonByName} from "@hooks";
import { PokemonHeader, PokemonPageSpinner} from "@components";
import {getNormalHeightWeight, getImgPathLink, getStatsFromArray, getStatPercent} from '@helpers';
import {COLORS} from "@constants";

export const PokemonPage = () => {
    const { pokemonName } = useParams();
    const name: string = pokemonName as string;


    const pokemon = useGetPokemonByName(name);
    const species = useGetPokemonSpecies(name);

    if (pokemon.isError || species.isError) throw new Error('error on PokemonPage component');
    if (pokemon.isLoading || species.isLoading ) return <PokemonPageSpinner />


    const {id, sprites, abilities, types, forms, height: h, weight: w, stats} = pokemon.data;
    const {color} = species.data;
    const {hp, attack, defence, spDefence, spAttack, speed} = getStatsFromArray(stats);
    const {hpPercent, defencePercent, spDefencePercent, spAttackPercent, attackPercent, speedPercent} = getStatPercent(getStatsFromArray(stats));
    const {height, weight, lbs, feet} = getNormalHeightWeight(h, w);

    return (
       <>
           <PokemonHeader color={color.name} />
           <div className="pokemon__page">
               <div className="pokemon__page__container">
                   <div className="pokemon__name">{name}</div>
                   <div className="pokemon__info__image__stats">
                       <div className="rotate__inf">
                           <div className="info">
                               <div className="info__id inf"><span>ID</span> <div className="content">#{id.toString().length === 1 ? `00${id}` : id.toString().length === 2 ? `0${id}` : `${id}`}</div></div>
                               <div className="info__height inf"><span>Height</span><div className="content">{height}m ( {feet} )</div></div>
                               <div className="info__weight inf"><span>Weight</span><div className="content">{weight}kg ( {lbs}lbs. )</div></div>
                               <div className="info__abilities inf"><span>Abilities</span>
                                   <div className="content content__ability">{abilities.map((ability) => (<div key={ability.ability.name} className="ability" style={{background: COLORS[`${color.name}`]}}>{ability.ability.name}</div>))}</div>
                               </div>
                               <div className="info__types inf"><span>Type</span>
                                   <div className="content content__type"> {types.map((type) =>
                                       (<div key={type.type.name} className={`type ${type.type.name}`}>
                                           {type.type.name} <img className='type__image' src={getImgPathLink(type.type.name)} alt=""/>
                                       </div>))}
                                   </div>
                               </div>
                               <div className="info__forms inf"><span>Forms</span>
                                   <div className="content content__form">{forms.map((form) => (<div className='form' key={form.name} style={{background: COLORS[`${color.name}`]}} >{form.name}</div>))}</div>
                               </div>

                           </div>
                       </div>
                       <div className="img">
                           <img src={sprites.other?.["official-artwork"].front_default} alt="pokemonImg"/>
                       </div>
                       <div className="rotate__stats">
                           <div className="stats">
                               <div className="stat">
                                   <div className="title hp">hp</div>
                                   <div className="value hp_value">
                                       <div className="progress_bar" style={{backgroundColor: COLORS[`${color.name}`], width: `${hpPercent}%`}}><div className="statValue">{hp}</div></div>
                                   </div>
                               </div>
                               <div className="stat">
                                   <div className="title attack">attack</div>
                                   <div className="value attack_value">
                                       <div className="progress_bar" style={{backgroundColor: COLORS[`${color.name}`], width: `${attackPercent + 5}%`}}><div className="statValue">{attack}</div></div>
                                   </div>
                               </div>
                               <div className="stat">
                                   <div className="title defence">defence</div>
                                   <div className="value defence_value">
                                       <div className="progress_bar" style={{backgroundColor: COLORS[`${color.name}`], width: `${defencePercent + 5}%`}}><div className="statValue">{defence}</div></div>
                                   </div>
                               </div>
                               <div className="stat">
                                   <div className="title sp_attack">sp. attack</div>
                                   <div className="value sp_attack_value">
                                       <div className="progress_bar" style={{backgroundColor: COLORS[`${color.name}`], width: `${spAttackPercent + 5}%`}}><div className="statValue">{spAttack}</div></div>
                                   </div>
                               </div>
                               <div className="stat">
                                   <div className="title sp_defence">sp. defence</div>
                                   <div className="value sp_defence_value">
                                       <div className="progress_bar" style={{backgroundColor: COLORS[`${color.name}`], width: `${spDefencePercent + 5}%`}}><div className="statValue">{spDefence}</div></div>
                                   </div>
                               </div>
                               <div className="stat">
                                   <div className="title speed">speed</div>
                                   <div className="value speed_value">
                                       <div className="progress_bar" style={{backgroundColor: COLORS[`${color.name}`], width: `${speedPercent + 5}%`}}><div className="statValue">{speed}</div></div>
                                   </div>
                               </div>
                               <div className="stat total">
                                   <div className="title total__title">total</div>
                                   <div className="total_value">{hp + attack + defence + spAttack + spDefence + speed}</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </>
        // <PokemonEvolutionChain name={name} url={species.data.evolution_chain.url} />
    );
};
