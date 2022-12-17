import {IResponsePokemons} from "@types";

export const useTypingPokemon = (pokemon: any, loading: boolean): IResponsePokemons | 'loading' => {

    if (loading) return 'loading';

    if (pokemon.types.length === 1){
        const typePokemon: IResponsePokemons = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            imageUrl: pokemon.sprites.other['official-artwork'].front_default,
            speciesLink: pokemon.species.url,
            moviesCount: pokemon.moves.length,
            gameCount: pokemon.game_indices.length,
            stats: {
                hp: {
                    stat: pokemon.stats[0].stat.name,
                    value: pokemon.stats[0].base_stat
                },
                attack: {
                    stat: pokemon.stats[1].stat.name,
                    value: pokemon.stats[1].base_stat
                },
                defense: {
                    stat: pokemon.stats[2].stat.name,
                    value: pokemon.stats[2].base_stat
                },
                speed: {
                    stat: pokemon.stats[5].stat.name,
                    value: pokemon.stats[5].base_stat
                },
                specialAttack: {
                    stat: pokemon.stats[3].stat.name,
                    value: pokemon.stats[3].base_stat
                },
                specialDefense: {
                    stat: pokemon.stats[4].stat.name,
                    value: pokemon.stats[4].base_stat
                }
            },
            types: {
                firstType: pokemon.types[0].type.name
            }
        };
        return typePokemon;

    } else {
            const typePokemon: IResponsePokemons = {
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                base_experience: pokemon.base_experience,
                imageUrl: pokemon.sprites.other['official-artwork'].front_default,
                speciesLink: pokemon.species.url,
                moviesCount: pokemon.moves.length,
                gameCount: pokemon.game_indices.length,
                stats: {
                    hp: {
                        stat: pokemon.stats[0].stat.name,
                        value: pokemon.stats[0].base_stat
                    },
                    attack: {
                        stat: pokemon.stats[1].stat.name,
                        value: pokemon.stats[1].base_stat
                    },
                    defense: {
                        stat: pokemon.stats[2].stat.name,
                        value: pokemon.stats[2].base_stat
                    },
                    speed: {
                        stat: pokemon.stats[5].stat.name,
                        value: pokemon.stats[5].base_stat
                    },
                    specialAttack: {
                        stat: pokemon.stats[3].stat.name,
                        value: pokemon.stats[3].base_stat
                    },
                    specialDefense: {
                        stat: pokemon.stats[4].stat.name,
                        value: pokemon.stats[4].base_stat
                    }
                },
                types: {
                    firstType: pokemon.types[0].type.name,
                    secondType: pokemon.types[1].type.name
                }
            };
            return typePokemon;
        }
};