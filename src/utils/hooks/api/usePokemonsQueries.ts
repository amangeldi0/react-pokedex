import {usePokemonsQueriesProps, IRequestPokemonParams } from "@types";
import {useQueries} from "@tanstack/react-query";
import {api} from "./intance";

const requestPokemonById = async ({ params, config } : IRequestPokemonParams) => {
    return  await api.get(`pokemon/${params.id}`, {...config});
};

export const usePokemonsQueries = ({offset} : usePokemonsQueriesProps) => {
    return useQueries({
        queries: Array.from({length: offset}).map((_el: any, index:number) => {
            const pokemonId: number = index + 1;
            return {
                queryKey: ['pokemon', pokemonId],
                queryFn: async () => await requestPokemonById({params: {id: pokemonId}})
            };
        })
    });
};