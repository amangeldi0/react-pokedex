import {IResponsePokemons} from "@types";

export const typingPokemon = (results: any): IResponsePokemons[] => {
    const pokemons: IResponsePokemons[] = results.map((result: any) => {
        if (result.data?.data.types.length === 1){
            const typePokemon: IResponsePokemons = {
                id: result.data?.data.id,
                name: result.data?.data.name,
                height: result.data?.data.height,
                weight: result.data?.data.weight,
                base_experience: result.data?.data.base_experience,
                imageUrl: result.data?.data.sprites.other['official-artwork'].front_default,
                speciesLink: result.data?.data.species.url,
                moviesCount: result.data?.data.moves.length,
                gameCount: result.data?.data.game_indices.length,
                stats: {
                    hp: {
                        stat: result.data?.data.stats[0].stat.name,
                        value: result.data?.data.stats[0].base_stat
                    },
                    attack: {
                        stat: result.data?.data.stats[1].stat.name,
                        value: result.data?.data.stats[1].base_stat
                    },
                    defense: {
                        stat: result.data?.data.stats[2].stat.name,
                        value: result.data?.data.stats[2].base_stat
                    },
                    speed: {
                        stat: result.data?.data.stats[5].stat.name,
                        value: result.data?.data.stats[5].base_stat
                    },
                    specialAttack: {
                        stat: result.data?.data.stats[3].stat.name,
                        value: result.data?.data.stats[3].base_stat
                    },
                    specialDefense: {
                        stat: result.data?.data.stats[4].stat.name,
                        value: result.data?.data.stats[4].base_stat
                    }
                },
                types: {
                    firstType: result.data?.data.types[0].type.name
                }
            };
            return typePokemon;

        }else {
            const typePokemon: IResponsePokemons = {
                id: result.data?.data.id,
                name: result.data?.data.name,
                height: result.data?.data.height,
                weight: result.data?.data.weight,
                base_experience: result.data?.data.base_experience,
                imageUrl: result.data?.data.sprites.other['official-artwork'].front_default,
                speciesLink: result.data?.data.species.url,
                moviesCount: result.data?.data.moves.length,
                gameCount: result.data?.data.game_indices.length,
                stats: {
                    hp: {
                        stat: result.data?.data.stats[0].stat.name,
                        value: result.data?.data.stats[0].base_stat
                    },
                    attack: {
                        stat: result.data?.data.stats[1].stat.name,
                        value: result.data?.data.stats[1].base_stat
                    },
                    defense: {
                        stat: result.data?.data.stats[2].stat.name,
                        value: result.data?.data.stats[2].base_stat
                    },
                    speed: {
                        stat: result.data?.data.stats[5].stat.name,
                        value: result.data?.data.stats[5].base_stat
                    },
                    specialAttack: {
                        stat: result.data?.data.stats[3].stat.name,
                        value: result.data?.data.stats[3].base_stat
                    },
                    specialDefense: {
                        stat: result.data?.data.stats[4].stat.name,
                        value: result.data?.data.stats[4].base_stat
                    },
                },
                types: {
                    firstType: result.data?.data.types[0].type.name,
                    secondType: result.data?.data.types[1].type.name
                }
            };
            return typePokemon;
        }
    });
    return pokemons;
};