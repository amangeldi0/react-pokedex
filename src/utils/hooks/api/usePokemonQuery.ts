import axios from "axios";
import {useQuery} from "@tanstack/react-query";

export const usePokemonQuery = (pokemonUrl: string, pokemonName: string) => {

    const {data , isLoading} = useQuery({
        queryKey: ['pokemon', pokemonName],
        queryFn: async () => await axios.get(pokemonUrl).then(data => data.data)
    });
    return {
        data,
        isLoading
    };
};