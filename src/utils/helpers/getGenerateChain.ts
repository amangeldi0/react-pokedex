import { Chain } from "@types";

export const getGenerateChain = (pokemonName: string, chainLink: Chain): any => {
    if (chainLink.species.name === pokemonName)
        return { prev: null, current: chainLink, next: chainLink.evolves_to };

    let chain;
    for (let i = 0; i < chainLink.evolves_to.length; i += 1) {
        const evolve = chainLink.evolves_to[i];
        if (evolve.species.name === pokemonName) {
            chain = { prev: chainLink, current: evolve, next: evolve.evolves_to };
            break;
        }

        chain = getGenerateChain(pokemonName, evolve);
    }

    return chain;
}