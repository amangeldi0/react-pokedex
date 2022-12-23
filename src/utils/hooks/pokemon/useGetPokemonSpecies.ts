import {useQuery} from "@tanstack/react-query";
import {IRequestPokemonParamsByName, PokemonSpecies} from "@types";
import { api } from "./intance";

const requestPokemons = async ({ params, config } : IRequestPokemonParamsByName) => {
    return await api.get(`/pokemon-species/${params.name}`, {...config}).then(data => data.data);
};


export const useGetPokemonSpecies = (name: string): { data: PokemonSpecies; isLoading: boolean; isError: boolean } => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['pokemonSpecies', name],
        queryFn: async () => await requestPokemons({params: {name}})
    });
    return {data, isLoading, isError};
};