import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import { Result, Pokemon } from "@types";

export const usePokemonQuery = ({url, name}: Result): { data: Pokemon; isLoading: boolean; isError: boolean } => {

    const {data, isLoading, isError} = useQuery({
        queryKey: ['pokemon', name],
        queryFn: async () => await axios.get(url).then(data => data.data)
    });
    return {data, isLoading, isError};
};