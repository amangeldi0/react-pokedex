import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AbilityData } from '@types';

export const useGetPokemonAbilityByLink = (
  link: string
): { data: AbilityData; isError: boolean; isLoading: boolean } => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['ability', link],
    queryFn: async () => await axios.get(link).then((data) => data.data)
  });

  return { data, isError, isLoading };
};
