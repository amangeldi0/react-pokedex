import {useQuery} from "@tanstack/react-query";
import { Evolution} from "@types";
import axios from "axios";


export const useGetPokemonEvolutions = (url: string): { data: Evolution; isLoading: boolean; isError: boolean } => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['evolution', url],
        queryFn: async () => await axios.get(`${url}`).then(data => data.data)
    });

    return {data, isLoading, isError};
};