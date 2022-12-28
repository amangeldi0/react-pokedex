import {AxiosRequestConfig} from "axios";
import {Dispatch, SetStateAction} from "react";
import {Chain, EvolutionDetail, PokemonSpecies} from "./species";
import {PokemonInfo} from "../components/PokemonInfo/PokemonInfo";
import {Pokemon} from "./pokemon";

// Pokemon
export * from './pokemon';
// Pokemon Species
export * from './species';

export interface IAutoCompleteProps {
    suggestions: string[] | undefined;
    focus: boolean;
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}
export interface getNormalHeightWeightReturn {
    height: string;
    weight: string;
    lbs: string;
    feet: string;
}

export interface statReturn {
    hp: number;
    attack: number;
    defence: number;
    spAttack: number;
    spDefence: number;
    speed: number;
}
export interface statPercentReturn {
    hpPercent: number;
    attackPercent: number;
    defencePercent: number;
    spAttackPercent: number;
    spDefencePercent: number;
    speedPercent: number;
}

export interface IPokemonInfoStats {
    pokemon: Pokemon;
    species: PokemonSpecies;
}
export interface ChainObj {
    name: string;
    details: EvolutionDetail | undefined
}

export interface colors{
    [key: string] : string
}

export interface useOutsideClickProps {
    initialIsVisible: boolean;
    setSearch: Dispatch<SetStateAction<string>>
}

export interface IRequestPokemonParams {
    params: { limit: number };
    config?: AxiosRequestConfig;
}

export interface IRequestPokemonParamsByName {
    params: { name: string };
    config?: AxiosRequestConfig;
}

// Get Generation Chain

export interface getGenerationChain {
    prev: null | Chain
    current: Chain
    next: [] | Chain[]
}

// Pokemons List
export interface PokemonList {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
