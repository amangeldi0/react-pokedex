import { api } from "./intance";
import { useQuery } from "@tanstack/react-query";

export const useTakePokemonName =  (): void => {
    const name = useQuery({
        queryKey: ['pokemonName'],
        queryFn:  async () => await api.get('pokemon?limit=905&offset=0').then(data => data.data)
    });
    console.log(name);
}