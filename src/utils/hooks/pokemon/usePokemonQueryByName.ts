import {IRequestPokemonParamsByName, Pokemon} from "@types";
import { api } from "./intance";
import { useQuery } from "@tanstack/react-query";

const requestPokemons = async ({ params, config } : IRequestPokemonParamsByName) => {
    return await api.get(`/pokemon/${params.name}`, {...config}).then(data => data.data);
};


export const usePokemonQueryByName = (name: string): {data: Pokemon, isError: boolean, isLoading: boolean} => {
    const  {data, isError, isLoading} = useQuery({
        queryKey: ['pokemon', name],
        queryFn: async () => await requestPokemons({params: {name}})
    });

    return {data, isError, isLoading};
};