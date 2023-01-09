import { AxiosRequestConfig } from 'axios';
import React, { Dispatch, SetStateAction } from 'react';
import { Chain } from './species';

// Pokemon
export * from './pokemon';
// Pokemon Species
export * from './species';
// Pokemon Ability
export * from './Ability';

// Person
export * from './Person';

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
export interface IPokemonInfo {
  pokemon: Pokemon;
  species: PokemonSpecies;
  setLink: Dispatch<SetStateAction<string>>;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export interface IPokemonEvoChain {
  evoChain: Chain[];
}

export interface IAbility {
  link: string;
  setModal: Dispatch<SetStateAction<boolean>>;
  color: string;
}

export interface ChainObj {
  name: string;
  details: EvolutionDetail | undefined;
}

export interface colors {
  [key: string]: string;
}

export interface useOutsideClickProps {
  initialIsVisible: boolean;
  setSearch?: Dispatch<SetStateAction<string>>;
}

export interface IRequestPokemonParams {
  params: { limit: number };
  config?: AxiosRequestConfig;
}

export interface IRequestPokemonParamsByName {
  params: { name: string };
  config?: AxiosRequestConfig;
}

// Pokemons List
export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface RequestMutationSettings<Func = {}> {
  options?: import('@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    any,
    any
  >;
}

export interface AUTHProps {
  isSingIn: boolean;
  setIsSignIN: Dispatch<SetStateAction<boolean>>;
}
export interface AuthContextState {
  session: {
    isLogin: boolean
  }
}

export interface AuthStoreProvide {
  children: React.ReactNode;
}

export interface AuthContextProps {
  auth: AuthContextState;
  setAuth: React.Dispatch<React.SetStateAction<AuthContextState>>;
}