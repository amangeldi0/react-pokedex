import { IRequestPokemonParams } from "@types";
import { useQuery } from "@tanstack/react-query";
import {api} from "./intance";

const requestPokemons = async ({ params, config } : IRequestPokemonParams) => {
    return  await api.get(`/pokemon?limit=${params.limit}&offset=0`, {...config}).then(data => data.data);
};

export const usePokemonsQueries = (offset: number) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pokemon', offset],
        queryFn: async () => await requestPokemons({params: { limit: offset } }),
        keepPreviousData: true
    });


    return {isLoading, isError, data};
};