import {AxiosRequestConfig} from "axios";
import {Dispatch, SetStateAction} from "react";

// max attack 190
// max speed 200
// max defence 250
// max hp 255
// max species attack 194
// max species defence 250


interface stat {
    stat: string;
    value: number
}

export interface IPokemonTypesProps {
    firstType: string;
    secondType?: string;
}


export interface IResponsePokemons {
    id: number;
    name: string
    height: number;
    weight: number;
    base_experience: number;
    stats: {
        hp: stat;
        attack: stat;
        defense: stat;
        speed: stat;
        specialAttack: stat;
        specialDefense: stat;
    };
    types: {
        firstType: string;
        secondType?: string;
    };
    imageUrl: string;
    speciesLink: string;
    moviesCount: number;
    gameCount: number;


}
export interface IAutoCompleteProps {
    suggestions: string[] | undefined;
}



export interface useOutsideClickProps {
    initialIsVisible: boolean;
    setSearch: Dispatch<SetStateAction<string>>
}

export interface IRequestPokemonParams {
    params: { limit: number };
    config?: AxiosRequestConfig;
}
interface IResponseArray {
    name: string;
    url: string;
}
export interface IResponsePokemonsLink {
    count: number;
    next: string | null;
    previous: string | null;
    results: IResponseArray[];

}
