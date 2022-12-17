import {AxiosRequestConfig} from "axios";

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


export interface usePokemonsQueriesProps {
    offset: number;
}

export interface IRequestPokemonParams {
    params: { limit: number };
    config?: AxiosRequestConfig;
}