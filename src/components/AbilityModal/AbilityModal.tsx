import React from 'react';
import { useGetPokemonAbilityByLink } from '@hooks';
import loader from '../../assets/loader.gif';
import { IAbility, AbilityData } from '@types';
import {COLORS} from "@constants";
export const AbilityModal: React.FC<IAbility> = ({link, setModal, color}) => {

    if (link === '') return null;

    const {data, isLoading} = useGetPokemonAbilityByLink(link);

    const bg = {
        background: COLORS[color]
    };

    if (isLoading) return (
        <div className='ability__modal'>
            <div className="ability__modal__window" style={{justifyContent: 'center'}}>
                <img src={loader} alt=""/>
            </div>
        </div>
    );

    const {name, effect_entries: effectEntries, flavor_text_entries: flavorTextEntries}: AbilityData = data;

    const effect = effectEntries.filter(effect => effect.language.name === 'en');
    const inDepth = flavorTextEntries.filter(flavor => flavor.language.name === 'en');

    return (
        <div className='ability__modal'>
            <div className="ability__modal__window">
                <div className="ability__name">{name}</div>
                <div className="abilities">
                    <div className="game__desc ability">
                        <div className="title"><div style={bg}>GAME DESCRIPTION</div></div>
                        <div className="content">{inDepth[inDepth.length - 1].flavor_text}</div>
                    </div>
                    <div className="game__effect ability">
                        <div className="title"><div style={bg}>EFFECT</div></div>
                        <div className="content">{effect.length !== 0  ? effect[0].short_effect : 'None information'}</div>
                    </div>
                    <div className="game__in__effect ability">
                        <div className="title"><div style={bg}>IN-DEPTH EFFECT</div></div>
                        <div className="content">{effect.length !== 0  ? effect[0].effect : 'None information'}</div>
                    </div>
                </div>

                <div className="ability__close" >
                    <button  onClick={() => setModal(false)}>Close</button>
                </div>
            </div>
        </div>
    );
};
